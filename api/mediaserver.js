import { request } from './index.js'

/**
 * 媒体服务器相关API
 */
class MediaServerAPI {
  /**
   * 在线播放
   * 获取媒体服务器播放页面地址
   * @param {string} itemid - 项目ID
   * @returns {Promise} 播放页面地址
   */
  static getPlayUrl(itemid) {
    return request({
      url: `/api/v1/mediaserver/play/${itemid}`,
      method: 'GET'
    })
  }

  /**
   * 查询本地是否存在（数据库）
   * 判断本地是否存在
   * @param {Object} params - 查询参数
   * @param {string} params.title - 标题
   * @param {string} params.year - 年份
   * @param {string} params.mtype - 媒体类型
   * @param {number} params.tmdbid - TMDB ID
   * @param {number} params.season - 季数
   * @returns {Promise} 存在性检查结果
   */
  static checkExists(params) {
    return request({
      url: '/api/v1/mediaserver/exists',
      method: 'GET',
      data: params
    })
  }

  /**
   * 查询已存在的剧集信息（媒体服务器）
   * 根据媒体信息查询媒体库已存在的剧集信息
   * @param {Object} mediaInfo - 媒体信息
   * @returns {Promise} 已存在的剧集信息
   */
  static getExistsRemote(mediaInfo) {
    return request({
      url: '/api/v1/mediaserver/exists_remote',
      method: 'POST',
      data: mediaInfo
    })
  }

  /**
   * 查询媒体库缺失信息（媒体服务器）
   * 根据媒体信息查询缺失电影/剧集
   * @param {Object} mediaInfo - 媒体信息
   * @returns {Promise} 缺失信息
   */
  static getNotExists(mediaInfo) {
    return request({
      url: '/api/v1/mediaserver/notexists',
      method: 'POST',
      data: mediaInfo
    })
  }

  /**
   * 最新入库条目
   * 获取媒体服务器最新入库条目
   * @param {string} server - 服务器名称
   * @param {number} count - 数量，默认为20
   * @returns {Promise} 最新入库条目列表
   */
  static getLatest(server, count = 20) {
    return request({
      url: '/api/v1/mediaserver/latest',
      method: 'GET',
      data: { server, count }
    })
  }

  /**
   * 正在播放条目
   * 获取媒体服务器正在播放条目
   * @param {string} server - 服务器名称
   * @param {number} count - 数量，默认为12
   * @returns {Promise} 正在播放条目列表
   */
  static getPlaying(server, count = 12) {
    return request({
      url: '/api/v1/mediaserver/playing',
      method: 'GET',
      data: { server, count }
    })
  }

  /**
   * 媒体库列表
   * 获取媒体服务器媒体库列表
   * @param {string} server - 服务器名称
   * @param {boolean} hidden - 是否显示隐藏库，默认为false
   * @returns {Promise} 媒体库列表
   */
  static getLibrary(server, hidden = false) {
    return request({
      url: '/api/v1/mediaserver/library',
      method: 'GET',
      data: { server, hidden }
    })
  }

  /**
   * 查询可用媒体服务器
   * @returns {Promise} 可用媒体服务器列表
   */
  static getClients() {
    return request({
      url: '/api/v1/mediaserver/clients',
      method: 'GET'
    })
  }
}

export default MediaServerAPI