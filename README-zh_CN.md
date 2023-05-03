<p align="center">
  <img width="160" src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*XDYxSJXBjjwAAAAAAAAAAAAAARQnAQ">
</p>
<h1 align="center">Kitchen Stable Diffusion WebUI</h1>

<div align="center">
  Kitchen WebUI 适配主题 <a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank">AUTOMATIC1111/stable-diffusion-web-ui</a>

<br/>
<br/>

<!-- SHIELD GROUP -->

[![release][release-shield]][release-url]
[![releaseDate][release-date-shield]][release-date-url]
[![ciTest][ci-test-shield]][ci-test-url]
[![ciRelease][ci-release-shield]][ci-release-url]
<br/>
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url]

</div>

![](https://github.com/canisminor1990/sd-web-ui-kitchen-theme/blob/main/assets/screenshot.webp?raw=true)

[English](./README.md) | 简体中文

> ⚠️⚠️⚠️ 警告：最低要求 gradio-3.23.0 & sd-webui [4c1ad74](https://github.com/AUTOMATIC1111/stable-diffusion-webui/commit/4c1ad743e3baf1246db0711aa0107debf036a12b)

<br/>

## ✨ 特性

- 🌈 支持亮暗色主题，并一键切换。
- 🪄 支持 Prompt 格式化。
- 🎛️ 快捷设置伸缩侧边栏.
- 🎨 基于 Antd CSS Token。

<br/>

## 🖥 兼容环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                              |

> ⚠️ 目前已知道在 Firefox 火狐浏览器上存在样式兼容问题

<br/>

## 📦 安装

作为扩展（推荐） 将存储库克隆到您的扩展文件夹中：

```shell
git clone "https://github.com/canisminor1990/sd-web-ui-kitchen-theme" extensions/kitchen-theme
```

当前主题支持亮暗色双主题，如果你想强制使用暗色模式，使用参数 `--theme=dark` 启动您的 WebUI。例如，在 Windows 上，您的 `webui-user.bat` 应包括：

```shell
set COMMANDLINE_ARGS= --theme=dark
```

或通过 URL Props 直接切换

```shell
http://localhost:7860/?__theme=light
http://localhost:7860/?__theme=dark
```

<br/>

## ⚒️ 推荐设置

Kitchen WebUI Setting

> 右上角 ⚙ 图标打开设置面板，当前可用设置如下

- **Sidebar**
  - Default expand 默认展开: `true`
  - Default width 默认宽度: `280`
- **ExtraNetwork Sidebar**
  - Enable 启用: `true`
  - Default expand 默认展开: `true`
  - Default Width 默认宽度: `340`
  - Default card size 模型卡片默认尺寸: `86`

Extra-Networks 扩展模型视窗

- 拇指视图
- 卡牌宽度: 86
- 卡牌高度: 128

![](https://github.com/canisminor1990/sd-web-ui-kitchen-theme/blob/main/assets/extra-networks.webp?raw=true)

Quick-Setting 快捷设置

```txt
sd_model_checkpoint, sd_vae, CLIP_stop_at_last_layers, img2img_background_color, img2img_color_correction, samples_save, samples_format, grid_save, return_grid,  n_rows, live_previews_enable, show_progress_every_n_steps, live_preview_refresh_period
```

<br/>

## 🪄 提示词格式化

![](https://github.com/canisminor1990/sd-web-ui-kitchen-theme/blob/main/assets/prompt-formatting.webp?raw=true)

> 全角标点转半角，去除多余空格，补充缺失逗号，把 Extra-Networks 模型移动到末尾

格式化前

```text
photorealistic   photo of a handsome male (wizard  :1.2）， <lora:LuisapHotlineStyle:0.5> <lora:ElegantHanfuRuqunStyle:0.2>    short beard, white wizard  shirt, (with golden    trim:0.8),
```

格式化后

```text
photorealistic photo of a handsome male, (wizard:1.2), short beard, white wizard shirt, (with golden trim:0.8), <lora:LuisapHotlineStyle:0.5>, <lora:ElegantHanfuRuqunStyle:0.2>
```

<br/>

## ⌨️ 本地开发

你可以使用 Gitpod 进行在线开发：

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/canisminor1990/sd-web-ui-kitchen-theme)

或者克隆到本地开发:

```bash
$ git clone https://github.com/canisminor1990/sd-web-ui-kitchen-theme.git
$ cd sd-web-ui-kitchen-theme
$ npm install
$ npm start
```

<br/>

## 🤝 参与贡献

<!-- CONTRIBUTION GROUP -->

> 📊 Total: <kbd>**5**</kbd>

<a href="https://github.com/canisminor1990" title="canisminor1990">
  <img src="https://avatars.githubusercontent.com/u/17870709?v=4" width="50" />
</a>
<a href="https://github.com/apps/dependabot" title="dependabot[bot]">
  <img src="https://avatars.githubusercontent.com/in/29110?v=4" width="50" />
</a>
<a href="https://github.com/actions-user" title="actions-user">
  <img src="https://avatars.githubusercontent.com/u/65916846?v=4" width="50" />
</a>
<a href="https://github.com/web-97" title="web-97">
  <img src="https://avatars.githubusercontent.com/u/46352788?v=4" width="50" />
</a>
<a href="https://github.com/alwayshopeless" title="alwayshopeless">
  <img src="https://avatars.githubusercontent.com/u/38844539?v=4" width="50" />
</a>

<!-- CONTRIBUTION END -->

<br/>

## 🔗 链接

- stable-diffusion-webui：https://github.com/AUTOMATIC1111/stable-diffusion-webui
- gradio-theme-gallery: https://huggingface.co/spaces/gradio/theme-gallery
- _before `1.0.0` version_
  - sd-web-ui-quickcs: https://github.com/Gerschel/sd-web-ui-quickcss/
  - Dark-Themes-SD-WebUI-Automatic1111: https://github.com/Nacurutu/Dark-Themes-SD-WebUI-Automatic1111

<br/>

<!-- SHIELD LINK GROUP -->

<!-- release -->

[release-shield]: https://img.shields.io/github/v/release/canisminor1990/sd-web-ui-kitchen-theme?style=flat&sort=semver&logo=github
[release-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/releases

<!-- releaseDate -->

[release-date-shield]: https://img.shields.io/github/release-date/canisminor1990/sd-web-ui-kitchen-theme?style=flat
[release-date-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/releases

<!-- ciTest -->

[ci-test-shield]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/workflows/Test%20CI/badge.svg
[ci-test-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/actions/workflows/test.yml

<!-- ciRelease -->

[ci-release-shield]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/workflows/Build%20and%20Release/badge.svg
[ci-release-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/actions/workflows/release.yml

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/canisminor1990/sd-web-ui-kitchen-theme.svg?style=flat
[contributors-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/canisminor1990/sd-web-ui-kitchen-theme.svg?style=flat
[forks-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/canisminor1990/sd-web-ui-kitchen-theme.svg?style=flat
[stargazers-url]: https://github.com/canisminor1990/sd-web-ui-kitchen-theme/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/canisminor1990/sd-web-ui-kitchen-theme.svg?style=flat
[issues-url]: https://img.shields.io/github/issues/canisminor1990/sd-web-ui-kitchen-theme.svg?style=flat
