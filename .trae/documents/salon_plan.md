# VEX+AI 企业活动沙龙板块添加计划

## 1. 现状分析
用户希望在网站中新增一个介绍“VEX+AI主题企业活动沙龙”的独立板块，并提供一个跳转按钮链接到指定的外部网站 (`https://salotto.vexiq8009.website/`)。
当前网站的结构在 `src/pages/Home.tsx` 中，`Gallery` (课堂瞬间) 组件下方紧接着是 `FAQ` 组件。

## 2. 目标与预期结果
- **创建新组件**: `src/components/Salon.tsx`。
- **设计风格**: 采用图文结合的排版设计（PC端左右分栏，移动端上下堆叠），与现有网站的现代、极简风格保持一致（使用 Tailwind CSS 和 framer-motion 添加动画）。
- **页面布局**: 将 `Salon` 组件引入到 `Home.tsx` 中，并放置在 `Gallery` 之后，`FAQ` 之前。
- **功能**: 添加一个醒目的跳转按钮（Button），点击后在新标签页打开沙龙外部链接。

## 3. 具体修改步骤

### 3.1 创建 `src/components/Salon.tsx`
- **引入依赖**: 引入 `framer-motion` 用于滚动进入动画，引入 `lucide-react` 中的图标（如 `ArrowRight` 或 `ExternalLink`）用于按钮。
- **排版结构**:
  - 外层容器: `section` 标签，包含适当的上下内边距（`py-24 sm:py-32`）和背景色（如 `bg-zinc-50` 或 `bg-white` 视情况而定，由于 Gallery 是 `bg-zinc-50`，FAQ 是 `bg-white`，新板块可以使用 `bg-white` 或带有一点渐变/纹理背景来突出）。
  - 内部分为左右两列（在大屏幕上）：
    - **左侧（或文字侧）**: 标题“VEX + AI 企业活动沙龙”，一段介绍性文案（例如：“探索机器人与人工智能的创新融合。我们为企业提供定制化的科技沙龙与团建活动，在动手实践中激发团队创造力与协作精神。”），以及一个带有链接 `https://salotto.vexiq8009.website/` 的 `a` 标签按钮（具有悬停效果）。
    - **右侧（或图片侧）**: 放置一个占位图片（可以使用现有素材，或提供一个友好的灰色占位区块供后续替换）。

### 3.2 修改 `src/pages/Home.tsx`
- **导入新组件**: `import Salon from '@/components/Salon';`
- **渲染位置**: 
  ```tsx
  <Gallery />
  <Salon />
  <FAQ />
  ```

## 4. 假设与决策
- **文案与图片**: 采用优质的占位文案，图片将使用现有图库中的图片或圆角占位框，方便用户后期替换。
- **链接行为**: 跳转按钮将配置 `target="_blank" rel="noopener noreferrer"` 以确保在新标签页安全打开外部链接。

## 5. 验证步骤
- 保存文件后，预期开发服务器将自动热更新。
- 检查首页在“课堂瞬间”下方是否正确显示了新的沙龙板块。
- 测试跳转按钮，确保能正确打开 `https://salotto.vexiq8009.website/`。
- 检查在移动端和桌面端的响应式排版是否正常。