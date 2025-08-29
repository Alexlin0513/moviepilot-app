import { request } from './index.js'

/**
 * 历史记录相关API
 */
class HistoryAPI {
  /**
   * 查询下载历史记录
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 下载历史记录列表
   */
  static getDownloadHistory(page = 1, count = 30) {
    return request({
      url: '/api/v1/history/download',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 删除下载历史记录
   * @param {Object} historyItem - 历史记录项
   * @returns {Promise} 删除结果
   */
  static deleteDownloadHistory(historyItem) {
    return request({
      url: '/api/v1/history/download',
      method: 'DELETE',
      data: historyItem
    })
  }

  /**
   * 查询整理记录
   * @param {Object} params - 查询参数
   * @param {string} params.title - 标题
   * @param {number} params.page - 页码，默认为1
   * @param {number} params.count - 数量，默认为30
   * @param {boolean} params.status - 状态
   * @returns {Promise} 整理记录列表
   */
  static getTransferHistory(params = {}) {
    return request({
      url: '/api/v1/history/transfer',
      method: 'GET',
      data: {
        page: 1,
        count: 30,
        ...params
      }
    })
  }

  /**
   * 删除整理记录
   * @param {Object} transferItem - 整理记录项
   * @param {boolean} deletesrc - 是否删除源文件，默认为false
   * @param {boolean} deletedest - 是否删除目标文件，默认为false
   * @returns {Promise} 删除结果
   */
  static deleteTransferHistory(transferItem, deletesrc = false, deletedest = false) {
    return request({
      url: `/api/v1/history/transfer?deletesrc=${deletesrc}&deletedest=${deletedest}`,
      method: 'DELETE',
      data: transferItem
    })
  }

  /**
   * 清空整理记录
   * @returns {Promise} 清空结果
   */
  static clearTransferHistory() {
    return request({
      url: '/api/v1/history/empty/transfer',
      method: 'GET'
    })
  }
}

export default HistoryAPI