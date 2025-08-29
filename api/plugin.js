import { request } from './index.js'

/**
 * 插件相关API
 */
class PluginAPI {
  /**
   * 所有插件
   * 查询所有插件清单，包括本地插件和在线插件，插件状态：installed, market, all
   * @param {string} state - 插件状态，默认为all
   * @param {boolean} force - 是否强制刷新，默认为false
   * @returns {Promise} 插件列表
   */
  static getAllPlugins(state = 'all', force = false) {
    return request({
      url: '/api/v1/plugin/',
      method: 'GET',
      data: { state, force }
    })
  }

  /**
   * 已安装插件
   * 查询用户已安装插件清单
   * @returns {Promise} 已安装插件列表
   */
  static getInstalledPlugins() {
    return request({
      url: '/api/v1/plugin/installed',
      method: 'GET'
    })
  }

  /**
   * 插件安装统计
   * @returns {Promise} 统计数据
   */
  static getStatistic() {
    return request({
      url: '/api/v1/plugin/statistic',
      method: 'GET'
    })
  }

  /**
   * 重新加载插件
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 重载结果
   */
  static reloadPlugin(pluginId) {
    return request({
      url: `/api/v1/plugin/reload/${pluginId}`,
      method: 'GET'
    })
  }

  /**
   * 安装插件
   * @param {string} pluginId - 插件ID
   * @param {string} repoUrl - 仓库URL
   * @param {boolean} force - 是否强制安装，默认为false
   * @returns {Promise} 安装结果
   */
  static installPlugin(pluginId, repoUrl = '', force = false) {
    return request({
      url: `/api/v1/plugin/install/${pluginId}`,
      method: 'GET',
      data: { repo_url: repoUrl, force }
    })
  }

  /**
   * 获取插件联邦组件列表
   * @param {string} token - 认证token
   * @returns {Promise} 组件列表
   */
  static getRemotes(token) {
    return request({
      url: '/api/v1/plugin/remotes',
      method: 'GET',
      data: { token }
    })
  }

  /**
   * 获取插件表单页面
   * 根据插件ID获取插件配置表单或Vue组件URL
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 表单配置
   */
  static getPluginForm(pluginId) {
    return request({
      url: `/api/v1/plugin/form/${pluginId}`,
      method: 'GET'
    })
  }

  /**
   * 获取插件数据页面
   * 根据插件ID获取插件数据页面
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 页面数据
   */
  static getPluginPage(pluginId) {
    return request({
      url: `/api/v1/plugin/page/${pluginId}`,
      method: 'GET'
    })
  }

  /**
   * 获取所有插件仪表板元信息
   * @returns {Promise} 仪表板元信息
   */
  static getDashboardMeta() {
    return request({
      url: '/api/v1/plugin/dashboard/meta',
      method: 'GET'
    })
  }

  /**
   * 获取插件仪表板配置
   * 根据插件ID获取插件仪表板
   * @param {string} pluginId - 插件ID
   * @param {string} key - 仪表板键
   * @param {string} userAgent - User-Agent头
   * @returns {Promise} 仪表板配置
   */
  static getDashboardWithKey(pluginId, key, userAgent) {
    const headers = {}
    if (userAgent) {
      headers['user-agent'] = userAgent
    }
    
    return request({
      url: `/api/v1/plugin/dashboard/${pluginId}/${key}`,
      method: 'GET',
      header: headers
    })
  }

  /**
   * 获取插件仪表板配置
   * 根据插件ID获取插件仪表板
   * @param {string} pluginId - 插件ID
   * @param {string} userAgent - User-Agent头
   * @returns {Promise} 仪表板配置
   */
  static getDashboard(pluginId, userAgent) {
    const headers = {}
    if (userAgent) {
      headers['user-agent'] = userAgent
    }
    
    return request({
      url: `/api/v1/plugin/dashboard/${pluginId}`,
      method: 'GET',
      header: headers
    })
  }

  /**
   * 重置插件配置及数据
   * 根据插件ID重置插件配置及数据
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 重置结果
   */
  static resetPlugin(pluginId) {
    return request({
      url: `/api/v1/plugin/reset/${pluginId}`,
      method: 'GET'
    })
  }

  /**
   * 获取插件静态文件
   * @param {string} pluginId - 插件ID
   * @param {string} filepath - 文件路径
   * @returns {Promise} 文件内容
   */
  static getPluginFile(pluginId, filepath) {
    return request({
      url: `/api/v1/plugin/file/${pluginId}/${filepath}`,
      method: 'GET'
    })
  }

  /**
   * 获取插件文件夹配置
   * 获取插件文件夹分组配置
   * @returns {Promise} 文件夹配置
   */
  static getFolders() {
    return request({
      url: '/api/v1/plugin/folders',
      method: 'GET'
    })
  }

  /**
   * 保存插件文件夹配置
   * 保存插件文件夹分组配置
   * @param {Object} folderConfig - 文件夹配置
   * @returns {Promise} 保存结果
   */
  static saveFolders(folderConfig) {
    return request({
      url: '/api/v1/plugin/folders',
      method: 'POST',
      data: folderConfig
    })
  }

  /**
   * 创建插件文件夹
   * 创建新的插件文件夹
   * @param {string} folderName - 文件夹名称
   * @returns {Promise} 创建结果
   */
  static createFolder(folderName) {
    return request({
      url: `/api/v1/plugin/folders/${folderName}`,
      method: 'POST'
    })
  }

  /**
   * 删除插件文件夹
   * @param {string} folderName - 文件夹名称
   * @returns {Promise} 删除结果
   */
  static deleteFolder(folderName) {
    return request({
      url: `/api/v1/plugin/folders/${folderName}`,
      method: 'DELETE'
    })
  }

  /**
   * 更新文件夹中的插件
   * 更新指定文件夹中的插件列表
   * @param {string} folderName - 文件夹名称
   * @param {Array} plugins - 插件列表
   * @returns {Promise} 更新结果
   */
  static updateFolderPlugins(folderName, plugins) {
    return request({
      url: `/api/v1/plugin/folders/${folderName}/plugins`,
      method: 'PUT',
      data: plugins
    })
  }

  /**
   * 获取插件配置
   * 根据插件ID获取插件配置信息
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 插件配置
   */
  static getPluginConfig(pluginId) {
    return request({
      url: `/api/v1/plugin/${pluginId}`,
      method: 'GET'
    })
  }

  /**
   * 更新插件配置
   * @param {string} pluginId - 插件ID
   * @param {Object} config - 配置数据
   * @returns {Promise} 更新结果
   */
  static updatePluginConfig(pluginId, config) {
    return request({
      url: `/api/v1/plugin/${pluginId}`,
      method: 'PUT',
      data: config
    })
  }

  /**
   * 卸载插件
   * @param {string} pluginId - 插件ID
   * @returns {Promise} 卸载结果
   */
  static uninstallPlugin(pluginId) {
    return request({
      url: `/api/v1/plugin/${pluginId}`,
      method: 'DELETE'
    })
  }

  /**
   * 创建插件分身
   * @param {string} pluginId - 插件ID
   * @param {Object} cloneConfig - 分身配置
   * @returns {Promise} 创建结果
   */
  static clonePlugin(pluginId, cloneConfig) {
    return request({
      url: `/api/v1/plugin/clone/${pluginId}`,
      method: 'POST',
      data: cloneConfig
    })
  }
}

export default PluginAPI