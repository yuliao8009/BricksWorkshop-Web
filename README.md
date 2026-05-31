
# BricksWorkshop | 卓越科技官方展示网站

&gt; [English Version](README_EN.md)


[![React Version](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&amp;logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=flat-square&amp;logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?style=flat-square&amp;logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06b6d4?style=flat-square&amp;logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-ff6b6b?style=flat-square)](https://www.framer.com/motion)
[![Cloudflare Workers](https://img.shields.io/badge/Deployed_on-Cloudflare-f38020?style=flat-square&amp;logo=cloudflare)](https://developers.cloudflare.com/workers)


---

## 👨‍💻 关于作者

**初中学生开发者 | VEX 机器人竞赛多年参赛者**

你好！我是一名热爱编程和机器人技术的初中学生，同时拥有多年 VEX 机器人竞赛经验。在参与 VEX 竞赛的过程中，我系统学习了机械设计、编程策略、自动程序开发以及团队协作，这些经历让我对技术充满热情。

这个项目是我将课堂所学与竞赛经验相结合的一次实践。作为 BricksWorkshop（卓越科技）的官方展示网站，它不仅展现了我们的教育理念，也是我个人技术成长的见证。

---

## 🌟 关于 BricksWorkshop

BricksWorkshop（卓越科技）是西北首家专业的 VEX 学苑，坐落于美丽的汉中滨江路。

### 教育理念
- **专注度**：专注于 VEX 机器人教育领域，提供系统化、专业化的课程体系
- **游戏化学习**：通过有趣的项目和竞赛形式激发学习兴趣
- **全年龄段覆盖**：从 VEX 123 / GO 的低龄启蒙，到 VEX IQ / V5 的高阶竞技

---

## 🚀 技术栈

### 核心框架
| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | 前端 UI 框架 |
| TypeScript | 5.8.3 | 类型安全的 JavaScript 超集 |
| Vite | 6.3.5 | 下一代前端构建工具 |

### 样式与交互
- **Tailwind CSS 3.4.17** - 原子化 CSS 框架，提供响应式设计
- **Framer Motion 12.38.0** - 流畅的动画与视差滚动效果
- **clsx + tailwind-merge** - 高效的类名管理与合并

### 部署与工具
- **Cloudflare Workers** - 边缘部署，提供全球快速访问
- **ESLint** - 代码质量检查
- **@typescript-eslint** - TypeScript 专用 lint 规则

---

## 📁 项目结构

```
bricksworkshop/
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖与脚本
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── postcss.config.js       # PostCSS 配置
├── eslint.config.js        # ESLint 配置
├── wrangler.jsonc          # Cloudflare Wrangler 配置
└── src/
    ├── components/         # React 组件
    ├── pages/              # 页面组件
    ├── hooks/              # 自定义 Hooks
    ├── utils/              # 工具函数
    ├── styles/             # 样式文件
    └── main.tsx            # 应用入口
```

---

## 🛠️ 快速开始

### 前置要求
- Node.js &gt;= 18
- pnpm &gt;= 8 (推荐) 或 npm &gt;= 9

### 安装依赖

```bash
# 使用 pnpm（推荐，更快更省空间）
pnpm install

# 或使用 npm
npm install
```

### 本地开发

```bash
pnpm dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist/` 目录。

### 本地预览生产版本

```bash
pnpm preview
```

### 部署到 Cloudflare

```bash
pnpm deploy
```

---

## 🎯 网站核心板块

### 1. 首屏印象 (Hero)
极具视觉冲击力的品牌主视觉，配合核心宣传标语，建立访客第一印象。

### 2. 实力展现 (Statistics)
以直观的数据可视化呈现 BricksWorkshop 的教学成果与专业底蕴。

### 3. 教育理念 (About)
深入解读"专注度、游戏化学习"的教育理念，以及 VEX 机器人教育的独特优势。

### 4. 课程体系 (Curriculum)
详尽展示从低龄启蒙到高阶竞技的全年龄段 VEX 机器人课程矩阵。

### 5. 成长进阶 (Pathway)
为学员量身定制的科技学习与国内外赛事晋级路线图，规划清晰的成长路径。

### 6. 校区风貌 (Campus &amp; Gallery)
全方位展示汉中滨江路校区的一流教学环境、课堂精彩瞬间与学员高光时刻。

### 7. 答疑解惑 (FAQ)
贴心解答家长在机器人学习规划及课程报名中的常见问题。

---

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

---

## 📬 联系方式

- **GitHub**：[@flashzdw](https://github.com/flashzdw)
- **邮箱**：dongzi8009@gmail.com

---


**Made with ❤️ by a middle school student &amp; VEX competitor**
