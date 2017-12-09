#hy-abc

## 特性

-   基于[react](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[dva](https://github.com/dvajs/dva)，[Mock](https://github.com/nuysoft/Mock) 企业级后台管理系统最佳实践。
-   基于Antd UI 设计语言，提供后台管理系统常见使用场景。
-   基于[dva](https://github.com/dvajs/dva)动态加载 Model 和路由，按需加载。
-   使用[roadhog](https://github.com/sorrycc/roadhog)本地调试和构建，其中Mock功能实现脱离后端独立开发。
-   适合团队开发
-   类比MVC思想优化目录结构


## 目录结构

```bash
├── /dist/           # 项目输出目录
├── /mock/         	 # 数据mock
├── /public/         # 不进行编译的目录
├── /src/            # 项目源码目录
│	 ├── /Root/   			# 程序根目录
│	 │ 	  ├── /components/ 	# 子页面
│	 │ 	  │    ├── /Home/         # 主页
│	 │ 	  │    │    └── ...
│	 │ 	  │    ├── /List/         # List页
│	 │ 	  │    │    └── ...
│	 │ 	  │    ├── /Todo/         # Todo页
│	 │ 	  │    │    ├── /assets/    	# 页面的静态文件
│	 │ 	  │    │    ├── /components/    # 页面内的组件
│	 │ 	  │    │    │    └── ...
│	 │ 	  │    │    ├── /models/    	# 子页面M
│	 │ 	  │    │    ├── conf.js    		# 子页面配置文件
│	 │ 	  │    │    ├── index.js    	# 子页面C
│	 │ 	  │    │    └── UI.js           # 子页面V
│	 │ 	  │    └── ...
│	 │ 	  ├── /models/   		# 首页M
│	 │ 	  │    ├── index.js     # 加载子模块数据
│	 │ 	  │    └── app.js       # 首页数据
│	 │ 	  ├── /public/   		# 公共资源
│	 │ 	  │    └── /assets/     # 公共静态资源
│	 │ 	  ├── conf.js  		# 首页配置文件
│	 │ 	  ├── index.js   	# 首页C
│	 │    └── UI.js         # 首页V
│	 ├── /services/     # 数据接口
│	 ├── /utils/        # 工具函数
│	 │    └── request.js   # 异步请求函数
│	 ├── theme.js       # 导入主题
│	 ├── theme.less     # 覆盖ant UI默认主题
│	 ├── route.js       # 路由配置
│	 ├── app.js         # 初始化app
│	 ├── index.css      # 首页的样式表
│	 └── index.js       # 入口文件   
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```