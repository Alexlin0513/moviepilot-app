/**
 * API管理器 - 统一导出所有API类
 */
import authAPI from './auth.js';

/**
 * 统一的请求函数
 * @param {Object} options - 请求选项
 * @param {string} options.url - 请求URL
 * @param {string} options.method - 请求方法
 * @param {Object} options.data - 请求数据
 * @param {Object} options.header - 请求头
 * @returns {Promise} 请求结果
 */
export async function request(options) {
	try {
		const userInfo = authAPI.loadUserInfo();
		if (!userInfo || !userInfo.server_url) {
			throw new Error('用户未登录或服务器地址不存在');
		}
		
		// 确保认证信息已设置
		if (userInfo.access_token) {
			authAPI.setToken(userInfo.access_token, userInfo.token_type || 'Bearer');
		}
		
		// 构建完整URL
		const fullUrl = `${userInfo.server_url}${options.url}`;
		
		// 合并请求头
		const headers = {
			...authAPI.getAuthHeaders(),
			...options.header
		};
		
		console.log('发送请求:', {
			url: fullUrl,
			method: options.method || 'GET',
			headers: headers,
			userInfo: {
				hasToken: !!userInfo.access_token,
				tokenType: userInfo.token_type,
				serverUrl: userInfo.server_url
			}
		});
		
		// 发送请求
		const response = await uni.request({
			url: fullUrl,
			method: options.method || 'GET',
			data: options.data,
			header: headers
		});
		
		if (response.statusCode === 200) {
			return response.data;
		} else {
			throw new Error(`请求失败，状态码: ${response.statusCode}`);
		}
	} catch (error) {
		console.error('请求错误:', error);
		throw error;
	}
}

import userAPI from './user.js';
import movieAPI from './movie.js';
import systemAPI from './system.js';
import siteAPI from './site.js';
import searchAPI from './search.js';
import recommendAPI from './recommend.js';
import discoverAPI from './discover.js';
import mediaAPI from './media.js';
import bangumiAPI from './bangumi.js';
import dashboardAPI from './dashboard.js';
import doubanAPI from './douban.js';
import downloadAPI from './download.js';
import historyAPI from './history.js';
import mediaserverAPI from './mediaserver.js';
import messageAPI from './message.js';
import monitoringAPI from './monitoring.js';
import pluginAPI from './plugin.js';
import schemasAPI from './schemas.js';
import servarrAPI from './servarr.js';
import servcookieAPI from './servcookie.js';
import storageAPI from './storage.js';
import subscribeAPI from './subscribe.js';
import tmdbAPI from './tmdb.js';
import torrentAPI from './torrent.js';
import transferAPI from './transfer.js';
import webhookAPI from './webhook.js';
import workflowAPI from './workflow.js';

/**
 * API管理类
 */
class APIManager {
	constructor() {
		// 认证和用户相关
		this.auth = authAPI;
		this.user = userAPI;
		
		// 媒体内容相关
		this.movie = movieAPI;
		
		// 系统和配置相关
		this.system = systemAPI;
		this.site = siteAPI;
		this.storage = storageAPI;
		this.schemas = schemasAPI;
		
		// 搜索和发现相关
		this.search = searchAPI;
		this.recommend = recommendAPI;
		this.discover = discoverAPI;
		
		// 媒体相关
		this.media = mediaAPI;
		this.bangumi = bangumiAPI;
		this.douban = doubanAPI;
		this.tmdb = tmdbAPI;
		this.mediaserver = mediaserverAPI;
		
		// 下载和传输相关
		this.download = downloadAPI;
		this.torrent = torrentAPI;
		this.transfer = transferAPI;
		
		// 历史和监控相关
		this.history = historyAPI;
		this.monitoring = monitoringAPI;
		this.dashboard = dashboardAPI;
		
		// 插件和工作流相关
		this.plugin = pluginAPI;
		this.workflow = workflowAPI;
		this.webhook = webhookAPI;
		
		// 订阅和服务相关
		this.subscribe = subscribeAPI;
		this.servarr = servarrAPI;
		this.servcookie = servcookieAPI;
		this.message = messageAPI;
	}
	
	/**
	 * 初始化API管理器
	 * 自动加载用户信息和设置认证
	 */
	init() {
		const userInfo = this.auth.loadUserInfo();
		if (userInfo) {
			console.log('API管理器初始化成功，用户已登录');
			return true;
		} else {
			console.log('API管理器初始化，用户未登录');
			return false;
		}
	}
	
	/**
	 * 检查用户是否已登录
	 */
	isLoggedIn() {
		const userInfo = this.auth.loadUserInfo();
		return !!userInfo;
	}
	
	/**
	 * 获取当前用户信息
	 */
	getCurrentUser() {
		return this.auth.loadUserInfo();
	}
	
	/**
	 * 统一错误处理
	 */
	handleError(error, context = '') {
		console.error(`${context} 错误:`, error);
		
		// 根据错误类型进行不同处理
		if (error.message && error.message.includes('401')) {
			// 认证失败，可能需要重新登录
			uni.showToast({
				title: '登录已过期，请重新登录',
				icon: 'none'
			});
			// 可以在这里跳转到登录页面
		} else if (error.message && error.message.includes('timeout')) {
			uni.showToast({
				title: '请求超时，请检查网络',
				icon: 'none'
			});
		} else {
			uni.showToast({
				title: error.message || '网络错误',
				icon: 'none'
			});
		}
	}
}

// 创建全局API管理器实例
const apiManager = new APIManager();

// 导出API管理器和各个API类
export default apiManager;
export { 
	// 认证和用户相关
	authAPI, 
	userAPI,
	
	// 媒体内容相关
	movieAPI,
	
	// 系统和配置相关
	systemAPI,
	siteAPI, 
	storageAPI, 
	schemasAPI,
	
	// 搜索和发现相关
	searchAPI, 
	recommendAPI, 
	discoverAPI,
	
	// 媒体相关
	mediaAPI,
	bangumiAPI,
	doubanAPI,
	tmdbAPI,
	mediaserverAPI,
	
	// 下载和传输相关
	downloadAPI,
	torrentAPI,
	transferAPI,
	
	// 历史和监控相关
	historyAPI,
	monitoringAPI,
	dashboardAPI,
	
	// 插件和工作流相关
	pluginAPI,
	workflowAPI,
	webhookAPI,
	
	// 订阅和服务相关
	subscribeAPI,
	servarrAPI,
	servcookieAPI,
	messageAPI
};
