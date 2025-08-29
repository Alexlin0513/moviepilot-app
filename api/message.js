/**
 * 消息相关API接口
 */
import authAPI from './auth.js';

class MessageAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 回调请求验证
	 * @param {Object} params - 验证参数
	 * @returns {Promise} 验证结果
	 */
	async verifyCallback(params = {}) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const queryParams = new URLSearchParams();
			if (params.token) queryParams.append('token', params.token);
			if (params.echostr) queryParams.append('echostr', params.echostr);
			if (params.msg_signature) queryParams.append('msg_signature', params.msg_signature);
			if (params.timestamp) queryParams.append('timestamp', params.timestamp);
			if (params.nonce) queryParams.append('nonce', params.nonce);
			if (params.source) queryParams.append('source', params.source);
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/?${queryParams.toString()}`,
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
					error: `回调验证失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('回调验证失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 接收用户消息
	 * @param {Object} messageData - 消息数据
	 * @returns {Promise} 处理结果
	 */
	async receiveMessage(messageData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: messageData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `接收消息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('接收消息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取WEB消息列表
	 * @param {number} page - 页码（默认1）
	 * @param {number} count - 每页数量（默认20）
	 * @returns {Promise} 消息列表
	 */
	async getWebMessages(page = 1, count = 20) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const params = new URLSearchParams({
				page: page.toString(),
				count: count.toString()
			});
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/web?${params.toString()}`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data || []
				};
			} else {
				return {
					success: false,
					error: `获取WEB消息失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取WEB消息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 发送WEB消息
	 * @param {string} text - 消息文本
	 * @returns {Promise} 发送结果
	 */
	async sendWebMessage(text) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = new URLSearchParams({
				text: text
			});
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/web?${params.toString()}`,
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
					error: `发送WEB消息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('发送WEB消息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 订阅WebPush通知
	 * @param {Object} subscriptionData - 订阅数据
	 * @returns {Promise} 订阅结果
	 */
	async subscribeWebPush(subscriptionData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/webpush/subscribe`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: subscriptionData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `订阅WebPush失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('订阅WebPush失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 发送WebPush通知
	 * @param {Object} notificationData - 通知数据
	 * @returns {Promise} 发送结果
	 */
	async sendWebPush(notificationData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/message/webpush/send`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: notificationData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `发送WebPush通知失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('发送WebPush通知失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
}

// 创建单例实例
const messageAPI = new MessageAPI();

export default messageAPI;