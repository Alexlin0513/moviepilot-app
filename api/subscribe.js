/**
 * 订阅相关API接口
 */
import authAPI from './auth.js';

class SubscribeAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 获取所有订阅
	 * @returns {Promise} 订阅列表
	 */
	async getAllSubscribes() {
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
				url: `${userInfo.server_url}/api/v1/subscribe/`,
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
					error: `获取订阅列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取订阅列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 新增订阅
	 * @param {Object} subscribeData - 订阅数据
	 * @returns {Promise} 创建结果
	 */
	async createSubscribe(subscribeData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: subscribeData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `创建订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('创建订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 更新订阅
	 * @param {Object} subscribeData - 订阅数据
	 * @returns {Promise} 更新结果
	 */
	async updateSubscribe(subscribeData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/`,
				method: 'PUT',
				header: this.authAPI.getAuthHeaders(),
				data: subscribeData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `更新订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取订阅列表（API Token认证）
	 * @param {string} token - API Token
	 * @returns {Promise} 订阅列表
	 */
	async getSubscribeList(token) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const params = token ? `?token=${token}` : '';
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/list${params}`,
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
					error: `获取订阅列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取订阅列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 更新订阅状态
	 * @param {number} subid - 订阅ID
	 * @param {string} state - 状态
	 * @returns {Promise} 更新结果
	 */
	async updateSubscribeStatus(subid, state) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/status/${subid}?state=${state}`,
				method: 'PUT',
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
					error: `更新订阅状态失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新订阅状态失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 根据媒体ID查询订阅
	 * @param {string} mediaid - 媒体ID
	 * @param {number} season - 季数（可选）
	 * @param {string} title - 标题（可选）
	 * @returns {Promise} 订阅信息
	 */
	async getSubscribeByMedia(mediaid, season, title) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: null
				};
			}
			
			const params = new URLSearchParams();
			if (season) params.append('season', season.toString());
			if (title) params.append('title', title);
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/media/${mediaid}?${params.toString()}`,
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
					error: `查询订阅失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('查询订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 根据媒体ID删除订阅
	 * @param {string} mediaid - 媒体ID
	 * @param {number} season - 季数（可选）
	 * @returns {Promise} 删除结果
	 */
	async deleteSubscribeByMedia(mediaid, season) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = season ? `?season=${season}` : '';
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/media/${mediaid}${params}`,
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
					error: `删除订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 刷新所有订阅
	 * @returns {Promise} 刷新结果
	 */
	async refreshSubscribes() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/refresh`,
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
					error: `刷新订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('刷新订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 重置订阅
	 * @param {number} subid - 订阅ID
	 * @returns {Promise} 重置结果
	 */
	async resetSubscribe(subid) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/reset/${subid}`,
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
					error: `重置订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('重置订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 刷新订阅TMDB信息
	 * @returns {Promise} 刷新结果
	 */
	async checkSubscribes() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/check`,
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
					error: `刷新TMDB信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('刷新TMDB信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 搜索所有订阅
	 * @returns {Promise} 搜索结果
	 */
	async searchAllSubscribes() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/search`,
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
					error: `搜索订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('搜索订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 搜索指定订阅
	 * @param {number} subscribeId - 订阅ID
	 * @returns {Promise} 搜索结果
	 */
	async searchSubscribe(subscribeId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/search/${subscribeId}`,
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
					error: `搜索订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('搜索订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * OverSeerr/JellySeerr通知订阅
	 * @param {Object} notificationData - 通知数据
	 * @param {string} authorization - 授权头
	 * @returns {Promise} 处理结果
	 */
	async seerrNotification(notificationData, authorization) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const headers = this.authAPI.getAuthHeaders();
			if (authorization) {
				headers.authorization = authorization;
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/seerr`,
				method: 'POST',
				header: headers,
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
					error: `Seerr通知失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('Seerr通知失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 查询订阅历史
	 * @param {string} mtype - 媒体类型
	 * @param {number} page - 页码（默认1）
	 * @param {number} count - 每页数量（默认30）
	 * @returns {Promise} 订阅历史列表
	 */
	async getSubscribeHistory(mtype, page = 1, count = 30) {
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
				url: `${userInfo.server_url}/api/v1/subscribe/history/${mtype}?${params.toString()}`,
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
					error: `获取订阅历史失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取订阅历史失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 删除订阅历史
	 * @param {number} historyId - 历史记录ID
	 * @returns {Promise} 删除结果
	 */
	async deleteSubscribeHistory(historyId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/history/${historyId}`,
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
					error: `删除订阅历史失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除订阅历史失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取热门订阅
	 * @param {string} stype - 订阅类型
	 * @param {number} page - 页码（默认1）
	 * @param {number} count - 每页数量（默认30）
	 * @param {number} minSub - 最小订阅数（可选）
	 * @returns {Promise} 热门订阅列表
	 */
	async getPopularSubscribes(stype, page = 1, count = 30, minSub) {
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
				stype,
				page: page.toString(),
				count: count.toString()
			});
			
			if (minSub) params.append('min_sub', minSub.toString());
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/popular?${params.toString()}`,
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
					error: `获取热门订阅失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取热门订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取用户订阅
	 * @param {string} username - 用户名
	 * @returns {Promise} 用户订阅列表
	 */
	async getUserSubscribes(username) {
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
				url: `${userInfo.server_url}/api/v1/subscribe/user/${username}`,
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
					error: `获取用户订阅失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取用户订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取订阅相关文件信息
	 * @param {number} subscribeId - 订阅ID
	 * @returns {Promise} 文件信息
	 */
	async getSubscribeFiles(subscribeId) {
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
				url: `${userInfo.server_url}/api/v1/subscribe/files/${subscribeId}`,
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
					error: `获取订阅文件信息失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取订阅文件信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 分享订阅
	 * @param {Object} shareData - 分享数据
	 * @returns {Promise} 分享结果
	 */
	async shareSubscribe(shareData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/share`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: shareData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `分享订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('分享订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 删除分享
	 * @param {number} shareId - 分享ID
	 * @returns {Promise} 删除结果
	 */
	async deleteShare(shareId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/share/${shareId}`,
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
					error: `删除分享失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除分享失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 复用订阅
	 * @param {Object} forkData - 复用数据
	 * @returns {Promise} 复用结果
	 */
	async forkSubscribe(forkData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/fork`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: forkData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `复用订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('复用订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取已Follow的订阅分享人
	 * @returns {Promise} Follow列表
	 */
	async getFollowedUsers() {
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
				url: `${userInfo.server_url}/api/v1/subscribe/follow`,
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
					error: `获取Follow列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取Follow列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * Follow订阅分享人
	 * @param {string} shareUid - 分享人UID
	 * @returns {Promise} Follow结果
	 */
	async followUser(shareUid) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/follow?share_uid=${shareUid}`,
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
					error: `Follow用户失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('Follow用户失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 取消Follow订阅分享人
	 * @param {string} shareUid - 分享人UID
	 * @returns {Promise} 取消Follow结果
	 */
	async unfollowUser(shareUid) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/follow?share_uid=${shareUid}`,
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
					error: `取消Follow失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('取消Follow失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取分享的订阅
	 * @param {string} name - 名称（可选）
	 * @param {number} page - 页码（默认1）
	 * @param {number} count - 每页数量（默认30）
	 * @returns {Promise} 分享订阅列表
	 */
	async getSharedSubscribes(name, page = 1, count = 30) {
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
			
			if (name) params.append('name', name);
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/shares?${params.toString()}`,
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
					error: `获取分享订阅失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取分享订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取订阅分享统计
	 * @returns {Promise} 分享统计
	 */
	async getShareStatistics() {
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
				url: `${userInfo.server_url}/api/v1/subscribe/share/statistics`,
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
					error: `获取分享统计失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取分享统计失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取订阅详情
	 * @param {number} subscribeId - 订阅ID
	 * @returns {Promise} 订阅详情
	 */
	async getSubscribeDetail(subscribeId) {
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
				url: `${userInfo.server_url}/api/v1/subscribe/${subscribeId}`,
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
					error: `获取订阅详情失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取订阅详情失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 删除订阅
	 * @param {number} subscribeId - 订阅ID
	 * @returns {Promise} 删除结果
	 */
	async deleteSubscribe(subscribeId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/subscribe/${subscribeId}`,
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
					error: `删除订阅失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除订阅失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
}

// 创建单例实例
const subscribeAPI = new SubscribeAPI();

export default subscribeAPI;
