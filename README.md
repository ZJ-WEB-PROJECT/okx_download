# OKX Lottery Landing Page

这是一个 Vite + React 的移动端活动页项目。

## 功能

- 第一页：OKX十周年活动 + 幸运转盘
- 第二页：下载OKX、提交USDT收款地址、提取幸运奖金
- 奖金显示：$200
- 右下角在线客服按钮
- 右上角语言选择
- 自动根据访客手机系统语言切换：英语 / 西班牙语 / 阿拉伯语 / 法语 / 中文
- 下载按钮根据设备自动跳转 iOS / Android / 默认下载链接

## 安装

```bash
npm install
```

## 本地运行

```bash
npm run dev
```

## 打包

```bash
npm run build
```

打包完成后，上传 `dist` 目录到服务器即可。

## 需要修改的位置

### 1. 下载链接

在 `src/App.jsx` 顶部修改：

```js
const DOWNLOAD_LINKS = {
  ios: "https://www.okx.com/download",
  android: "https://www.okx.com/download",
  default: "https://www.okx.com/download",
};
```

### 2. 在线客服链接

在 `src/App.jsx` 顶部修改：

```js
const SERVICE_URL = "https://hw.url668.com/s/GXQm1RWRc";
```

### 3. 页面文案

在 `src/App.jsx` 的 `i18n` 对象里修改对应语言文案。
