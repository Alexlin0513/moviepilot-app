import { request } from './index.js'

/**
 * 工作流相关API
 */
class WorkflowAPI {
  /**
   * 所有工作流
   * 获取工作流列表
   * @returns {Promise} 工作流列表
   */
  static getList() {
    return request({
      url: '/api/v1/workflow/',
      method: 'GET'
    })
  }

  /**
   * 创建工作流
   * @param {Object} workflow - 工作流数据
   * @returns {Promise} 创建结果
   */
  static create(workflow) {
    return request({
      url: '/api/v1/workflow/',
      method: 'POST',
      data: workflow
    })
  }

  /**
   * 查询插件动作
   * 获取所有动作
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 插件动作列表
   */
  static getPluginActions(pluginId) {
    return request({
      url: '/api/v1/workflow/plugin/actions',
      method: 'GET',
      data: { plugin_id: pluginId }
    })
  }

  /**
   * 所有动作
   * 获取所有动作
   * @returns {Promise} 动作列表
   */
  static getActions() {
    return request({
      url: '/api/v1/workflow/actions',
      method: 'GET'
    })
  }

  /**
   * 获取所有事件类型
   * @returns {Promise} 事件类型列表
   */
  static getEventTypes() {
    return request({
      url: '/api/v1/workflow/event_types',
      method: 'GET'
    })
  }

  /**
   * 分享工作流
   * @param {Object} shareData - 分享数据
   * @returns {Promise} 分享结果
   */
  static share(shareData) {
    return request({
      url: '/api/v1/workflow/share',
      method: 'POST',
      data: shareData
    })
  }

  /**
   * 删除分享
   * @param {number} shareId - 分享ID
   * @returns {Promise} 删除结果
   */
  static deleteShare(shareId) {
    return request({
      url: `/api/v1/workflow/share/${shareId}`,
      method: 'DELETE'
    })
  }

  /**
   * 复用工作流
   * @param {Object} forkData - 复用数据
   * @returns {Promise} 复用结果
   */
  static fork(forkData) {
    return request({
      url: '/api/v1/workflow/fork',
      method: 'POST',
      data: forkData
    })
  }

  /**
   * 查询分享的工作流
   * @param {string} name - 名称
   * @param {number} page - 页码，默认为1
   * @param {number} count - 数量，默认为30
   * @returns {Promise} 分享的工作流列表
   */
  static getShares(name, page = 1, count = 30) {
    return request({
      url: '/api/v1/workflow/shares',
      method: 'GET',
      data: { name, page, count }
    })
  }

  /**
   * 执行工作流
   * @param {number} workflowId - 工作流ID
   * @param {boolean} fromBegin - 是否从头开始，默认为true
   * @returns {Promise} 执行结果
   */
  static run(workflowId, fromBegin = true) {
    return request({
      url: `/api/v1/workflow/${workflowId}/run`,
      method: 'POST',
      data: { from_begin: fromBegin }
    })
  }

  /**
   * 启用工作流
   * @param {number} workflowId - 工作流ID
   * @returns {Promise} 启用结果
   */
  static start(workflowId) {
    return request({
      url: `/api/v1/workflow/${workflowId}/start`,
      method: 'POST'
    })
  }

  /**
   * 停用工作流
   * @param {number} workflowId - 工作流ID
   * @returns {Promise} 停用结果
   */
  static pause(workflowId) {
    return request({
      url: `/api/v1/workflow/${workflowId}/pause`,
      method: 'POST'
    })
  }

  /**
   * 重置工作流
   * @param {number} workflowId - 工作流ID
   * @returns {Promise} 重置结果
   */
  static reset(workflowId) {
    return request({
      url: `/api/v1/workflow/${workflowId}/reset`,
      method: 'POST'
    })
  }

  /**
   * 工作流详情
   * 获取工作流详情
   * @param {number} workflowId - 工作流ID
   * @returns {Promise} 工作流详情
   */
  static getDetail(workflowId) {
    return request({
      url: `/api/v1/workflow/${workflowId}`,
      method: 'GET'
    })
  }

  /**
   * 更新工作流
   * @param {number} workflowId - 工作流ID
   * @param {Object} workflow - 工作流数据
   * @returns {Promise} 更新结果
   */
  static update(workflowId, workflow) {
    return request({
      url: `/api/v1/workflow/${workflowId}`,
      method: 'PUT',
      data: workflow
    })
  }

  /**
   * 删除工作流
   * @param {number} workflowId - 工作流ID
   * @returns {Promise} 删除结果
   */
  static delete(workflowId) {
    return request({
      url: `/api/v1/workflow/${workflowId}`,
      method: 'DELETE'
    })
  }
}

export default WorkflowAPI