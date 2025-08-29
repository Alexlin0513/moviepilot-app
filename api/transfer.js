import { request } from './index.js'

/**
 * 文件整理相关API
 */
class TransferAPI {
  /**
   * 查询整理后的名称
   * @param {string} path - 文件路径
   * @param {string} filetype - 文件类型
   * @returns {Promise} 整理后的名称
   */
  static getTransferName(path, filetype) {
    return request({
      url: '/api/v1/transfer/name',
      method: 'GET',
      data: { path, filetype }
    })
  }

  /**
   * 查询整理队列
   * @returns {Promise} 整理队列列表
   */
  static getQueue() {
    return request({
      url: '/api/v1/transfer/queue',
      method: 'GET'
    })
  }

  /**
   * 从整理队列中删除任务
   * @param {Object} fileitem - 文件项
   * @returns {Promise} 删除结果
   */
  static removeFromQueue(fileitem) {
    return request({
      url: '/api/v1/transfer/queue',
      method: 'DELETE',
      data: fileitem
    })
  }

  /**
   * 手动转移
   * 手动转移，文件或历史记录，支持自定义剧集识别格式
   * @param {Object} transferItem - 手工整理项
   * @param {boolean} background - 后台运行，默认为false
   * @returns {Promise} 转移结果
   */
  static manualTransfer(transferItem, background = false) {
    return request({
      url: `/api/v1/transfer/manual?background=${background}`,
      method: 'POST',
      data: transferItem
    })
  }

  /**
   * 立即执行下载器文件整理
   * API_TOKEN认证
   * @returns {Promise} 执行结果
   */
  static executeNow() {
    return request({
      url: '/api/v1/transfer/now',
      method: 'GET'
    })
  }
}

export default TransferAPI