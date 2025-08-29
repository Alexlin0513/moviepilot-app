import { request } from './index.js'

/**
 * 推荐相关API
 */
class RecommendAPI {
  /**
   * 获取推荐数据源
   * @returns {Promise} 推荐数据源列表
   */
  async getSource() {
    return request({
      url: '/api/v1/recommend/source',
      method: 'GET'
    })
  }
  
  /**
   * Bangumi每日放送
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} Bangumi每日放送列表
   */
  async getBangumiCalendar(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/bangumi_calendar',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣正在热映
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣正在热映列表
   */
  async getDoubanShowing(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_showing',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣电影
   * @param {string} sort - 排序方式，默认为R
   * @param {string} tags - 标签，默认为空
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣电影列表
   */
  async getDoubanMovies(sort = 'R', tags = '', page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_movies',
      method: 'GET',
      data: { sort, tags, page, count }
    })
  }

  /**
   * 豆瓣剧集
   * @param {string} sort - 排序方式，默认为R
   * @param {string} tags - 标签，默认为空
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣剧集列表
   */
  async getDoubanTvs(sort = 'R', tags = '', page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_tvs',
      method: 'GET',
      data: { sort, tags, page, count }
    })
  }

  /**
   * 豆瓣电影TOP250
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣电影TOP250列表
   */
  async getDoubanMovieTop250(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_movie_top250',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣国产剧集周榜
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣国产剧集周榜列表
   */
  async getDoubanTvWeeklyChinese(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_tv_weekly_chinese',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣全球剧集周榜
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣全球剧集周榜列表
   */
  async getDoubanTvWeeklyGlobal(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_tv_weekly_global',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣动画剧集
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣动画剧集列表
   */
  async getDoubanTvAnimation(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_tv_animation',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣热门电影
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣热门电影列表
   */
  async getDoubanMovieHot(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_movie_hot',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * 豆瓣热门电视剧
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 豆瓣热门电视剧列表
   */
  async getDoubanTvHot(page = 1, count = 30) {
    return request({
      url: '/api/v1/recommend/douban_tv_hot',
      method: 'GET',
      data: { page, count }
    })
  }

  /**
   * TMDB电影
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
      url: '/api/v1/recommend/tmdb_movies',
      method: 'GET',
      data: defaultParams
    })
  }

  /**
   * TMDB剧集
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
      url: '/api/v1/recommend/tmdb_tvs',
      method: 'GET',
      data: defaultParams
    })
  }

  /**
   * TMDB流行趋势
   * @param {number} page - 页码，默认为1
   * @returns {Promise} TMDB流行趋势列表
   */
  async getTmdbTrending(page = 1) {
    return request({
      url: '/api/v1/recommend/tmdb_trending',
      method: 'GET',
      data: { page }
    })
  }
}

// 创建单例实例
const recommendAPI = new RecommendAPI();

export default recommendAPI;
