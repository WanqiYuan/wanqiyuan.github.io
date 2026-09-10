# GitHub Pages 上传说明

这是已经编译好的静态发布包，目标站点为 https://wanqiyuan.github.io/ 。不用在 GitHub 上安装 Node 或运行 Jekyll。

## 第一次部署

1. 在 GitHub 打开 WanqiYuan/wanqiyuan.github.io 仓库。
2. 上传本文件所在文件夹的 **全部内容** 到仓库根目录，而不是上传外层 github-pages-* 文件夹或 ZIP 本身。
3. 确认根目录直接有 index.html、archive.html、.nojekyll、favicon.svg、404.html 和 assets/、fonts/、figures/ 文件夹。资源目录不要漏掉。
4. 如果网页上传器没有包含 .nojekyll，请用 Add file → Create new file，在根目录创建名为 .nojekyll 的空文件。
5. 提交更改。到 Settings → Pages，Source 选择 Deploy from a branch，选择刚上传的分支（通常 main 或 master，以仓库实际名称为准），文件夹选择 /(root)，保存。
6. 等 Pages 部署任务成功，访问 https://wanqiyuan.github.io/ 。它自动进入个人主页并播放开屏；Publications 可进入卷轴和列表。

旧的 Jekyll 文件不用立即删除，.nojekyll 会关闭 Jekyll 处理，新的 index.html 作为首页。不需要上传本地整个工作目录、node_modules、local、preview 或历史快照。远程仓库里若有旧版发布工作流，请停用它，避免它覆盖这份静态站点。

## 后续更新

- 主页文字、日期、News 和联系方式：修改 home-data.js，再上传覆盖。
- 主页照片：替换 portrait.png，或修改 home-data.js 的 photo 并上传对应图片。
- 新增/修改论文：在本地源码 local/rhine-reference/source/RhineLabUI-main/content/papers.json 修改数据，图片放该源码的 public/figures/。运行工作目录中的 scripts/prepare-pages.ps1 重新生成发布包，再上传覆盖。仅上传论文图片不会新增论文记录。
- 首页开屏、卷轴及详情动画均在浏览器执行，GitHub Pages 不需要后端。

## 更新打包（在原本地工作目录）

PowerShell 运行：

    powershell -ExecutionPolicy Bypass -File .\scripts\prepare-pages.ps1

新的目录和 ZIP 放在 deploy/。每次生成独立目录，旧包可用来回滚。源码维护详见 local/rhine-reference/source/RhineLabUI-main/CONTENT-GUIDE.md。

## 注意

本包使用站点根目录 / 的资源路径，适用于该账号网站的根域名部署。不要再套入额外的项目子路径。当前测试的是纯静态本地发布包；线上成功与否以 GitHub Pages 部署任务结果为准。

官方配置说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
