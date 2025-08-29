import { request } from './index.js'

/**
 * 仪表板相关API
 */
class DashboardAPI {
  /**
   * 媒体数量统计
   * 查询媒体数量统计信息
   * @param {string} name - 名称
   * @returns {Promise} 统计信息
   */
  static getStatistic(name) {
    return request({
      url: '/api/v1/dashboard/statistic',
      method: 'GET',
      data: name ? { name } : {}
    })
  }

  /**
   * 媒体数量统计（API_TOKEN）
   * 查询媒体数量统计信息 API_TOKEN认证
   * @returns {Promise} 统计信息
   */
  static getStatistic2() {
    return request({
      url: '/api/v1/dashboard/statistic2',
      method: 'GET'
    })
  }

  /**
   * 本地存储空间
   * 查询本地存储空间信息
   * @returns {Promise} 存储空间信息
   */
  static getStorage() {
    return request({
      url: '/api/v1/dashboard/storage',
      method: 'GET'
    })
  }

  /**
   * 本地存储空间（API_TOKEN）
   * 查询本地存储空间信息 API_TOKEN认证
   * @returns {Promise} 存储空间信息
   */
  static getStorage2() {
    return request({
      url: '/api/v1/dashboard/storage2',
      method: 'GET'
    })
  }

  /**
   * 进程信息
   * 查询进程信息
   * @returns {Promise} 进程信息列表
   */
  static getProcesses() {
    return request({
      url: '/api/v1/dashboard/processes',
      method: 'GET'
    })
  }

  /**
   * 下载器信息
   * 查询下载器信息
   * @param {string} name - 下载器名称
   * @returns {Promise} 下载器信息
   */
  static getDownloader(name) {
    return request({
      url: '/api/v1/dashboard/downloader',
      method: 'GET',
      data: name ? { name } : {}
    })
  }

  /**
   * 下载器信息（API_TOKEN）
   * 查询下载器信息 API_TOKEN认证
   * @returns {Promise} 下载器信息
   */
  static getDownloader2() {
    return request({
      url: '/api/v1/dashboard/downloader2',
      method: 'GET'
    })
  }

  /**
   * 后台服务
   * 查询后台服务信息
   * @returns {Promise} 服务信息列表
   */
  static getSchedule() {
    return request({
      url: '/api/v1/dashboard/schedule',
      method: 'GET'
    })
  }

  /**
   * 后台服务（API_TOKEN）
   * 查询后台服务信息 API_TOKEN认证
   * @returns {Promise} 服务信息列表
   */
  static getSchedule2() {
    return request({
      url: '/api/v1/dashboard/schedule2',
      method: 'GET'
    })
  }

  /**
   * 文件整理统计
   * 查询文件整理统计信息
   * @param {number} days - 天数，默认为7
   * @returns {Promise} 整理统计数据
   */
  static getTransfer(days = 7) {
    return request({
      url: '/api/v1/dashboard/transfer',
      method: 'GET',
      data: { days }
    })
  }

  /**
   * 获取当前CPU使用率
   * @returns {Promise} CPU使用率
   */
  static getCpu() {
    return request({
      url: '/api/v1/dashboard/cpu',
      method: 'GET'
    })
  }

  /**
   * 获取当前CPU使用率（API_TOKEN）
   * @returns {Promise} CPU使用率
   */
  static getCpu2() {
    return request({
      url: '/api/v1/dashboard/cpu2',
      method: 'GET'
    })
  }

  /**
   * 获取当前内存使用量和使用率
   * @returns {Promise} 内存使用信息
   */
  static getMemory() {
    return request({
      url: '/api/v1/dashboard/memory',
      method: 'GET'
    })
  }

  /**
   * 获取当前内存使用量和使用率（API_TOKEN）
   * @returns {Promise} 内存使用信息
   */
  static getMemory2() {
    return request({
      url: '/api/v1/dashboard/memory2',
      method: 'GET'
    })
  }

  /**
   * 获取当前网络流量
   * 获取当前网络流量（上行和下行流量，单位：bytes/s）
   * @returns {Promise} 网络流量信息
   */
  static getNetwork() {
    return request({
      url: '/api/v1/dashboard/network',
      method: 'GET'
    })
  }

  /**
   * 获取当前网络流量（API_TOKEN）
   * @returns {Promise} 网络流量信息
   */
  static getNetwork2() {
    return request({
      url: '/api/v1/dashboard/network2',
      method: 'GET'
    })
  }
}

export default DashboardAPI