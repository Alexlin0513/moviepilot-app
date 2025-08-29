/**
 * 用户相关API接口
 */
import authAPI from './auth.js';

class UserAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 获取当前登录用户信息
	 * @returns {Promise} 用户信息
	 */
	async getCurrentUser() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: null
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/current`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `获取用户信息失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取当前用户信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 获取所有用户列表
	 * @returns {Promise} 用户列表
	 */
	async getAllUsers() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `获取用户列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取用户列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 根据用户名获取用户详情
	 * @param {string} username - 用户名
	 * @returns {Promise} 用户详情
	 */
	async getUserByName(username) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: null
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/${username}`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `获取用户详情失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取用户详情失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 新增用户
	 * @param {Object} userData - 用户数据
	 * @returns {Promise} 创建结果
	 */
	async createUser(userData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: userData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `创建用户失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('创建用户失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 更新用户信息
	 * @param {Object} userData - 用户数据
	 * @returns {Promise} 更新结果
	 */
	async updateUser(userData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/`,
				method: 'PUT',
				header: this.authAPI.getAuthHeaders(),
				data: userData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `更新用户失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新用户失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 通过用户ID删除用户
	 * @param {number} userId - 用户ID
	 * @returns {Promise} 删除结果
	 */
	async deleteUserById(userId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/id/${userId}`,
				method: 'DELETE',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `删除用户失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除用户失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 通过用户名删除用户
	 * @param {string} userName - 用户名
	 * @returns {Promise} 删除结果
	 */
	async deleteUserByName(userName) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/name/${userName}`,
				method: 'DELETE',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `删除用户失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除用户失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 上传用户头像
	 * @param {number} userId - 用户ID
	 * @param {File} file - 头像文件
	 * @returns {Promise} 上传结果
	 */
	async uploadAvatar(userId, file) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.uploadFile({
				url: `${userInfo.server_url}/api/v1/user/avatar/${userId}`,
				filePath: file.path,
				name: 'file',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: JSON.parse(response.data)
				};
			} else {
				return {
					success: false,
					error: `上传头像失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('上传头像失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 生成OTP验证URI
	 * @returns {Promise} OTP URI
	 */
	async generateOtpUri() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/otp/generate`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `生成OTP URI失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('生成OTP URI失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 验证OTP
	 * @param {Object} otpData - OTP验证数据
	 * @returns {Promise} 验证结果
	 */
	async verifyOtp(otpData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/otp/judge`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: otpData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `OTP验证失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('OTP验证失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 关闭OTP验证
	 * @returns {Promise} 关闭结果
	 */
	async disableOtp() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/otp/disable`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `关闭OTP失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('关闭OTP失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 检查用户是否开启OTP验证
	 * @param {string} userId - 用户ID
	 * @returns {Promise} OTP状态
	 */
	async checkOtpStatus(userId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/otp/${userId}`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `检查OTP状态失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('检查OTP状态失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取用户配置
	 * @param {string} key - 配置键
	 * @returns {Promise} 配置值
	 */
	async getUserConfig(key) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/config/${key}`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `获取用户配置失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('获取用户配置失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 更新用户配置
	 * @param {string} key - 配置键
	 * @param {Array} value - 配置值
	 * @returns {Promise} 更新结果
	 */
	async updateUserConfig(key, value) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/user/config/${key}`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: value
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `更新用户配置失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新用户配置失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
}

// 创建单例实例
const userAPI = new UserAPI();

export default userAPI;