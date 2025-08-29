import { request } from './index.js'

/**
 * TMDB相关API
 */
class TmdbAPI {
  /**
   * TMDB所有季
   * 根据TMDBID查询themoviedb所有季信息
   * @param {number} tmdbid - TMDB ID
   * @returns {Promise} 所有季信息列表
   */
  static getSeasons(tmdbid) {
    return request({
      url: `/api/v1/tmdb/seasons/${tmdbid}`,
      method: 'GET'
    })
  }

  /**
   * 类似电影/电视剧
   * 根据TMDBID查询类似电影/电视剧，type_name: 电影/电视剧
   * @param {number} tmdbid - TMDB ID
   * @param {string} typeName - 类型名称（电影/电视剧）
   * @returns {Promise} 类似媒体列表
   */
  static getSimilar(tmdbid, typeName) {
    return request({
      url: `/api/v1/tmdb/similar/${tmdbid}/${typeName}`,
      method: 'GET'
    })
  }

  /**
   * 推荐电影/电视剧
   * 根据TMDBID查询推荐电影/电视剧，type_name: 电影/电视剧
   * @param {number} tmdbid - TMDB ID
   * @param {string} typeName - 类型名称（电影/电视剧）
   * @returns {Promise} 推荐媒体列表
   */
  static getRecommend(tmdbid, typeName) {
    return request({
      url: `/api/v1/tmdb/recommend/${tmdbid}/${typeName}`,
      method: 'GET'
    })
  }

  /**
   * 系列合集详情
   * 根据合集ID查询合集详情
   * @param {number} collectionId - 合集ID
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为20
   * @returns {Promise} 合集详情列表
   */
  static getCollection(collectionId, page = 1, count = 20) {
    return request({
      url: `/api/v1/tmdb/collection/${collectionId}`,
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 演员阵容
   * 根据TMDBID查询演员阵容，type_name: 电影/电视剧
   * @param {number} tmdbid - TMDB ID
   * @param {string} typeName - 类型名称（电影/电视剧）
   * @param {number} page - 页码，默认为1
   * @returns {Promise} 演员阵容列表
   */
  static getCredits(tmdbid, typeName, page = 1) {
    return request({
      url: `/api/v1/tmdb/credits/${tmdbid}/${typeName}`,
      method: 'GET',
      data: { page }
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
      url: `/api/v1/tmdb/person/${personId}`,
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
      url: `/api/v1/tmdb/person/credits/${personId}`,
      method: 'GET',
      data: { page }
    })
  }

  /**
   * TMDB季所有集
   * 根据TMDBID查询某季的所有集信息
   * @param {number} tmdbid - TMDB ID
   * @param {number} season - 季数
   * @param {string} episodeGroup - 剧集组
   * @returns {Promise} 季集信息列表
   */
  static getSeasonEpisodes(tmdbid, season, episodeGroup) {
    return request({
      url: `/api/v1/tmdb/${tmdbid}/${season}`,
      method: 'GET',
      data: episodeGroup ? { episode_group: episodeGroup } : {}
    })
  }
}

export default TmdbAPI