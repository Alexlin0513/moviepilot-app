/**
 * API数据模型定义
 * 包含所有API接口的请求和响应数据结构
 */

/**
 * 通用响应结构
 * @typedef {Object} Response
 * @property {boolean} success - 是否成功
 * @property {string} message - 消息
 * @property {Object|Array} data - 数据
 */

/**
 * 用户信息
 * @typedef {Object} User
 * @property {number} id - 用户ID
 * @property {string} name - 用户名
 * @property {string} email - 邮箱
 * @property {boolean} is_active - 是否激活
 * @property {boolean} is_superuser - 是否超级用户
 * @property {string} avatar - 头像
 * @property {boolean} is_otp - 是否启用OTP
 * @property {Object} permissions - 权限
 * @property {Object} settings - 设置
 */

/**
 * 站点信息
 * @typedef {Object} Site
 * @property {number} id - 站点ID
 * @property {string} name - 站点名称
 * @property {string} domain - 域名
 * @property {string} url - 地址
 * @property {number} pri - 优先级
 * @property {string} rss - RSS地址
 * @property {string} cookie - Cookie
 * @property {string} ua - User Agent
 * @property {string} apikey - API Key
 * @property {string} token - Token
 * @property {number} proxy - 代理
 * @property {string} filter - 过滤规则
 * @property {number} render - 渲染
 * @property {number} public - 公开
 * @property {*} note - 备注
 * @property {number} timeout - 超时时间
 * @property {number} limit_interval - 限制间隔
 * @property {number} limit_count - 限制次数
 * @property {number} limit_seconds - 限制秒数
 * @property {boolean} is_active - 是否激活
 * @property {string} downloader - 下载器
 */

/**
 * 媒体信息
 * @typedef {Object} MediaInfo
 * @property {string} source - 来源
 * @property {string} type - 类型
 * @property {string} title - 标题
 * @property {string} en_title - 英文标题
 * @property {string} year - 年份
 * @property {string} title_year - 标题年份
 * @property {number} season - 季数
 * @property {number} tmdb_id - TMDB ID
 * @property {string} imdb_id - IMDB ID
 * @property {string} tvdb_id - TVDB ID
 * @property {string} douban_id - 豆瓣ID
 * @property {number} bangumi_id - Bangumi ID
 * @property {number} collection_id - 合集ID
 * @property {string} mediaid_prefix - 媒体ID前缀
 * @property {string} media_id - 媒体ID
 * @property {string} original_language - 原始语言
 * @property {string} original_title - 原始标题
 * @property {string} release_date - 发布日期
 * @property {string} backdrop_path - 背景图路径
 * @property {string} poster_path - 海报路径
 * @property {number} vote_average - 评分
 * @property {string} overview - 概述
 * @property {string} category - 分类
 * @property {Object} seasons - 季信息
 * @property {Array} season_info - 季详情
 * @property {Array} names - 名称列表
 * @property {Array} actors - 演员列表
 * @property {Array} directors - 导演列表
 * @property {string} detail_link - 详情链接
 * @property {boolean} adult - 是否成人内容
 */

/**
 * 种子信息
 * @typedef {Object} TorrentInfo
 * @property {number} site - 站点ID
 * @property {string} site_name - 站点名称
 * @property {string} site_cookie - 站点Cookie
 * @property {string} site_ua - 站点UA
 * @property {boolean} site_proxy - 是否使用代理
 * @property {number} site_order - 站点顺序
 * @property {string} site_downloader - 站点下载器
 * @property {string} title - 标题
 * @property {string} description - 描述
 * @property {string} imdbid - IMDB ID
 * @property {string} enclosure - 种子链接
 * @property {string} page_url - 页面地址
 * @property {number} size - 大小
 * @property {number} seeders - 做种数
 * @property {number} peers - 下载数
 * @property {number} grabs - 完成数
 * @property {string} pubdate - 发布日期
 * @property {string} date_elapsed - 发布时间
 * @property {string} freedate - 免费截止时间
 * @property {number} uploadvolumefactor - 上传系数
 * @property {number} downloadvolumefactor - 下载系数
 * @property {boolean} hit_and_run - 是否H&R
 * @property {Array} labels - 标签
 * @property {number} pri_order - 优先级
 * @property {string} volume_factor - 流量系数
 * @property {string} freedate_diff - 免费时间差
 * @property {string} downloader - 下载器
 * @property {string} save_path - 保存路径
 */

