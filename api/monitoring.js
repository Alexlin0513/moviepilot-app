import { request } from './index.js'

/**
 * 监控相关API
 */
class MonitoringAPI {
  /**
   * 获取监控概览
   * 获取完整的监控概览信息
   * @returns {Promise} 监控概览数据
   */
  static getOverview() {
    return request({
      url: '/api/v1/monitoring/overview',
      method: 'GET'
    })
  }

  /**
   * 获取性能快照
   * 获取当前性能快照
   * @returns {Promise} 性能快照数据
   */
  static getPerformance() {
    return request({
      url: '/api/v1/monitoring/performance',
      method: 'GET'
    })
  }

  /**
   * 获取端点统计
   * 获取最活跃的API端点统计
   * @param {number} limit - 返回的端点数量，默认为10，最大50，最小1
   * @returns {Promise} 端点统计数据
   */
  static getEndpoints(limit = 10) {
    return request({
      url: '/api/v1/monitoring/endpoints',
      method: 'GET',
      data: { limit }
    })
  }

  /**
   * 获取错误请求
   * 获取最近的错误请求记录
   * @param {number} limit - 返回的错误数量，默认为20，最大100，最小1
   * @returns {Promise} 错误请求记录
   */
  static getErrors(limit = 20) {
    return request({
      url: '/api/v1/monitoring/errors',
      method: 'GET',
      data: { limit }
    })
  }

  /**
   * 获取告警信息
   * 获取当前告警信息
   * @returns {Promise} 告警信息列表
   */
  static getAlerts() {
    return request({
      url: '/api/v1/monitoring/alerts',
      method: 'GET'
    })
  }

  /**
   * Prometheus指标
   * 获取Prometheus格式的监控指标
   * @returns {Promise} Prometheus指标数据
   */
  static getMetrics() {
    return request({
      url: '/api/v1/monitoring/metrics',
      method: 'GET'
    })
  }

  /**
   * 监控仪表板
   * 获取实时监控仪表板HTML页面
   * @returns {Promise} 仪表板HTML页面
   */
  static getDashboard() {
    return request({
      url: '/api/v1/monitoring/dashboard',
      method: 'GET'
    })
  }
}

export default MonitoringAPI