import { request } from './index.js'

/**
 * Servarr相关API（模拟Radarr、Sonarr）
 */
class ServarrAPI {
  /**
   * 系统状态
   * 模拟Radarr、Sonarr系统状态
   * @returns {Promise} 系统状态
   */
  static getSystemStatus() {
    return request({
      url: '/api/v3/system/status',
      method: 'GET'
    })
  }

  /**
   * 质量配置
   * 模拟Radarr、Sonarr质量配置
   * @returns {Promise} 质量配置列表
   */
  static getQualityProfile() {
    return request({
      url: '/api/v3/qualityProfile',
      method: 'GET'
    })
  }

  /**
   * 根目录
   * 模拟Radarr、Sonarr根目录
   * @returns {Promise} 根目录列表
   */
  static getRootFolder() {
    return request({
      url: '/api/v3/rootfolder',
      method: 'GET'
    })
  }

  /**
   * 标签
   * 模拟Radarr、Sonarr标签
   * @returns {Promise} 标签列表
   */
  static getTag() {
    return request({
      url: '/api/v3/tag',
      method: 'GET'
    })
  }

  /**
   * 语言
   * 模拟Radarr、Sonarr语言
   * @returns {Promise} 语言配置
   */
  static getLanguageProfile() {
    return request({
      url: '/api/v3/languageprofile',
      method: 'GET'
    })
  }

  /**
   * 所有订阅电影
   * 查询Radarr电影
   * @returns {Promise} 电影列表
   */
  static getMovies() {
    // 尝试使用API_TOKEN认证方式
    const userInfo = uni.getStorageSync('moviepilot_user_info');
    const token = userInfo?.access_token;
    
    return request({
      url: token ? `/api/v3/movie?token=${token}` : '/api/v3/movie',
      method: 'GET'
    })
  }

  /**
   * 新增电影订阅
   * 新增Radarr电影订阅
   * @param {Object} movie - 电影数据
   * @returns {Promise} 新增结果
   */
  static addMovie(movie) {
    return request({
      url: '/api/v3/movie',
      method: 'POST',
      data: movie
    })
  }

  /**
   * 查询电影
   * 查询Radarr电影，term格式: tmdb:${id}
   * @param {string} term - 查询条件
   * @returns {Promise} 电影查询结果
   */
  static lookupMovie(term) {
    return request({
      url: '/api/v3/movie/lookup',
      method: 'GET',
      data: { term }
    })
  }

  /**
   * 电影订阅详情
   * 查询Radarr电影订阅
   * @param {number} mid - 电影ID
   * @returns {Promise} 电影详情
   */
  static getMovieDetail(mid) {
    return request({
      url: `/api/v3/movie/${mid}`,
      method: 'GET'
    })
  }

  /**
   * 删除电影订阅
   * 删除Radarr电影订阅
   * @param {number} mid - 电影ID
   * @returns {Promise} 删除结果
   */
  static deleteMovie(mid) {
    return request({
      url: `/api/v3/movie/${mid}`,
      method: 'DELETE'
    })
  }

  /**
   * 所有剧集
   * 查询Sonarr剧集
   * @returns {Promise} 剧集列表
   */
  static getSeries() {
    return request({
      url: '/api/v3/series',
      method: 'GET'
    })
  }

  /**
   * 更新剧集订阅
   * 更新Sonarr剧集订阅
   * @param {Object} series - 剧集数据
   * @returns {Promise} 更新结果
   */
  static updateSeries(series) {
    return request({
      url: '/api/v3/series',
      method: 'PUT',
      data: series
    })
  }

  /**
   * 新增剧集订阅
   * 新增Sonarr剧集订阅
   * @param {Object} series - 剧集数据
   * @returns {Promise} 新增结果
   */
  static addSeries(series) {
    return request({
      url: '/api/v3/series',
      method: 'POST',
      data: series
    })
  }

  /**
   * 查询剧集
   * 查询Sonarr剧集，term格式: tvdb:${id} 或 title
   * @param {string} term - 查询条件
   * @returns {Promise} 剧集查询结果
   */
  static lookupSeries(term) {
    return request({
      url: '/api/v3/series/lookup',
      method: 'GET',
      data: { term }
    })
  }

  /**
   * 剧集详情
   * 查询Sonarr剧集
   * @param {number} tid - 剧集ID
   * @returns {Promise} 剧集详情
   */
  static getSeriesDetail(tid) {
    return request({
      url: `/api/v3/series/${tid}`,
      method: 'GET'
    })
  }

  /**
   * 删除剧集订阅
   * 删除Sonarr剧集订阅
   * @param {number} tid - 剧集ID
   * @returns {Promise} 删除结果
   */
  static deleteSeries(tid) {
    return request({
      url: `/api/v3/series/${tid}`,
      method: 'DELETE'
    })
  }
}

export default ServarrAPI