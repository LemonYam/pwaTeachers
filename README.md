# :blush: pwa-teachers-test :blush:

> :open_mouth: A PWA project

## :smile: Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目介绍

> :smile: **vue3.7 + typescript3.6.2 + vue-router^3.1.3 + 骨架屏**

**目录**

```text
|— node_modules 安装的依赖包
|— public   public 中的静态资源会被复制到输出目录中
|   |— index.html   页面入口文件
|— src
|   |— assets   放置一些静态资源
|   |— component    组件存放位置
|   |— router   vue-router 相关配置
|   |— views    所有的路由组件（页面）
|   |— App.vue  路由组件的顶层路由
|   |— main.ts  vue 入口 ts 文件
|   |— registerServiceWorker.ts    注册 service worker
|   |— service-worker.js    service worker 相关行为
|   |— shims-tsx.d.ts   相关 tsx 模块注入
|   |— shims-vue.d.ts    Vue 模块注入，使 vue 文件被 ts 识别
|— .browserslistrc
|— .gitignore   指定文件无需提交到git上
|— babel.config.js  使用一些预设
|— package-lock.json    版本管理使用的文件
|— package.json    项目描述及依赖
|— README.md
|— tsconfig.json    ts 相关配置
|— tslint.json  tslint 相关配置
|— vue.config.js    // webpack 配置
```

### :pencil: 项目零散知识点

#### PWA 相关

1. PWA(Progressive web apps，渐进式 Web 应用)运用现代 Web API 和传统的渐进式增强策略来创建跨平台 Web 应用程序它并不是一个快捷方式，而能在系统中作为一个独立的 App 存在，用户可设置它的权限，清除它的缓存

2. 主要特点：

- 可靠：即使在网络不稳定甚至断网的环境下，也能瞬间加载并展现
- 用户体验：快速响应，具有平滑的过渡动画及用户操作的反馈
- 用户黏性：和 Native App 一样，可以被添加到桌面，能接受离线通知，具有沉浸式的用户体验

3. 主要特性：

- 渐进式：适用于所有浏览器，因为它是以渐进式增强作为宗旨开发的
- 连接无关性：能够借助 Service Worker 在离线或者网络较差的情况下正常访问
- 类原生应用：由于是在 App Shell 模型基础上开发，因此应具有 Native App 的交互，给用户 Native App 的体验
- 持续更新：始终是最新的，无版本和更新问题
- 安全：通过 HTTPS 协议提供服务，防止窥探，确保内容不被篡改
- 可索引：manifest 文件和 Service Worker 可以让搜索引擎索引到，从而将其识别为『应用』
- 黏性：通过推送离线通知等，可以让用户回流
- 可安装：用户可以添加常用的 Web App 到桌面，免去到应用商店下载的麻烦
- 可链接：通过链接即可分享内容，无需下载安装

4. 最低要求：

- 站点需要使用 HTTPS
- 页面需要响应式，能够在平板和移动设备上都具有良好的浏览体验
- 所有的 URL 在断网的情况下有内容展现，不会展现浏览器默认页面
- 需要支持 Wep App Manifest，能被添加到桌面
- 即使在 3G 网络下，页面加载要快，可交互时间要短
- 在主流浏览器下都能正常展现
- 动画要流畅，有用户操作反馈
- 每个页面都有独立的 URL

5. 核心技术：

- Web App Manifest：

  - 开发者可以定义用户添加到主屏的图标、应用名称等
  - 允许开发者配置隐藏浏览器多余的 UI（地址栏，导航栏等），让 PWA 具有和 Native App 一样的沉浸式体验
  - 体现在代码上主要是一个 JSON 文件：manifest.json，开发者可以在这个 JSON 文件中配置 PWA 的相关信息

- Service Worker：在 PWA 中最重要的功能就是离线与缓存

  - 一个特殊的 worker 线程，独立于当前网页主线程，有自己的执行上下文
  - 一旦被安装，就永远存在，除非显示取消注册
  - 使用到的时候浏览器会自动唤醒，不用的时候自动休眠
  - 可拦截并代理请求和处理返回，可以操作本地缓存，如 CacheStorage，IndexedDB 等
  - 离线内容开发者可控
  - 能接受服务器推送的离线消息
  - 异步实现，内部接口异步化基本是通过 Promise 实现
  - 不能直接操作 DOM
  - 必须在 HTTPS 环境下才能工作

- 离线通知：

  - 离线通知是指在用户没有打开 PWA 站点的情况下，也能接受到服务器推送过来的通知并展现给用户
  - 包括了两部分，离线推送和展现通知，分别是 Web Push 和 Notification API
  - 浏览器在接受到对应的消息服务中心推送过来的离线消息时，会唤醒对应站点注册的 Service Worker，开发者可以在 Service Worker 文件中处理接受的请求，显示通知

