import { request } from './index.js'

/**
 * 豆瓣相关API
 */
class DoubanAPI {
  /**
   * 人物详情
   * 根据人物ID查询人物详情
   * @param {number} personId - 人物ID
   * @returns {Promise} 人物详情信息
   */
  static getPersonDetail(personId) {
    return request({
      url: `/api/v1/douban/person/${personId}`,
      method: 'GET'
    })
  }

  /**
   * 人物参演作品
   * 根据人物ID查询人物参演作品
   * @param {number} personId - 人物ID
   * @param {number} page - 页码，默认为1
   * @returns {Promise} 人物参演作品列表
   */
  static getPersonCredits(personId, page = 1) {
    return request({
      url: `/api/v1/douban/person/credits/${personId}`,
      method: 'GET',
      data: { page }
    })
  }

  /**
   * 豆瓣演员阵容
   * 根据豆瓣ID查询演员阵容，type_name: 电影/电视剧
   * @param {string} doubanid - 豆瓣ID
   * @param {string} typeName - 类型名称（电影/电视剧）
   * @returns {Promise} 演员阵容列表
   */
  static getCredits(doubanid, typeName) {
    return request({
      url: `/api/v1/douban/credits/${doubanid}/${typeName}`,
      method: 'GET'
    })
  }

  /**
   * 豆瓣推荐电影/电视剧
   * 根据豆瓣ID查询推荐电影/电视剧，type_name: 电影/电视剧
   * @param {string} doubanid - 豆瓣ID
   * @param {string} typeName - 类型名称（电影/电视剧）
   * @returns {Promise} 推荐媒体列表
   */
  static getRecommend(doubanid, typeName) {
    return request({
      url: `/api/v1/douban/recommend/${doubanid}/${typeName}`,
      method: 'GET'
    })
  }

  /**
   * 查询豆瓣详情
   * 根据豆瓣ID查询豆瓣媒体信息
   * @param {string} doubanid - 豆瓣ID
   * @returns {Promise} 豆瓣媒体详情
   */
  static getDetail(doubanid) {
    return request({
      url: `/api/v1/douban/${doubanid}`,
      method: 'GET'
    })
  }
}

export default DoubanAPI