/**
 * 订阅信息
 * @typedef {Object} Subscribe
 * @property {number} id - 订阅ID
 * @property {string} name - 名称
 * @property {string} year - 年份
 * @property {string} type - 类型
 * @property {string} keyword - 关键词
 * @property {number} tmdbid - TMDB ID
 * @property {string} doubanid - 豆瓣ID
 * @property {number} bangumiid - Bangumi ID
 * @property {string} mediaid - 媒体ID
 * @property {number} season - 季数
 * @property {string} poster - 海报
 * @property {string} backdrop - 背景图
 * @property {number} vote - 评分
 * @property {string} description - 描述
 * @property {string} filter - 过滤规则
 * @property {string} include - 包含
 * @property {string} exclude - 排除
 * @property {string} quality - 质量
 * @property {string} resolution - 分辨率
 * @property {string} effect - 特效
 * @property {number} total_episode - 总集数
 * @property {number} start_episode - 开始集数
 * @property {number} lack_episode - 缺失集数
 * @property {*} note - 备注
 * @property {string} state - 状态
 * @property {string} last_update - 最后更新
 * @property {string} username - 用户名
 * @property {Array<number>} sites - 站点列表
 * @property {string} downloader - 下载器
 * @property {number} best_version - 最佳版本
 * @property {number} current_priority - 当前优先级
 * @property {string} save_path - 保存路径
 * @property {number} search_imdbid - 搜索IMDB ID
 * @property {string} date - 日期
 * @property {string} custom_words - 自定义词汇
 * @property {string} media_category - 媒体分类
 * @property {Array<string>} filter_groups - 过滤组
 * @property {string} episode_group - 剧集组
 */

/**
 * 工作流信息
 * @typedef {Object} Workflow
 * @property {number} id - 工作流ID
 * @property {string} name - 工作流名称
 * @property {string} description - 工作流描述
 * @property {string} timer - 定时器
 * @property {string} trigger_type - 触发类型
 * @property {string} event_type - 事件类型
 * @property {Object} event_conditions - 事件条件
 * @property {string} state - 状态
 * @property {string} current_action - 当前动作
 * @property {string} result - 结果
 * @property {number} run_count - 运行次数
 * @property {Array} actions - 动作列表
 * @property {Array} flows - 流程列表
 * @property {string} add_time - 添加时间
 * @property {string} last_time - 最后执行时间
 */

/**
 * 插件信息
 * @typedef {Object} Plugin
 * @property {string} id - 插件ID
 * @property {string} plugin_name - 插件名称
 * @property {string} plugin_desc - 插件描述
 * @property {string} plugin_icon - 插件图标
 * @property {string} plugin_version - 插件版本
 * @property {string} plugin_label - 插件标签
 * @property {string} plugin_author - 插件作者
 * @property {string} author_url - 作者链接
 * @property {string} plugin_config_prefix - 插件配置前缀
 * @property {number} plugin_order - 插件顺序
 * @property {number} auth_level - 权限级别
 * @property {boolean} installed - 是否已安装
 * @property {boolean} state - 状态
 * @property {boolean} has_page - 是否有页面
 * @property {boolean} has_update - 是否有更新
 * @property {boolean} is_local - 是否本地插件
 * @property {string} repo_url - 仓库地址
 * @property {number} install_count - 安装次数
 * @property {Object} history - 历史记录
 * @property {number} add_time - 添加时间
 * @property {string} plugin_public_key - 插件公钥
 */

/**
 * 下载历史
 * @typedef {Object} DownloadHistory
 * @property {number} id - ID
 * @property {string} path - 路径
 * @property {string} type - 类型
 * @property {string} title - 标题
 * @property {string} year - 年份
 * @property {number} tmdbid - TMDB ID
 * @property {string} imdbid - IMDB ID
 * @property {number} tvdbid - TVDB ID
 * @property {string} doubanid - 豆瓣ID
 * @property {string} seasons - 季数
 * @property {string} episodes - 集数
 * @property {string} image - 图片
 * @property {string} download_hash - 下载哈希
 * @property {string} torrent_name - 种子名称
 * @property {string} torrent_description - 种子描述
 * @property {string} torrent_site - 种子站点
 * @property {string} userid - 用户ID
 * @property {string} username - 用户名
 * @property {string} channel - 频道
 * @property {string} date - 日期
 * @property {*} note - 备注
 * @property {string} media_category - 媒体分类
 * @property {string} episode_group - 剧集组
 */

/**
 * 文件项
 * @typedef {Object} FileItem
 * @property {string} storage - 存储类型
 * @property {string} type - 文件类型
 * @property {string} path - 路径
 * @property {string} name - 名称
 * @property {string} basename - 基础名称
 * @property {string} extension - 扩展名
 * @property {number} size - 大小
 * @property {number} modify_time - 修改时间
 * @property {Array} children - 子项
 * @property {string} fileid - 文件ID
 * @property {string} parent_fileid - 父文件ID
 * @property {string} thumbnail - 缩略图
 * @property {string} pickcode - 提取码
 * @property {string} drive_id - 驱动ID
 * @property {string} url - URL
 */

export default {
  // 导出所有类型定义供其他模块使用
  Response: 'Response',
  User: 'User',
  Site: 'Site',
  MediaInfo: 'MediaInfo',
  TorrentInfo: 'TorrentInfo',
  Subscribe: 'Subscribe',
  Workflow: 'Workflow',
  Plugin: 'Plugin',
  DownloadHistory: 'DownloadHistory',
  FileItem: 'FileItem'
}