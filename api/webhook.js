/**
 * Webhook相关API接口
 */
import authAPI from './auth.js';

class WebhookAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 处理Webhook GET请求
	 * @param {Object} params - 请求参数
	 * @returns {Promise} 处理结果
	 */
	async handleWebhookGet(params = {}) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const queryParams = new URLSearchParams();
			Object.keys(params).forEach(key => {
				if (params[key] !== undefined && params[key] !== null) {
					queryParams.append(key, params[key]);
				}
			});
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/webhook/?${queryParams.toString()}`,
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
					error: `Webhook GET请求失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('Webhook GET请求失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 处理Webhook POST请求
	 * @param {Object} webhookData - Webhook数据
	 * @param {Object} params - 查询参数
	 * @returns {Promise} 处理结果
	 */
	async handleWebhookPost(webhookData, params = {}) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const queryParams = new URLSearchParams();
			Object.keys(params).forEach(key => {
				if (params[key] !== undefined && params[key] !== null) {
					queryParams.append(key, params[key]);
				}
			});
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/webhook/?${queryParams.toString()}`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: webhookData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `Webhook POST请求失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('Webhook POST请求失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 发送媒体服务器Webhook
	 * @param {string} source - 媒体服务器名称
	 * @param {string} token - API Token
	 * @param {Object} data - Webhook数据
	 * @returns {Promise} 发送结果
	 */
	async sendMediaServerWebhook(source, token, data) {
		const params = {
			token: token,
			source: source
		};
		
		return await this.handleWebhookPost(data, params);
	}
	
	/**
	 * 验证媒体服务器Webhook
	 * @param {string} source - 媒体服务器名称
	 * @param {string} token - API Token
	 * @returns {Promise} 验证结果
	 */
	async verifyMediaServerWebhook(source, token) {
		const params = {
			token: token,
			source: source
		};
		
		return await this.handleWebhookGet(params);
	}
}

// 创建单例实例
const webhookAPI = new WebhookAPI();

export default webhookAPI;