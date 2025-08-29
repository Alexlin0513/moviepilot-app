/**
 * 站点相关API接口
 */
import authAPI from './auth.js';

class SiteAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 获取所有站点列表
	 * @returns {Promise} 站点列表
	 */
	async getAllSites() {
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
				url: `${userInfo.server_url}/api/v1/site/`,
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
					error: `获取站点列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取站点列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 新增站点
	 * @param {Object} siteData - 站点数据
	 * @returns {Promise} 创建结果
	 */
	async createSite(siteData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: siteData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `创建站点失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('创建站点失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 更新站点信息
	 * @param {Object} siteData - 站点数据
	 * @returns {Promise} 更新结果
	 */
	async updateSite(siteData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/`,
				method: 'PUT',
				header: this.authAPI.getAuthHeaders(),
				data: siteData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `更新站点失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新站点失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * CookieCloud同步
	 * @returns {Promise} 同步结果
	 */
	async syncCookieCloud() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/cookiecloud`,
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
					error: `CookieCloud同步失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('CookieCloud同步失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 重置站点
	 * @returns {Promise} 重置结果
	 */
	async resetSites() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/reset`,
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
					error: `重置站点失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('重置站点失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 批量更新站点优先级
	 * @param {Array} priorities - 优先级数据数组
	 * @returns {Promise} 更新结果
	 */
	async updateSitePriorities(priorities) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/priorities`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: priorities
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `更新站点优先级失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新站点优先级失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 更新站点Cookie和UA
	 * @param {number} siteId - 站点ID
	 * @param {string} username - 用户名
	 * @param {string} password - 密码
	 * @param {string} code - 验证码（可选）
	 * @returns {Promise} 更新结果
	 */
	async updateSiteCookie(siteId, username, password, code = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = new URLSearchParams({
				username,
				password
			});
			
			if (code) {
				params.append('code', code);
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/cookie/${siteId}?${params.toString()}`,
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
					error: `更新站点Cookie失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('更新站点Cookie失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取站点用户数据
	 * @param {number} siteId - 站点ID
	 * @param {string} workdate - 工作日期（可选）
	 * @returns {Promise} 用户数据
	 */
	async getSiteUserData(siteId, workdate = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = workdate ? `?workdate=${workdate}` : '';
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/userdata/${siteId}${params}`,
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
					error: `获取站点用户数据失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('获取站点用户数据失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 刷新站点用户数据
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 刷新结果
	 */
	async refreshSiteUserData(siteId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/userdata/${siteId}`,
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
					error: `刷新站点用户数据失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('刷新站点用户数据失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取所有站点最新用户数据
	 * @returns {Promise} 最新用户数据列表
	 */
	async getLatestUserData() {
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
				url: `${userInfo.server_url}/api/v1/site/userdata/latest`,
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
					error: `获取最新用户数据失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取最新用户数据失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 测试站点连接
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 测试结果
	 */
	async testSiteConnection(siteId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/test/${siteId}`,
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
					error: `测试站点连接失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('测试站点连接失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取站点图标
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 站点图标
	 */
	async getSiteIcon(siteId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/icon/${siteId}`,
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
					error: `获取站点图标失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('获取站点图标失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取站点分类
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 站点分类列表
	 */
	async getSiteCategories(siteId) {
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
				url: `${userInfo.server_url}/api/v1/site/category/${siteId}`,
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
					error: `获取站点分类失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取站点分类失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 浏览站点资源
	 * @param {number} siteId - 站点ID
	 * @param {string} keyword - 搜索关键词（可选）
	 * @param {string} cat - 分类（可选）
	 * @param {number} page - 页码（可选，默认0）
	 * @returns {Promise} 站点资源列表
	 */
	async browseSiteResources(siteId, keyword = '', cat = '', page = 0) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const params = new URLSearchParams();
			if (keyword) params.append('keyword', keyword);
			if (cat) params.append('cat', cat);
			params.append('page', page.toString());
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/resource/${siteId}?${params.toString()}`,
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
					error: `浏览站点资源失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('浏览站点资源失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 根据域名获取站点详情
	 * @param {string} siteUrl - 站点域名
	 * @returns {Promise} 站点详情
	 */
	async getSiteByDomain(siteUrl) {
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
				url: `${userInfo.server_url}/api/v1/site/domain/${siteUrl}`,
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
					error: `获取站点详情失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取站点详情失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 获取站点统计信息
	 * @param {string} siteUrl - 站点域名（可选）
	 * @returns {Promise} 站点统计信息
	 */
	async getSiteStatistics(siteUrl = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const endpoint = siteUrl ? `/statistic/${siteUrl}` : '/statistic';
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site${endpoint}`,
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
					error: `获取站点统计信息失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取站点统计信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取RSS订阅站点列表
	 * @returns {Promise} RSS站点列表
	 */
	async getRssSites() {
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
				url: `${userInfo.server_url}/api/v1/site/rss`,
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
					error: `获取RSS站点列表失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取RSS站点列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 获取可认证站点列表
	 * @returns {Promise} 可认证站点列表
	 */
	async getAuthSites() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: {}
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/auth`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data || {}
				};
			} else {
				return {
					success: false,
					error: `获取可认证站点列表失败，状态码: ${response.statusCode}`,
					data: {}
				};
			}
		} catch (error) {
			console.error('获取可认证站点列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: {}
			};
		}
	}
	
	/**
	 * 用户站点认证
	 * @param {string} site - 站点名称
	 * @param {Object} params - 认证参数
	 * @returns {Promise} 认证结果
	 */
	async authenticateSite(site, params) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/auth`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: {
					site,
					params
				}
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `站点认证失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('站点认证失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取站点域名到名称的映射
	 * @returns {Promise} 映射关系
	 */
	async getSiteMapping() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/mapping`,
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
					error: `获取站点映射失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('获取站点映射失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 获取支持的站点列表
	 * @returns {Promise} 支持的站点列表
	 */
	async getSupportingSites() {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: {}
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/supporting`,
				method: 'GET',
				header: this.authAPI.getAuthHeaders()
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data || {}
				};
			} else {
				return {
					success: false,
					error: `获取支持的站点列表失败，状态码: ${response.statusCode}`,
					data: {}
				};
			}
		} catch (error) {
			console.error('获取支持的站点列表失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: {}
			};
		}
	}
	
	/**
	 * 根据ID获取站点详情
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 站点详情
	 */
	async getSiteById(siteId) {
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
				url: `${userInfo.server_url}/api/v1/site/${siteId}`,
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
					error: `获取站点详情失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取站点详情失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
	
	/**
	 * 删除站点
	 * @param {number} siteId - 站点ID
	 * @returns {Promise} 删除结果
	 */
	async deleteSite(siteId) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/site/${siteId}`,
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
					error: `删除站点失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('删除站点失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
}

// 创建单例实例
const siteAPI = new SiteAPI();

export default siteAPI;
