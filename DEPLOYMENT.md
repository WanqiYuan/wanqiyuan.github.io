# 发布这个仓库

本仓库已加入完整静态网站，包括首次开屏、主页、卷轴入场与切列、List 视图、论文详情揭示及返回转场。

## GitHub Desktop

1. 查看 Changes，预计新增 30 个文件。
2. 填写提交说明，例如 `Publish new personal website`，点击 Commit to master。
3. 点击 Push origin。
4. GitHub 仓库 Settings → Pages：选择 Deploy from a branch、master、/(root)。如果已是这个配置，无需再改。
5. 等待 Pages 部署成功，访问 https://wanqiyuan.github.io/ 。首次进入自动播放开屏动画。

index.html 自动进入 rhine/home.html；它不带 intro=skip，所以会播放开屏。论文页返回主页时使用 intro=skip 是预期行为。
.nojekyll 必须一并提交，用来关闭旧版 Jekyll 构建。旧站源码保留，不需要删除；当前首页由 index.html 提供。

## 内容更新

- 主页信息、中文名、News、联系方式：rhine/home-data.js
- 主页照片：rhine/portrait.png
- 发布文件已编译，不需要在这个仓库运行 npm。
- 论文数据及动画源码目前保存在原工作目录 F:/wanqiyuan.github.io-master/local/rhine-reference/source/RhineLabUI-main/。
- 新增论文时修改该源码的 content/papers.json，图片放 public/figures/；按原目录 CONTENT-GUIDE.md 操作。
- 在原工作目录运行 scripts/prepare-pages.ps1 后，将新发布包中的 rhine/ 等文件覆盖到这个仓库，检查、提交并 Push。

没有替你创建提交或 Push；请在 GitHub Desktop 中确认更改后执行。线上部署结果以 Pages 工作流状态为准。
