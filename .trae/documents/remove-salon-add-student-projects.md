# 计划：移除 VEX 主题沙龙板块，新增学员项目板块

## 概述

移除网站末尾的「VEX + AI 创新沙龙」板块，并新增「学员共创项目」板块，介绍 **VEX Timeline**（备赛时间轴系统）和 **VEX Structure Log**（工程结构日志）两个由 Bricks Workshop 学员与老师共创的项目。

## 目标

- 删除 [`src/components/Salon.tsx`](file:///workspace/src/components/Salon.tsx) 文件，并在 [`src/pages/Home.tsx`](file:///workspace/src/pages/Home.tsx) 中移除相关引用。
- 新建 [`src/components/StudentProjects.tsx`](file:///workspace/src/components/StudentProjects.tsx) 组件，采用「两个并排卡片 + 访问按钮」的布局，展示两个项目。
- 保持现有网站视觉语言（白色背景、Framer Motion 滚动渐入、`red→yellow→blue` 渐变文字）。

## 项目背景（用于撰写介绍文案）

### VEX Timeline
- 定位：VEX 备赛时间轴系统
- 网址：https://timeline.vexiq8009.website/
- 技术栈：纯前端 SPA（Vanilla JS） + Supabase（Auth + Postgres + Storage） + IndexedDB 离线缓存 + Service Worker
- 核心功能：用户注册/登录、个人/赛队时间轴、邀请协作、图片上传、离线 + 云端同步

### VEX Structure Log
- 定位：VEX 工程结构日志（VIQRC 工程进度管理应用）
- 网址：https://v-log.vexiq8009.website/
- 技术栈：React + TypeScript + Vite + Supabase（PostgreSQL + Auth + Storage + Realtime）
- 核心功能：队伍与成员管理、邀请码、按模块（底盘/抓手/弹射/升降/其他）记录工程进度、上传照片、评分、里程碑、实时同步

## 详细改动

### 1. 编辑 [`src/pages/Home.tsx`](file:///workspace/src/pages/Home.tsx)

- 第 10 行：删除 `import Salon from '@/components/Salon';`
- 第 33 行：删除 `<Salon />`
- 在原 Salon 位置（第 33 行）添加 `<StudentProjects />` 与对应 import

### 2. 删除 [`src/components/Salon.tsx`](file:///workspace/src/components/Salon.tsx)

直接删除该文件，移除孤立组件。

### 3. 新建 [`src/components/StudentProjects.tsx`](file:///workspace/src/components/StudentProjects.tsx)

组件结构：

- `<section id="student-projects" className="py-24 sm:py-32 bg-white">`
- 顶部标题：「学员 <span 渐变>共创项目</span>」（与现有「VEX + AI 创新沙龙」标题风格保持一致，使用 `from-red-500 via-yellow-500 to-blue-500` 渐变）
- 顶部副标题：「由 Bricks Workshop 师生在 AI 主题活动中共创研发，旨在解决 VEX 实际备赛与工程管理难题，目前仍在持续迭代更新。」
- 下方 `grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8` 两张卡片：

  **卡片 1：VEX Timeline**
  - 图标：`Clock`（lucide-react）
  - 标题：VEX Timeline
  - 简介：备赛时间轴系统，支持本地 IndexedDB 离线使用与 Supabase 云端同步。提供个人/赛队时间轴、邀请协作、图片上传等功能，让备赛过程一目了然。
  - 按钮：「访问 VEX Timeline」→ `https://timeline.vexiq8009.website/`（`target="_blank" rel="noopener noreferrer"`）

  **卡片 2：VEX Structure Log**
  - 图标：`Layers`（lucide-react）
  - 标题：VEX Structure Log
  - 简介：工程结构日志，聚焦底盘、抓手机构等核心模块的迭代记录。集成队伍协作、邀请码、照片上传、里程碑与实时同步，把每一版结构改进沉淀为可追溯的工程档案。
  - 按钮：「访问 VEX Structure Log」→ `https://v-log.vexiq8009.website/`

- 卡片样式参考 [`About.tsx`](file:///workspace/src/components/About.tsx) 中的 features 卡片：白底、左侧图标、标题 + 描述 + CTA 按钮，hover 时按钮深色变化。
- 滚动入场动画沿用 `motion.div` + `initial/whileInView/viewport`，与现有组件一致。

## 关键设计决策

- **不展示 GitHub 地址**：按用户要求，GitHub 仓库地址仅作为资料收集用途，网站 UI 上不出现。
- **板块位置**：保留在原 Salon 位置（FAQ 之前），保持页面整体节奏不变。
- **文案语气**：与现有中文文案保持一致（学生、老师、共创、迭代等关键词）。
- **图标选择**：使用 `lucide-react` 中已有的 `Clock` 与 `Layers`，与项目属性贴合（时间轴、工程模块）。
- **响应式**：移动端单列堆叠、桌面端两列并排。

## 假设

- 用户提供的 `https://v-log.vexiq8009.website/` 是 VEX Structure Log 的正确线上地址（已通过 AskUserQuestion 确认）。
- 两个项目当前持续维护，按用户描述「目前正在积极地更新新的功能」会在文案中体现「持续迭代更新」字样。
- 不需要更新 [`Navbar.tsx`](file:///workspace/src/components/Navbar.tsx)，因为现有导航没有指向 Salon 的链接，且新增板块的导航锚点由用户访问时自然滚动到即可。

## 验证步骤

1. 启动开发服务器：`pnpm dev`，访问 `http://localhost:5173/`。
2. 确认页面已不再出现「VEX + AI 创新沙龙」相关文案与按钮。
3. 确认在 Gallery 板块之后、FAQ 板块之前出现「学员共创项目」板块，且两张卡片正确并排显示。
4. 点击「访问 VEX Timeline」按钮，在新标签页正确打开 `https://timeline.vexiq8009.website/`。
5. 点击「访问 VEX Structure Log」按钮，在新标签页正确打开 `https://v-log.vexiq8009.website/`。
6. 在浏览器控制台确认无报错（`console` 干净）。
7. 移动端模拟（Chrome DevTools device toolbar）下卡片正确单列堆叠，无溢出。
8. 运行 `pnpm build` 确认 TypeScript 编译通过、产物构建成功。
9. 运行 `pnpm lint` 确认无 ESLint 报错。
10. 滚动到新板块，确认滚动渐入动画正常触发。
