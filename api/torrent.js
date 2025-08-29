import { request } from './index.js'

/**
 * 种子相关API
 */
class TorrentAPI {
  /**
   * 获取种子缓存
   * 获取当前种子缓存数据
   * @returns {Promise} 种子缓存数据
   */
  static getCache() {
    return request({
      url: '/api/v1/torrent/cache',
      method: 'GET'
    })
  }

  /**
   * 清理种子缓存
   * 清理所有种子缓存
   * @returns {Promise} 清理结果
   */
  static clearCache() {
    return request({
      url: '/api/v1/torrent/cache',
      method: 'DELETE'
    })
  }

  /**
   * 删除指定种子缓存
   * @param {string} domain - 站点域名
   * @param {string} torrentHash - 种子hash（使用title+description的md5）
   * @returns {Promise} 删除结果
   */
  static deleteCacheItem(domain, torrentHash) {
    return request({
      url: `/api/v1/torrent/cache/${domain}/${torrentHash}`,
      method: 'DELETE'
    })
  }

  /**
   * 刷新种子缓存
   * @returns {Promise} 刷新结果
   */
  static refreshCache() {
    return request({
      url: '/api/v1/torrent/cache/refresh',
      method: 'POST'
    })
  }

  /**
   * 重新识别种子
   * 重新识别指定的种子
   * @param {string} domain - 站点域名
   * @param {string} torrentHash - 种子hash（使用title+description的md5）
   * @param {number} tmdbid - 手动指定的TMDB ID
   * @param {string} doubanid - 手动指定的豆瓣ID
   * @returns {Promise} 重新识别结果
   */
  static reidentify(domain, torrentHash, tmdbid, doubanid) {
    return request({
      url: `/api/v1/torrent/cache/reidentify/${domain}/${torrentHash}`,
      method: 'POST',
      data: { tmdbid, doubanid }
    })
  }
}

export default TorrentAPI