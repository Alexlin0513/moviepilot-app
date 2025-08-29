import { request } from './index.js'

/**
 * 搜索相关API
 */
class SearchAPI {
  /**
   * 查询搜索结果
   * @returns {Promise} 搜索结果列表
   */
  static getLastSearch() {
    return request({
      url: '/api/v1/search/last',
      method: 'GET'
    })
  }

  /**
   * 精确搜索资源
   * 根据TMDBID/豆瓣ID精确搜索站点资源 tmdb:/douban:/bangumi:
   * @param {string} mediaid - 媒体ID
   * @param {Object} params - 查询参数
   * @param {string} params.mtype - 媒体类型
   * @param {string} params.area - 区域，默认为title
   * @param {string} params.title - 标题
   * @param {string} params.year - 年份
   * @param {string} params.season - 季数
   * @param {string} params.sites - 站点
   * @returns {Promise} 搜索结果
   */
  static searchByMediaId(mediaid, params = {}) {
    return request({
      url: `/api/v1/search/media/${mediaid}`,
      method: 'GET',
      data: params
    })
  }

  /**
   * 模糊搜索资源
   * 根据名称模糊搜索站点资源，支持分页，关键词为空时返回首页资源
   * @param {Object} params - 查询参数
   * @param {string} params.keyword - 搜索关键词
   * @param {number} params.page - 页码，默认为0
   * @param {string} params.sites - 站点
   * @returns {Promise} 搜索结果
   */
  static searchByTitle(params = {}) {
    return request({
      url: '/api/v1/search/title',
      method: 'GET',
      data: {
        page: 0,
        ...params
      }
    })
  }

  /**
   * 搜索种子资源
   * @param {Object} params - 查询参数
   * @param {string} params.keyword - 搜索关键词
   * @param {Array} params.sites - 站点列表
   * @param {number} params.page - 页码
   * @param {number} params.count - 数量
   * @returns {Promise} 搜索结果
   */
  static searchTorrents(params = {}) {
    return request({
      url: '/api/v1/search/title',
      method: 'GET',
      data: params
    })
  }

  /**
   * 添加搜索历史
   * @param {Object} searchData - 搜索数据
   * @param {string} searchData.keyword - 搜索关键词
   * @param {string} searchData.type - 搜索类型
   * @returns {Promise} 添加结果
   */
  static async addSearchHistory(searchData) {
    try {
      // 这里可以调用实际的API来保存搜索历史
      // 目前先在本地存储中保存
      const history = uni.getStorageSync('search_history') || [];
      const newItem = {
        keyword: searchData.keyword,
        type: searchData.type,
        timestamp: Date.now()
      };
      
      // 避免重复，移除已存在的相同关键词
      const filteredHistory = history.filter(item => item.keyword !== searchData.keyword);
      
      // 添加到开头，限制历史记录数量
      filteredHistory.unshift(newItem);
      const limitedHistory = filteredHistory.slice(0, 50); // 最多保存50条
      
      uni.setStorageSync('search_history', limitedHistory);
      
      return Promise.resolve({ success: true });
    } catch (error) {
      console.error('保存搜索历史失败:', error);
      return Promise.resolve({ success: false, error: error.message });
    }
  }
}

export default SearchAPI
