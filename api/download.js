import { request } from './index.js'

/**
 * 下载相关API
 */
class DownloadAPI {
  /**
   * 查询正在下载的任务
   * @param {string} name - 任务名称
   * @returns {Promise} 下载任务列表
   */
  static getDownloading(name) {
    const url = name ? `/api/v1/download/?name=${encodeURIComponent(name)}` : '/api/v1/download/';
    return request({
      url: url,
      method: 'GET'
    })
  }

  /**
   * 添加下载任务（含媒体信息）
   * @param {Object} downloadData - 下载数据
   * @param {Object} downloadData.media_in - 媒体信息
   * @param {Object} downloadData.torrent_in - 种子信息
   * @param {string} downloadData.downloader - 下载器
   * @param {string} downloadData.save_path - 保存路径
   * @returns {Promise} 添加结果
   */
  static addDownloadWithMedia(downloadData) {
    return request({
      url: '/api/v1/download/',
      method: 'POST',
      data: downloadData
    })
  }

  /**
   * 添加下载任务（不含媒体信息）
   * @param {Object} downloadData - 下载数据
   * @param {Object} downloadData.torrent_in - 种子信息
   * @param {string} downloadData.downloader - 下载器
   * @param {string} downloadData.save_path - 保存路径
   * @returns {Promise} 添加结果
   */
  static addDownload(downloadData) {
    return request({
      url: '/api/v1/download/add',
      method: 'POST',
      data: downloadData
    })
  }

  /**
   * 开始下载任务
   * @param {string} hashString - 任务哈希值
   * @param {string} name - 任务名称
   * @returns {Promise} 操作结果
   */
  static startDownload(hashString, name) {
    const url = name ? `/api/v1/download/start/${hashString}?name=${encodeURIComponent(name)}` : `/api/v1/download/start/${hashString}`;
    return request({
      url: url,
      method: 'GET'
    })
  }

  /**
   * 暂停下载任务
   * @param {string} hashString - 任务哈希值
   * @param {string} name - 任务名称
   * @returns {Promise} 操作结果
   */
  static stopDownload(hashString, name) {
    const url = name ? `/api/v1/download/stop/${hashString}?name=${encodeURIComponent(name)}` : `/api/v1/download/stop/${hashString}`;
    return request({
      url: url,
      method: 'GET'
    })
  }

  /**
   * 查询可用下载器
   * @returns {Promise} 下载器列表
   */
  static getClients() {
    return request({
      url: '/api/v1/download/clients',
      method: 'GET'
    })
  }

  /**
   * 删除下载任务
   * @param {string} hashString - 任务哈希值
   * @param {string} name - 任务名称
   * @returns {Promise} 删除结果
   */
  static deleteDownload(hashString, name) {
    const url = name ? `/api/v1/download/${hashString}?name=${encodeURIComponent(name)}` : `/api/v1/download/${hashString}`;
    return request({
      url: url,
      method: 'DELETE'
    })
  }
}

export default DownloadAPI