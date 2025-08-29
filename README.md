# MoviePilot App

一个基于 uni-app 开发的 MoviePilot 客户端应用，提供影视资源搜索、下载管理和媒体整理功能。

# 仅用于学习交流使用，严禁在任何国内平台宣传该项目！

## 📱 项目简介

MoviePilot App 是 [MoviePilot](https://github.com/jxxghp/MoviePilot) 项目的移动端客户端，采用 Vue.js + uni-app 技术栈开发。

## ✨ 已完成功能

### 🔍 搜索功能
- [x] 全局搜索框
- [x] 多站点资源搜索
- [x] 搜索结果筛选和排序
- [x] 种子详情查看和下载

### 🌐 站点管理
- [x] 站点列表展示
- [x] 站点状态监控
- [x] 流量统计显示
- [ ] 站点配置管理

### 📊 仪表盘
- [ ] 系统状态概览

### 🎬 媒体管理
- [x] 电影和电视剧分类浏览
- [x] 推荐内容展示
- [x] 探索页面

### ⬇️ 下载管理
- [x] 下载任务列表
- [x] 下载进度监控
- [ ] 下载器客户端管理

### 👤 用户系统
- [x] 用户登录认证
- [ ] 用户信息管理

### 🎨 界面设计
- [ ] 深色/浅色主题支持

### ⚙️ 系统功能
- [ ] 插件管理
- [ ] 系统设置

## 🛠️ 技术栈

- **前端框架**: Vue.js 2.x
- **开发框架**: uni-app
- **UI 组件**: 自定义组件库
- **状态管理**: Vuex
- **网络请求**: uni.request
- **构建工具**: HBuilderX

## 📦 项目结构

```
moviepilot-app/
├── api/                    # API 接口封装
│   ├── auth.js            # 认证相关 API
│   ├── download.js        # 下载管理 API
│   ├── search.js          # 搜索相关 API
│   ├── site.js            # 站点管理 API
│   └── index.js           # API 统一导出
```

## 🔗 相关链接

- [MoviePilot 主项目](https://github.com/jxxghp/MoviePilot)
- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Vue.js 官方文档](https://cn.vuejs.org/)

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## ⚠️ 免责声明

本项目仅用于学习交流使用，请勿在任何国内平台宣传该项目！使用本项目所产生的任何法律责任由使用者自行承担。

---

⭐ 如果这个项目对你有帮助，请给一个 Star！