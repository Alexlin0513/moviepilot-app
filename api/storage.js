import { request } from './index.js'

/**
 * 存储相关API
 */
class StorageAPI {
  /**
   * 生成二维码内容
   * @param {string} name - 存储名称
   * @returns {Promise} 二维码内容
   */
  static generateQrcode(name) {
    return request({
      url: `/api/v1/storage/qrcode/${name}`,
      method: 'GET'
    })
  }

  /**
   * 二维码登录确认
   * @param {string} name - 存储名称
   * @param {string} ck - Cookie
   * @param {string} t - Token
   * @returns {Promise} 确认结果
   */
  static checkQrcode(name, ck, t) {
    return request({
      url: `/api/v1/storage/check/${name}`,
      method: 'GET',
      data: { ck, t }
    })
  }

  /**
   * 保存存储配置
   * @param {string} name - 存储名称
   * @param {Object} config - 配置数据
   * @returns {Promise} 保存结果
   */
  static saveConfig(name, config) {
    return request({
      url: `/api/v1/storage/save/${name}`,
      method: 'POST',
      data: config
    })
  }

  /**
   * 重置存储配置
   * @param {string} name - 存储名称
   * @returns {Promise} 重置结果
   */
  static resetConfig(name) {
    return request({
      url: `/api/v1/storage/reset/${name}`,
      method: 'GET'
    })
  }

  /**
   * 所有目录和文件
   * 查询当前目录下所有目录和文件
   * @param {Object} fileitem - 文件项
   * @param {string} sort - 排序方式，默认为updated_at
   * @returns {Promise} 文件和目录列表
   */
  static listFiles(fileitem, sort = 'updated_at') {
    return request({
      url: `/api/v1/storage/list?sort=${sort}`,
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 创建目录
   * @param {Object} fileitem - 文件项
   * @param {string} name - 目录名称
   * @returns {Promise} 创建结果
   */
  static createDirectory(fileitem, name) {
    return request({
      url: `/api/v1/storage/mkdir?name=${encodeURIComponent(name)}`,
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 删除文件或目录
   * @param {Object} fileitem - 文件项
   * @returns {Promise} 删除结果
   */
  static deleteFile(fileitem) {
    return request({
      url: '/api/v1/storage/delete',
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 下载文件
   * 下载文件或目录
   * @param {Object} fileitem - 文件项
   * @returns {Promise} 下载链接或内容
   */
  static downloadFile(fileitem) {
    return request({
      url: '/api/v1/storage/download',
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 预览图片
   * @param {Object} fileitem - 文件项
   * @returns {Promise} 图片内容
   */
  static previewImage(fileitem) {
    return request({
      url: '/api/v1/storage/image',
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 重命名文件或目录
   * @param {Object} fileitem - 文件项
   * @param {string} newName - 新名称
   * @param {boolean} recursive - 是否递归修改，默认为false
   * @returns {Promise} 重命名结果
   */
  static renameFile(fileitem, newName, recursive = false) {
    return request({
      url: `/api/v1/storage/rename?new_name=${encodeURIComponent(newName)}&recursive=${recursive}`,
      method: 'POST',
      data: fileitem
    })
  }

  /**
   * 存储空间信息
   * 查询存储空间
   * @param {string} name - 存储名称
   * @returns {Promise} 存储空间信息
   */
  static getUsage(name) {
    return request({
      url: `/api/v1/storage/usage/${name}`,
      method: 'GET'
    })
  }

  /**
   * 支持的整理方式获取
   * 查询支持的整理方式
   * @param {string} name - 存储名称
   * @returns {Promise} 整理方式信息
   */
  static getTransType(name) {
    return request({
      url: `/api/v1/storage/transtype/${name}`,
      method: 'GET'
    })
  }

  /**
   * 查询存储配置列表
   * @returns {Promise} 存储配置列表
   */
  static getStorageConfigs() {
    return request({
      url: '/api/v1/storage/',
      method: 'GET'
    })
  }
}

export default StorageAPI
