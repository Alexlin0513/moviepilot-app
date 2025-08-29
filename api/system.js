import { request } from './index.js'

/**
 * 系统相关API
 */
class SystemAPI {
  /**
   * 图片代理
   * 图片代理，可选是否使用代理服务器，支持 HTTP 缓存
   * @param {boolean} proxy - 是否使用代理
   * @param {string} imgurl - 图片URL
   * @param {boolean} cache - 是否缓存，默认为false
   * @param {string} ifNoneMatch - If-None-Match头
   * @returns {Promise} 图片数据
   */
  static getImageProxy(proxy, imgurl, cache = false, ifNoneMatch) {
    const headers = {}
    if (ifNoneMatch) {
      headers['if-none-match'] = ifNoneMatch
    }
    
    return request({
      url: `/api/v1/system/img/${proxy}`,
      method: 'GET',
      data: { imgurl, cache },
      header: headers
    })
  }

  /**
   * 图片缓存
   * 本地缓存图片文件，支持 HTTP 缓存，如果启用全局图片缓存，则使用磁盘缓存
   * @param {string} url - 图片URL
   * @param {string} ifNoneMatch - If-None-Match头
   * @returns {Promise} 缓存图片数据
   */
  static getCacheImage(url, ifNoneMatch) {
    const headers = {}
    if (ifNoneMatch) {
      headers['if-none-match'] = ifNoneMatch
    }
    
    return request({
      url: '/api/v1/system/cache/image',
      method: 'GET',
      data: { url },
      header: headers
    })
  }

  /**
   * 查询非敏感系统设置
   * 查询非敏感系统设置（默认鉴权）
   * @param {string} token - 认证token
   * @returns {Promise} 系统设置
   */
  static getGlobalSettings(token) {
    return request({
      url: '/api/v1/system/global',
      method: 'GET',
      data: { token }
    })
  }

  /**
   * 查询系统配置
   * 查询系统环境变量，包括当前版本号（仅管理员）
   * @returns {Promise} 系统环境变量
   */
  static getEnv() {
    return request({
      url: '/api/v1/system/env',
      method: 'GET'
    })
  }

  /**
   * 更新系统配置
   * 更新系统环境变量（仅管理员）
   * @param {Object} envData - 环境变量数据
   * @returns {Promise} 更新结果
   */
  static updateEnv(envData) {
    return request({
      url: '/api/v1/system/env',
      method: 'POST',
      data: envData
    })
  }

  /**
   * 实时进度
   * 实时获取处理进度，返回格式为SSE
   * @param {string} processType - 进程类型
   * @returns {Promise} 进度数据
   */
  static getProgress(processType) {
    return request({
      url: `/api/v1/system/progress/${processType}`,
      method: 'GET'
    })
  }

  /**
   * 查询系统设置
   * 查询系统设置（仅管理员）
   * @param {string} key - 设置键
   * @returns {Promise} 设置值
   */
  static getSetting(key) {
    return request({
      url: `/api/v1/system/setting/${key}`,
      method: 'GET'
    })
  }

  /**
   * 更新系统设置
   * 更新系统设置（仅管理员）
   * @param {string} key - 设置键
   * @param {Array} value - 设置值
   * @returns {Promise} 更新结果
   */
  static updateSetting(key, value) {
    return request({
      url: `/api/v1/system/setting/${key}`,
      method: 'POST',
      data: value
    })
  }

  /**
   * 实时消息
   * 实时获取系统消息，返回格式为SSE
   * @param {string} role - 角色，默认为system
   * @returns {Promise} 消息数据
   */
  static getMessage(role = 'system') {
    return request({
      url: '/api/v1/system/message',
      method: 'GET',
      data: { role }
    })
  }

  /**
   * 实时日志
   * 实时获取系统日志 length = -1 时, 返回text/plain 否则 返回格式SSE
   * @param {number} length - 日志长度，默认为50
   * @param {string} logfile - 日志文件名，默认为moviepilot.log
   * @returns {Promise} 日志数据
   */
  static getLogging(length = 50, logfile = 'moviepilot.log') {
    return request({
      url: '/api/v1/system/logging',
      method: 'GET',
      data: { length, logfile }
    })
  }

  /**
   * 查询Github所有Release版本
   * @returns {Promise} 版本列表
   */
  static getVersions() {
    return request({
      url: '/api/v1/system/versions',
      method: 'GET'
    })
  }

  /**
   * 过滤规则测试
   * 过滤规则测试，规则类型 1-订阅，2-洗版，3-搜索
   * @param {string} title - 标题
   * @param {string} rulegroupName - 规则组名称
   * @param {string} subtitle - 副标题
   * @returns {Promise} 测试结果
   */
  static testRule(title, rulegroupName, subtitle) {
    return request({
      url: '/api/v1/system/ruletest',
      method: 'GET',
      data: { title, rulegroup_name: rulegroupName, subtitle }
    })
  }

  /**
   * 测试网络连通性
   * @param {string} url - 测试URL
   * @param {boolean} proxy - 是否使用代理
   * @param {string} include - 包含内容
   * @returns {Promise} 测试结果
   */
  static testNetwork(url, proxy, include) {
    return request({
      url: '/api/v1/system/nettest',
      method: 'GET',
      data: { url, proxy, include }
    })
  }

  /**
   * 查询已加载的模块ID列表
   * @returns {Promise} 模块列表
   */
  static getModuleList() {
    return request({
      url: '/api/v1/system/modulelist',
      method: 'GET'
    })
  }

  /**
   * 模块可用性测试
   * @param {string} moduleid - 模块ID
   * @returns {Promise} 测试结果
   */
  static testModule(moduleid) {
    return request({
      url: `/api/v1/system/moduletest/${moduleid}`,
      method: 'GET'
    })
  }

  /**
   * 重启系统
   * 重启系统（仅管理员）
   * @returns {Promise} 重启结果
   */
  static restart() {
    return request({
      url: '/api/v1/system/restart',
      method: 'GET'
    })
  }

  /**
   * 运行服务
   * 执行命令（仅管理员）
   * @param {string} jobid - 任务ID
   * @returns {Promise} 执行结果
   */
  static runScheduler(jobid) {
    return request({
      url: '/api/v1/system/runscheduler',
      method: 'GET',
      data: { jobid }
    })
  }

  /**
   * 运行服务（API_TOKEN）
   * 执行命令（API_TOKEN认证）
   * @param {string} jobid - 任务ID
   * @returns {Promise} 执行结果
   */
  static runScheduler2(jobid) {
    return request({
      url: '/api/v1/system/runscheduler2',
      method: 'GET',
      data: { jobid }
    })
  }
}

export default SystemAPI
