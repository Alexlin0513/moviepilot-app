import { request } from './index.js'

/**
 * CookieCloud服务相关API
 */
class ServcookieAPI {
  /**
   * Get Root
   * @returns {Promise} 根路径响应
   */
  static getRoot() {
    return request({
      url: '/cookiecloud/',
      method: 'GET'
    })
  }

  /**
   * Post Root
   * @returns {Promise} 根路径POST响应
   */
  static postRoot() {
    return request({
      url: '/cookiecloud/',
      method: 'POST'
    })
  }

  /**
   * Update Cookie
   * 上传Cookie数据
   * @param {Object} cookieData - Cookie数据
   * @param {string} cookieData.encrypted - 加密的Cookie数据
   * @param {string} cookieData.uuid - UUID标识符
   * @returns {Promise} 更新结果
   */
  static updateCookie(cookieData) {
    return request({
      url: '/cookiecloud/update',
      method: 'POST',
      data: cookieData
    })
  }

  /**
   * Get Cookie
   * GET 下载加密数据
   * @param {string} uuid - UUID标识符（最小长度5，只能包含字母和数字）
   * @returns {Promise} 加密的Cookie数据
   */
  static getCookie(uuid) {
    return request({
      url: `/cookiecloud/get/${uuid}`,
      method: 'GET'
    })
  }

  /**
   * Post Cookie
   * POST 下载加密数据
   * @param {string} uuid - UUID标识符（最小长度5，只能包含字母和数字）
   * @param {string} password - 密码
   * @returns {Promise} 加密的Cookie数据
   */
  static postCookie(uuid, password) {
    return request({
      url: `/cookiecloud/get/${uuid}`,
      method: 'POST',
      data: { password }
    })
  }
}

export default ServcookieAPI