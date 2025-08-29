import ServarrAPI from './servarr.js'

/**
 * 电影相关API
 */
class MovieAPI {
  /**
   * 获取订阅的电影列表
   * @returns {Promise} 电影列表
   */
  static getSubscribedMovies() {
    return ServarrAPI.getMovies()
  }

  /**
   * 新增电影订阅
   * @param {Object} movie - 电影数据
   * @returns {Promise} 新增结果
   */
  static addMovie(movie) {
    return ServarrAPI.addMovie(movie)
  }

  /**
   * 删除电影订阅
   * @param {number} movieId - 电影ID
   * @returns {Promise} 删除结果
   */
  static deleteMovie(movieId) {
    return ServarrAPI.deleteMovie(movieId)
  }

  /**
   * 获取电影详情
   * @param {number} movieId - 电影ID
   * @returns {Promise} 电影详情
   */
  static getMovieDetail(movieId) {
    return ServarrAPI.getMovieDetail(movieId)
  }

  /**
   * 查询电影
   * @param {string} term - 查询条件
   * @returns {Promise} 电影查询结果
   */
  static lookupMovie(term) {
    return ServarrAPI.lookupMovie(term)
  }
}

export default MovieAPI