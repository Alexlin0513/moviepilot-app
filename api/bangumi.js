import { request } from './index.js'

/**
 * Bangumi相关API
 */
class BangumiAPI {
  /**
   * 查询Bangumi演职员表
   * @param {number} bangumiid - Bangumi ID
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为20
   * @returns {Promise} 演职员表列表
   */
  static getCredits(bangumiid, page = 1, count = 20) {
    return request({
      url: `/api/v1/bangumi/credits/${bangumiid}`,
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 查询Bangumi推荐
   * @param {number} bangumiid - Bangumi ID
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为20
   * @returns {Promise} 推荐列表
   */
  static getRecommend(bangumiid, page = 1, count = 20) {
    return request({
      url: `/api/v1/bangumi/recommend/${bangumiid}`,
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 人物详情
   * 根据人物ID查询人物详情
   * @param {number} personId - 人物ID
   * @returns {Promise} 人物详情信息
   */
  static getPersonDetail(personId) {
    return request({
      url: `/api/v1/bangumi/person/${personId}`,
      method: 'GET'
    })
  }

  /**
   * 人物参演作品
   * 根据人物ID查询人物参演作品
   * @param {number} personId - 人物ID
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为20
   * @returns {Promise} 人物参演作品列表
   */
  static getPersonCredits(personId, page = 1, count = 20) {
    return request({
      url: `/api/v1/bangumi/person/credits/${personId}`,
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 查询Bangumi详情
   * @param {number} bangumiid - Bangumi ID
   * @returns {Promise} Bangumi详情信息
   */
  static getDetail(bangumiid) {
    return request({
      url: `/api/v1/bangumi/${bangumiid}`,
      method: 'GET'
    })
  }
}

export default BangumiAPI