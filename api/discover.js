import { request } from './index.js'

/**
 * 探索发现相关API
 */
class DiscoverAPI {
  /**
   * 获取探索数据源
   * @returns {Promise} 数据源列表
   */
  async getSource() {
    return request({
      url: '/api/v1/discover/source',
      method: 'GET'
    })
  }
  
  /**
   * 探索Bangumi
   * @param {number} type - 类型，默认为2
   * @param {number} cat - 分类
   * @param {string} sort - 排序方式，默认为rank
   * @param {string} year - 年份
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} Bangumi列表
   */
  async getBangumi(type = 2, cat, sort = 'rank', year, page = 1, count = 30) {
    const params = { type, sort, page, count };
    
    // 只添加非空参数
    if (cat !== undefined && cat !== null && cat !== '') {
      params.cat = cat;
    }
    if (year !== undefined && year !== null && year !== '') {
      params.year = year;
    }
    
    return request({
      url: '/api/v1/discover/bangumi',
      method: 'GET',
      data: params
    })
  }

  /**
   * 探索豆瓣电影
   * @param {string} sort - 排序方式，默认为R
   * @param {string} tags - 标签，默认为空
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣电影列表
   */
  async getDoubanMovies(sort = 'R', tags = '', page = 1, count = 30) {
    return request({
      url: '/api/v1/discover/douban_movies',
      method: 'GET',
      data: { sort, tags, page, count }
    })
  }

  /**
   * 探索豆瓣剧集
   * @param {string} sort - 排序方式，默认为R
   * @param {string} tags - 标签，默认为空
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣剧集列表
   */
  async getDoubanTvs(sort = 'R', tags = '', page = 1, count = 30) {
    return request({
      url: '/api/v1/discover/douban_tvs',
      method: 'GET',
      data: { sort, tags, page, count }
    })
  }

  /**
   * 探索TMDB电影
   * @param {Object} params - 查询参数
   * @param {string} params.sort_by - 排序方式，默认为popularity.desc
   * @param {string} params.with_genres - 类型
   * @param {string} params.with_original_language - 原始语言
   * @param {string} params.with_keywords - 关键词
   * @param {string} params.with_watch_providers - 观看提供商
   * @param {number} params.vote_average - 评分，默认为0
   * @param {number} params.vote_count - 评分数，默认为0
   * @param {string} params.release_date - 发布日期
   * @param {number} params.page - 页码，默认为1
   * @returns {Promise} TMDB电影列表
   */
  async getTmdbMovies(params = {}) {
    const defaultParams = {
      sort_by: 'popularity.desc',
      with_genres: '',
      with_original_language: '',
      with_keywords: '',
      with_watch_providers: '',
      vote_average: 0,
      vote_count: 0,
      release_date: '',
      page: 1,
      ...params
    }
    
    return request({
      url: '/api/v1/discover/tmdb_movies',
      method: 'GET',
      data: defaultParams
    })
  }

  /**
   * 探索TMDB剧集
   * @param {Object} params - 查询参数
   * @param {string} params.sort_by - 排序方式，默认为popularity.desc
   * @param {string} params.with_genres - 类型
   * @param {string} params.with_original_language - 原始语言
   * @param {string} params.with_keywords - 关键词
   * @param {string} params.with_watch_providers - 观看提供商
   * @param {number} params.vote_average - 评分，默认为0
   * @param {number} params.vote_count - 评分数，默认为0
   * @param {string} params.release_date - 发布日期
   * @param {number} params.page - 页码，默认为1
   * @returns {Promise} TMDB剧集列表
   */
  async getTmdbTvs(params = {}) {
    const defaultParams = {
      sort_by: 'popularity.desc',
      with_genres: '',
      with_original_language: '',
      with_keywords: '',
      with_watch_providers: '',
      vote_average: 0,
      vote_count: 0,
      release_date: '',
      page: 1,
      ...params
    }
    
    return request({
      url: '/api/v1/discover/tmdb_tvs',
      method: 'GET',
      data: defaultParams
    })
  }

  /**
   * 通用TMDB探索方法
   * @param {Object} params - 查询参数
   * @param {string} params.type - 类型 (movie/tv)
   * @param {string} params.sort_by - 排序方式，默认为popularity.desc
   * @param {string} params.with_genres - 类型
   * @param {string} params.with_original_language - 原始语言
   * @param {string} params.with_keywords - 关键词
   * @param {string} params.with_watch_providers - 观看提供商
   * @param {number} params.vote_average - 评分，默认为0
   * @param {number} params.vote_count - 评分数，默认为0
   * @param {string} params.release_date - 发布日期
   * @param {number} params.page - 页码，默认为1
   * @returns {Promise} TMDB探索结果
   */
  async discoverTmdb(params = {}) {
    const { type = 'movie', ...otherParams } = params;
    
    if (type === 'movie') {
      return this.getTmdbMovies(otherParams);
    } else if (type === 'tv') {
      return this.getTmdbTvs(otherParams);
    } else {
      throw new Error(`不支持的类型: ${type}`);
    }
  }
}

// 创建单例实例
const discoverAPI = new DiscoverAPI();

export default discoverAPI;
