/**
 * 媒体相关API接口
 */
import authAPI from './auth.js';

class MediaAPI {
	constructor() {
		this.authAPI = authAPI;
	}
	
	/**
	 * 识别媒体信息（种子）
	 * @param {string} title - 标题
	 * @param {string} subtitle - 副标题（可选）
	 * @returns {Promise} 识别结果
	 */
	async recognizeMedia(title, subtitle = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = { title };
			if (subtitle) params.subtitle = subtitle;
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/recognize?${queryString}`,
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
					error: `识别媒体信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('识别媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 识别种子媒体信息（API Token认证）
	 * @param {string} title - 标题
	 * @param {string} subtitle - 副标题（可选）
	 * @param {string} token - API Token（可选）
	 * @returns {Promise} 识别结果
	 */
	async recognizeMediaWithToken(title, subtitle = '', token = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = { title };
			if (subtitle) params.subtitle = subtitle;
			if (token) params.token = token;
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/recognize2?${queryString}`,
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
					error: `识别媒体信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('识别媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 识别媒体信息（文件）
	 * @param {string} path - 文件路径
	 * @returns {Promise} 识别结果
	 */
	async recognizeMediaFile(path) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = { path };
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/recognize_file?${queryString}`,
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
					error: `识别文件媒体信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('识别文件媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 识别文件媒体信息（API Token认证）
	 * @param {string} path - 文件路径
	 * @param {string} token - API Token（可选）
	 * @returns {Promise} 识别结果
	 */
	async recognizeMediaFileWithToken(path, token = '') {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const params = { path };
			if (token) params.token = token;
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/recognize_file2?${queryString}`,
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
					error: `识别文件媒体信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('识别文件媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 搜索媒体/人物信息
	 * @param {string} title - 搜索标题
	 * @param {string} type - 类型（media/person，默认media）
	 * @param {number} page - 页码（默认1）
	 * @param {number} count - 每页数量（默认8）
	 * @returns {Promise} 搜索结果
	 */
	async searchMedia(title, type = 'media', page = 1, count = 8) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const params = {
				title,
				type,
				page: page.toString(),
				count: count.toString()
			};
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/search?${queryString}`,
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
					error: `搜索媒体信息失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('搜索媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 刮削媒体信息
	 * @param {string} storage - 存储类型
	 * @param {Object} fileData - 文件数据
	 * @returns {Promise} 刮削结果
	 */
	async scrapeMedia(storage, fileData) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在'
				};
			}
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/scrape/${storage}`,
				method: 'POST',
				header: this.authAPI.getAuthHeaders(),
				data: fileData
			});
			
			if (response.statusCode === 200) {
				return {
					success: true,
					data: response.data
				};
			} else {
				return {
					success: false,
					error: `刮削媒体信息失败，状态码: ${response.statusCode}`
				};
			}
		} catch (error) {
			console.error('刮削媒体信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败'
			};
		}
	}
	
	/**
	 * 查询自动分类配置
	 * @returns {Promise} 分类配置
	 */
	async getMediaCategory() {
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
				url: `${userInfo.server_url}/api/v1/media/category`,
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
					error: `获取分类配置失败，状态码: ${response.statusCode}`,
					data: {}
				};
			}
		} catch (error) {
			console.error('获取分类配置失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: {}
			};
		}
	}
	
	/**
	 * 查询剧集组季信息
	 * @param {string} episodeGroup - 剧集组ID
	 * @returns {Promise} 季信息列表
	 */
	async getEpisodeGroupSeasons(episodeGroup) {
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
				url: `${userInfo.server_url}/api/v1/media/group/seasons/${episodeGroup}`,
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
					error: `获取剧集组季信息失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取剧集组季信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 查询媒体剧集组
	 * @param {number} tmdbid - TMDB ID
	 * @returns {Promise} 剧集组列表
	 */
	async getMediaGroups(tmdbid) {
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
				url: `${userInfo.server_url}/api/v1/media/groups/${tmdbid}`,
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
					error: `获取媒体剧集组失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取媒体剧集组失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 查询媒体季信息
	 * @param {string} mediaid - 媒体ID（可选）
	 * @param {string} title - 标题（可选）
	 * @param {string} year - 年份（可选）
	 * @param {number} season - 季数（可选）
	 * @returns {Promise} 季信息列表
	 */
	async getMediaSeasons(mediaid, title, year, season) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: []
				};
			}
			
			const params = {};
			if (mediaid) params.mediaid = mediaid;
			if (title) params.title = title;
			if (year) params.year = year;
			if (season) params.season = season.toString();
			
			const queryString = Object.keys(params)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
				.join('&');
			
			const response = await uni.request({
				url: `${userInfo.server_url}/api/v1/media/seasons?${queryString}`,
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
					error: `获取媒体季信息失败，状态码: ${response.statusCode}`,
					data: []
				};
			}
		} catch (error) {
			console.error('获取媒体季信息失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: []
			};
		}
	}
	
	/**
	 * 查询媒体详情
	 * @param {string} mediaid - 媒体ID
	 * @param {string} typeName - 类型名称（电影/电视剧）
	 * @param {string} title - 标题（可选）
	 * @param {string} year - 年份（可选）
	 * @returns {Promise} 媒体详情
	 */
	async getMediaDetail(mediaid, typeName, title, year) {
		try {
			const userInfo = this.authAPI.loadUserInfo();
			if (!userInfo || !userInfo.server_url) {
				return {
					success: false,
					error: '用户未登录或服务器地址不存在',
					data: null
				};
			}
			
		const params = { type_name: typeName };
		if (title) params.title = title;
		if (year) params.year = year;
		
		const queryString = Object.keys(params)
			.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
			.join('&');
		
		const response = await uni.request({
			url: `${userInfo.server_url}/api/v1/media/${mediaid}?${queryString}`,
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
					error: `获取媒体详情失败，状态码: ${response.statusCode}`,
					data: null
				};
			}
		} catch (error) {
			console.error('获取媒体详情失败:', error);
			return {
				success: false,
				error: error.message || '网络请求失败',
				data: null
			};
		}
	}
}

// 创建单例实例
const mediaAPI = new MediaAPI();

export default mediaAPI;