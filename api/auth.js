/**
 * 认证相关API接口
 */
class AuthAPI {
	constructor() {
		this.baseUrl = '';
		this.token = '';
		this.tokenType = '';
	}
	
	/**
	 * 设置服务器基础URL
	 */
	setBaseUrl(url) {
		this.baseUrl = url.replace(/\/$/, ''); // 移除末尾的斜杠
	}
	
	/**
	 * 设置认证token
	 */
	setToken(token, tokenType = 'Bearer') {
		this.token = token;
		this.tokenType = tokenType;
	}
	
	/**
	 * 获取认证头
	 */
	getAuthHeaders() {
		const headers = {
			'Content-Type': 'application/json'
		};
		
		if (this.token) {
			// 确保 tokenType 首字母大写
			const tokenType = this.tokenType ? 
				this.tokenType.charAt(0).toUpperCase() + this.tokenType.slice(1).toLowerCase() : 
				'Bearer';
			headers['Authorization'] = `${tokenType} ${this.token}`;
		}
		
		return headers;
	}
	
	/**
	 * 用户登录
	 * @param {Object} loginData - 登录数据
	 * @param {string} loginData.username - 用户名
	 * @param {string} loginData.password - 密码
	 * @returns {Promise} 登录结果
	 */
	async login(loginData) {
		const formData = this.buildFormData({
			grant_type: 'password',
			username: loginData.username,
			password: loginData.password,
			scope: '',
			client_id: '',
			client_secret: ''
		});
		
		const response = await uni.request({
			url: `${this.baseUrl}/api/v1/login/access-token`,
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: formData
		});
		
		if (response.statusCode === 200 && response.data.access_token) {
			// 确保token_type格式正确
			const tokenType = response.data.token_type || 'Bearer';
			
			// 保存token信息
			this.setToken(response.data.access_token, tokenType);
			
			// 构建用户信息
			const userInfo = {
				access_token: response.data.access_token,
				token_type: tokenType,
				super_user: response.data.super_user,
				user_id: response.data.user_id,
				user_name: response.data.user_name,
				avatar: response.data.avatar,
				level: response.data.level,
				permissions: response.data.permissions,
				server_url: this.baseUrl
			};
			
			// 保存到本地存储
			uni.setStorageSync('moviepilot_user_info', userInfo);
			
			return {
				success: true,
				data: userInfo
			};
		} else {
			return {
				success: false,
				error: '登录失败，请检查账号密码'
			};
		}
	}
	
	/**
	 * 获取登录页面海报
	 * @returns {Promise} 海报列表
	 */
	async getWallpapers() {
		try {
			const response = await uni.request({
				url: `${this.baseUrl}/api/v1/login/wallpapers`,
				method: 'GET'
			});
			
			if (response.statusCode === 200 && Array.isArray(response.data)) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					data: []
				};
			}
		} catch (error) {
			console.error('获取海报失败:', error);
			return {
				success: false,
				data: []
			};
		}
	}
	
	/**
	 * 获取单个登录页面海报
	 * @returns {Promise} 海报信息
	 */
	async getWallpaper() {
		try {
			const response = await uni.request({
				url: `${this.baseUrl}/api/v1/login/wallpaper`,
				method: 'GET'
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					data: null
				};
			}
		} catch (error) {
			console.error('获取单个海报失败:', error);
			return {
				success: false,
				data: null
			};
		}
	}
	
	
	/**
	 * 从本地存储加载用户信息
	 */
	loadUserInfo() {
		try {
			const userInfo = uni.getStorageSync('moviepilot_user_info');
			if (userInfo) {
				this.setBaseUrl(userInfo.server_url);
				this.setToken(userInfo.access_token, userInfo.token_type);
				return userInfo;
			}
		} catch (error) {
			console.error('加载用户信息失败:', error);
		}
		return null;
	}
	
	/**
	 * 清除用户信息
	 */
	logout() {
		try {
			uni.removeStorageSync('moviepilot_user_info');
			this.token = '';
			this.tokenType = '';
			this.baseUrl = '';
		} catch (error) {
			console.error('清除用户信息失败:', error);
		}
	}
	
	/**
	 * 构建表单数据
	 */
	buildFormData(data) {
		const formData = [];
		for (const key in data) {
			if (data[key] !== null && data[key] !== undefined) {
				formData.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
			}
		}
		return formData.join('&');
	}
}

// 创建单例实例
const authAPI = new AuthAPI();

export default authAPI;