- App Shell 和骨架屏：
  - App Shell 是 PWA 强调的一个非常重要的设计理念，它能够缩短用户进入页面时的白屏时间，让用户一进入 PWA 就能快速看到 PWA 的整体框架
  - 骨架屏（App Skeleton），也是提升首屏体验的有效方式。原理是在真实内容渲染完成前，使用一些能够快速渲染的静态图片/样式/色块/部分真实内容进行占位，让用户对真实内容区域有心理预期
  - App Shell 和骨架屏相辅相成，App Shell 显示页面的外框部分，初始内容由骨架屏来填充，保证主体内容区域不留白
  - 特点：
    - 在页面加载初期预先渲染内容，提升感官上的体验
    - 一般情况骨架屏和实际内容的结构是类似的，因此之后的切换不会过于突兀
    - 只需要简单的 CSS 支持 (涉及图片懒加载可能还需要 JS )，不要求 HTTPS 协议，没有额外的学习和维护成本
    - 若页面采用组件化开发，每个组件可根据自身状态定义自身的骨架屏及其切换时机，同时维持了组件之间的独立性

6. Promise：

- ES6 引入的一种异步编程的解决方案，通过 Promise 对象来提供统一的异步状态管理方法
- 一般在使用 Promise 对象的时候，首先需要对其进行实例化
- 实例化的 Promise 对象为异步状态的管理容器，resolve()和 reject()是用于控制 promise 状态的方法
- 在调用 resolve()和 reject()方法的时候可传入任意值，这个值会作为监听状态变更的回调函数的参数透传出去
- Promise 提供了 .then(onFulfilled, onRejected) 和 .catch(onRejected)等原型链方法用于注册状态变更所触发的回调函数
  [promise 可参考](https://www.cnblogs.com/lemonyam/p/11938433.html)

7. Data URL

- 允许我们使用内联（inline-code）的方式在网页中包含数据，目的是将一些小的数据，直接嵌入到网页中，从而不用再从外部文件载入

```bash
<!-- 传统引入图片方法 -->
<img src="images/image.png"/>

<!-- Data URL 引入图片方法 -->
<img src="data:image/png;base64,iV......"/>
```

- 格式规范

```bash
data:[<mime type>][;charset=<charset>][;<encoding>],<encoded data>

1.  data ：协议名称；
2.  [<mime type>] ：可选项，数据类型（image/png、text/plain等）
3.  [;charset=<charset>] ：可选项，源文本的字符集编码方式
4.  [;<encoding>] ：数据编码方式（默认US-ASCII，BASE64两种）
5.  ,<encoded data> ：编码后的数据

部分 Data URL scheme 支持的类型
data:,                            文本数据
data:text/plain,                    文本数据
data:text/html,                  HTML代码
data:text/html;base64,            base64编码的HTML代码
data:text/css,                    CSS代码
data:text/css;base64,              base64编码的CSS代码
data:text/javascript,              Javascript代码
data:text/javascript;base64,        base64编码的Javascript代码
data:image/gif;base64,            base64编码的gif图片数据
data:image/png;base64,            base64编码的png图片数据
data:image/jpeg;base64,          base64编码的jpeg图片数据
data:image/x-icon;base64,          base64编码的icon图片数据
```

- 适用场合：

  - 当访问外部资源很麻烦或受限时
  - 当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时
  - 当图片的体积太小，占用一个 HTTP 会话不是很值得时

- 不适用场合：
  - 编码后可能会增加数据的体积
  - Data URL 形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次，但可优化

8. 页面从加载到展现的大致顺序如下：

- 加载 HTML 文件
- 解析 DOM
- 并行加载 CSS/JS 资源
- 如果 head 中存在外链的样式，则阻塞渲染等待样式文件加载并解析完成
- 如果 head 中存在外链的 script，则阻塞渲染等待 script 文件加载并执行完成

9. 资源请求的拦截代理：

- 资源请求的判断：
  - fetch 事件会拦截页面上所有的网络资源请求，但我们通常只对部分资源请求进行处理，其余的请求会继续走浏览器默认的资源请求流程
  - fetch 事件回调参数的 event.request 属性描述了当前被拦截的资源请求，可以通过它来进行判断分类。event.request 是 Request 对象的实例，包含了资源请求的 URL、请求模式、请求头等全部信息
  - 一般情况下，资源请求的判断可以通过对 event.request.url 进行匹配来实现
- 资源请求的响应：
  - fetch 事件回调参数的方法 event.respondWith(r) 可以指定资源请求的响应结果
  - respondWith(r) 方法的参数 r 可以是一个 Response 对象实例，也可以是一个 Promise 对象，这个 Promise 对象在异步执行完成的时候同样需要 resolve 返回一个 Response 对象实例作为请求的响应结果
- 异步资源请求响应：
  - event.respondWith 方法与 install、activate 事件回调参数中的 event.waitUntil 类似，起到了扩展延长 fetch 事件生命周期的作用
  - 在 fetch 事件回调同步执行完毕之前如果没有调用 event.respondWith(r) 指定资源响应结果，那么就会进入浏览器默认的资源请求流程当中
- 资源请求响应的错误处理：
  - 当使用了 event.respondWith 指定资源响应之后，无论是以同步还是异步的方式，最终都需要返回 Response 对象
  - 在调用 event.respondWith 的时候，需要主动捕获并处理错误、异常返回结果
- 资源请求与响应操作的管理：
  - 在 fetch 事件回调当中主要进行着资源请求匹配和响应结果返回的操作，可以把这个过程当做一个路由分发的问题，因此我们可以封装一个 Router 类来实现对路由的匹配规则和操作分发的统一管理

# pwa-teachers-test
