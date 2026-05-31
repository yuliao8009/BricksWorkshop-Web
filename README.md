<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BricksWorkshop - 卓越科技官方展示网站</title>
  <style>
    :root {
      --primary: #6366f1;
      --primary-dark: #4f46e5;
      --bg: #ffffff;
      --bg-secondary: #f8fafc;
      --text: #1e293b;
      --text-secondary: #64748b;
      --border: #e2e8f0;
      --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .header {
      text-align: center;
      padding: 3rem 0;
      border-bottom: 1px solid var(--border);
    }

    .lang-switch {
      position: fixed;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 0.5rem;
      background: var(--bg-secondary);
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      z-index: 100;
    }

    .lang-btn {
      padding: 0.5rem 1rem;
      border: none;
      background: transparent;
      cursor: pointer;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: all 0.2s;
    }

    .lang-btn:hover {
      background: var(--primary);
      color: white;
    }

    .lang-btn.active {
      background: var(--primary);
      color: white;
    }

    .logo {
      font-size: 2.5rem;
      font-weight: 800;
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    .developer-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #92400e;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      margin: 0.5rem;
    }

    .vex-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      color: #1e40af;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      margin: 0.5rem;
    }

    .badges {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1.5rem 0;
    }

    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .badge-primary { background: #e0e7ff; color: #4338ca; }
    .badge-success { background: #d1fae5; color: #047857; }
    .badge-warning { background: #fef3c7; color: #b45309; }
    .badge-info { background: #dbeafe; color: #1d4ed8; }

    .section {
      padding: 2rem 0;
      border-bottom: 1px solid var(--border);
    }

    .section:last-child {
      border-bottom: none;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    h2 .icon {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 1.5rem 0 0.75rem;
      color: var(--text);
    }

    p {
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .tech-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .tech-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--bg-secondary);
      border-radius: 0.5rem;
      border: 1px solid var(--border);
    }

    .tech-icon {
      width: 2rem;
      height: 2rem;
      border-radius: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .tech-name {
      font-weight: 600;
      font-size: 0.875rem;
    }

    .tech-desc {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .feature-card {
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: 0.75rem;
      border: 1px solid var(--border);
      transition: all 0.3s;
    }

    .feature-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    .feature-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .feature-title {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .feature-desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .quick-start {
      background: var(--bg-secondary);
      border-radius: 0.75rem;
      padding: 1.5rem;
      margin: 1rem 0;
    }

    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
      font-size: 0.875rem;
      overflow-x: auto;
      margin: 0.5rem 0;
    }

    .code-block .comment { color: #64748b; }
    .code-block .command { color: #38bdf8; }
    .code-block .string { color: #a5f3fc; }

    .timeline {
      margin: 1rem 0;
      padding-left: 2rem;
      border-left: 2px solid var(--primary);
    }

    .timeline-item {
      position: relative;
      padding-bottom: 1.5rem;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2rem;
      top: 0.25rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: var(--primary);
      border: 2px solid white;
      box-shadow: 0 0 0 2px var(--primary);
    }

    .timeline-date {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary);
    }

    .timeline-content {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .contact-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1rem 0;
    }

    .contact-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      color: var(--text);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s;
    }

    .contact-link:hover {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }

    .footer {
      text-align: center;
      padding: 2rem 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
      border-top: 1px solid var(--border);
      margin-top: 2rem;
    }

    .hidden {
      display: none !important;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }

      .logo {
        font-size: 2rem;
      }

      .badges {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>
  <div class="lang-switch">
    <button class="lang-btn active" data-lang="zh">中文</button>
    <button class="lang-btn" data-lang="en">English</button>
  </div>

  <div class="container">
    <!-- Header -->
    <header class="header">
      <div class="logo">🚀 BricksWorkshop</div>
      <p class="subtitle" data-lang-key="subtitle">卓越科技官方展示网站 | VEX机器人教育引领者</p>

      <div class="badges">
        <span class="developer-badge">🎓 初中开发者</span>
        <span class="vex-badge">🏆 VEX 多年参赛者</span>
        <span class="badge badge-primary">React 18</span>
        <span class="badge badge-success">TypeScript</span>
        <span class="badge badge-warning">Vite</span>
        <span class="badge badge-info">Tailwind CSS</span>
      </div>

      <div class="badges">
        <span class="badge badge-primary" data-lang-key="badge-beginner">👶 青少年开发者</span>
        <span class="badge badge-success" data-lang-key="badge-vex">🤖 机器人爱好者</span>
        <span class="badge badge-info" data-lang-key="badge-open">📂 欢迎贡献</span>
      </div>
    </header>

    <!-- About Section -->
    <section class="section">
      <h2><span class="icon">👨‍💻</span> <span data-lang-key="about-title">关于我</span></h2>

      <div data-lang-content="zh">
        <p>你好！我是<span style="font-weight: 600; color: var(--primary);">一名初中学生</span>，同时也是一名<span style="font-weight: 600; color: var(--primary);">VEX 机器人比赛的多年参赛者</span>。</p>

        <p>从接触编程的第一天起，我就被这个充满无限可能的世界所吸引。在学习机器人和参与 VEX 竞赛的过程中，我不仅掌握了编程技能，更培养了<span style="font-weight: 500;">团队协作</span>、<span style="font-weight: 500;">问题解决</span>和<span style="font-weight: 500;">创新思维</span>的能力。</p>

        <p>这个项目是我将<span style="font-weight: 600;">课堂所学</span>与<span style="font-weight: 600;">赛事经验</span>相结合的成果展示。我希望通过这个网站，不仅展示卓越科技的教育理念，也让更多人了解 VEX 机器人赛事的魅力所在。</p>
      </div>

      <div data-lang-content="en" class="hidden">
        <p>Hi there! I'm a <span style="font-weight: 600; color: var(--primary);">middle school student</span> and a <span style="font-weight: 600; color: var(--primary);">multi-year VEX Robotics competitor</span>.</p>

        <p>Since the day I started coding, I've been captivated by this world of infinite possibilities. Through learning robotics and participating in VEX competitions, I've not only mastered programming skills but also developed <span style="font-weight: 500;">teamwork</span>, <span style="font-weight: 500;">problem-solving</span>, and <span style="font-weight: 500;">creative thinking</span> abilities.</p>

        <p>This project showcases my combination of <span style="font-weight: 600;">classroom learning</span> and <span style="font-weight: 600;">competition experience</span>. I hope this website not only presents BricksWorkshop's educational philosophy but also helps more people understand the excitement of VEX Robotics competitions.</p>
      </div>
    </section>

    <!-- About Organization -->
    <section class="section">
      <h2><span class="icon">🌟</span> <span data-lang-key="org-title">关于卓越科技</span></h2>

      <div data-lang-content="zh">
        <p><strong>BricksWorkshop（卓越科技）</strong>是西北首家专业的 VEX 学苑，坐落于美丽的汉中滨江路。我们秉持"专注度、游戏化学习"的教育理念，致力于为青少年提供系统、专业、且充满乐趣的机器人科技教育体验。</p>

        <p>从低龄启蒙的 VEX 123 / GO，到高阶竞技的 VEX IQ / V5，我们为孩子们铺设了一条完整的科技成长与赛事进阶之路。</p>
      </div>

      <div data-lang-content="en" class="hidden">
        <p><strong>BricksWorkshop</strong> is the first professional VEX Academy in Northwest China, located in the beautiful Hanzhong Riverside Road. We adhere to the educational philosophy of "Focus, Gamified Learning" and are committed to providing systematic, professional, and fun robotics technology education experiences for young people.</p>

        <p>From early childhood enlightenment with VEX 123/GO to advanced competition with VEX IQ/V5, we've created a complete path of technology growth and competition progression for children.</p>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section">
      <h2><span class="icon">🛠️</span> <span data-lang-key="tech-title">技术栈</span></h2>

      <div class="tech-stack">
        <div class="tech-item">
          <div class="tech-icon" style="background: #61dafb;">⚛️</div>
          <div>
            <div class="tech-name">React 18</div>
            <div class="tech-desc" data-lang-key="tech-react">核心前端框架</div>
          </div>
        </div>
        <div class="tech-item">
          <div class="tech-icon" style="background: #3178c6;">TS</div>
          <div>
            <div class="tech-name">TypeScript</div>
            <div class="tech-desc" data-lang-key="tech-ts">类型安全开发</div>
          </div>
        </div>
        <div class="tech-item">
          <div class="tech-icon" style="background: #646d7e;">⚡</div>
          <div>
            <div class="tech-name">Vite</div>
            <div class="tech-desc" data-lang-key="tech-vite">快速构建工具</div>
          </div>
        </div>
        <div class="tech-item">
          <div class="tech-icon" style="background: #38bdf8;">🎨</div>
          <div>
            <div class="tech-name">Tailwind CSS</div>
            <div class="tech-desc" data-lang-key="tech-tailwind">响应式样式</div>
          </div>
        </div>
        <div class="tech-item">
          <div class="tech-icon" style="background: #ff6b6b;">✨</div>
          <div>
            <div class="tech-name">Framer Motion</div>
            <div class="tech-desc" data-lang-key="tech-motion">流畅动画</div>
          </div>
        </div>
        <div class="tech-item">
          <div class="tech-icon" style="background: #f97316;">☁️</div>
          <div>
            <div class="tech-name">Cloudflare Workers</div>
            <div class="tech-desc" data-lang-key="tech-cf">边缘部署</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <h2><span class="icon">✨</span> <span data-lang-key="features-title">网站特色</span></h2>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <div class="feature-title" data-lang-key="feature1-title">极简科技风设计</div>
          <div class="feature-desc" data-lang-key="feature1-desc">打破传统科技教育机构沉闷的深色调，采用大面积全白背景与彩虹风格色彩点缀</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💫</div>
          <div class="feature-title" data-lang-key="feature2-title">沉浸式交互动效</div>
          <div class="feature-desc" data-lang-key="feature2-desc">流畅的视差滚动与交互动画，为访客提供愉悦的数字浏览体验</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <div class="feature-title" data-lang-key="feature3-title">响应式适配</div>
          <div class="feature-desc" data-lang-key="feature3-desc">完美适配桌面端、平板和手机等各种设备，确保优质浏览体验</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <div class="feature-title" data-lang-key="feature4-title">极致性能</div>
          <div class="feature-desc" data-lang-key="feature4-desc">基于 Vite 的快速构建，配合 Cloudflare 全球边缘网络，实现毫秒级加载</div>
        </div>
      </div>
    </section>

    <!-- Sections Overview -->
    <section class="section">
      <h2><span class="icon">🗺️</span> <span data-lang-key="sections-title">核心板块</span></h2>

      <div data-lang-content="zh">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">首屏印象 (Hero)</div>
            <div class="feature-desc">极具视觉冲击力的机构品牌主视觉与核心宣传标语</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <div class="feature-title">实力展现 (Statistics)</div>
            <div class="feature-desc">以直观的数据呈现教学成果与专业底蕴</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <div class="feature-title">教育理念 (About)</div>
            <div class="feature-desc">深入解读教学初衷及"游戏化学习"的独特优势</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <div class="feature-title">课程体系 (Curriculum)</div>
            <div class="feature-desc">详尽展示全年龄段的 VEX 机器人课程矩阵</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <div class="feature-title">成长进阶 (Pathway)</div>
            <div class="feature-desc">为学员量身定制的科技学习与国内外赛事晋级路线图</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏫</div>
            <div class="feature-title">校区风貌 (Campus)</div>
            <div class="feature-desc">全方位展示一流教学环境与学员高光时刻</div>
          </div>
        </div>
      </div>

      <div data-lang-content="en" class="hidden">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <div class="feature-title">Hero Section</div>
            <div class="feature-desc">Visually striking brand main visual with core promotional slogan</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <div class="feature-title">Statistics</div>
            <div class="feature-desc">Intuitive data presentation of teaching achievements</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💡</div>
            <div class="feature-title">Educational Philosophy</div>
            <div class="feature-desc">Deep interpretation of teaching philosophy and gamified learning advantages</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <div class="feature-title">Curriculum</div>
            <div class="feature-desc">Comprehensive VEX robotics course matrix for all ages</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <div class="feature-title">Learning Pathway</div>
            <div class="feature-desc">Customized tech learning and competition progression roadmap</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏫</div>
            <div class="feature-title">Campus & Gallery</div>
            <div class="feature-desc">First-class teaching environment and student highlights</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VEX Journey -->
    <section class="section">
      <h2><span class="icon">🏆</span> <span data-lang-key="vex-title">VEX 参赛历程</span></h2>

      <div data-lang-content="zh">
        <p>作为 VEX 赛事的多年参与者，我深知机器人竞赛的魅力与挑战。以下是我的赛事历程：</p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">初识 VEX</div>
            <div class="timeline-content">第一次接触 VEX 机器人，开启编程与机械设计之旅</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">赛事初体验</div>
            <div class="timeline-content">参加首场 VEX 比赛，收获团队合作的经验</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">技术精进</div>
            <div class="timeline-content">深入学习编程策略、机械结构与自动程序设计</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">赛场拼搏</div>
            <div class="timeline-content">多次参加区域赛、国赛，与全国各地选手切磋交流</div>
          </div>
        </div>
      </div>

      <div data-lang-content="en" class="hidden">
        <p>As a multi-year participant in VEX competitions, I understand the excitement and challenges of robotics competitions. Here's my competition journey:</p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">First Encounter</div>
            <div class="timeline-content">First contact with VEX robotics, beginning my journey in programming and mechanical design</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">First Competition</div>
            <div class="timeline-content">Participated in my first VEX competition, gaining teamwork experience</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Skill Development</div>
            <div class="timeline-content">Deep learning of programming strategies, mechanical structures, and autonomous programming</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Competition Days</div>
            <div class="timeline-content">Multiple regional and national competitions, exchanging ideas with competitors nationwide</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="section">
      <h2><span class="icon">🚀</span> <span data-lang-key="quickstart-title">快速开始</span></h2>

      <div data-lang-content="zh">
        <div class="quick-start">
          <h3>📦 安装依赖</h3>
          <div class="code-block">
            <span class="comment"># 使用 pnpm（推荐）</span><br>
            <span class="command">pnpm install</span><br><br>
            <span class="comment"># 或使用 npm</span><br>
            npm install
          </div>
        </div>

        <div class="quick-start">
          <h3>💻 本地开发</h3>
          <div class="code-block">
            <span class="command">pnpm dev</span>
          </div>
        </div>

        <div class="quick-start">
          <h3>🔨 构建部署</h3>
          <div class="code-block">
            <span class="comment"># 构建生产版本</span><br>
            <span class="command">pnpm build</span><br><br>
            <span class="comment"># 部署到 Cloudflare</span><br>
            <span class="command">pnpm deploy</span>
          </div>
        </div>
      </div>

      <div data-lang-content="en" class="hidden">
        <div class="quick-start">
          <h3>📦 Install Dependencies</h3>
          <div class="code-block">
            <span class="comment"># Using pnpm (recommended)</span><br>
            <span class="command">pnpm install</span><br><br>
            <span class="comment"># Or using npm</span><br>
            npm install
          </div>
        </div>

        <div class="quick-start">
          <h3>💻 Local Development</h3>
          <div class="code-block">
            <span class="command">pnpm dev</span>
          </div>
        </div>

        <div class="quick-start">
          <h3>🔨 Build & Deploy</h3>
          <div class="code-block">
            <span class="comment"># Build for production</span><br>
            <span class="command">pnpm build</span><br><br>
            <span class="comment"># Deploy to Cloudflare</span><br>
            <span class="command">pnpm deploy</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Journey -->
    <section class="section">
      <h2><span class="icon">📖</span> <span data-lang-key="learning-title">学习资源</span></h2>

      <div data-lang-content="zh">
        <p>如果你也是一名对编程和机器人感兴趣的青少年，以下是我的学习建议：</p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <div class="feature-title">从项目出发</div>
            <div class="feature-desc">选择一个感兴趣的项目，在实践中学习编程和机器人知识</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <div class="feature-title">参与竞赛</div>
            <div class="feature-desc">VEX 竞赛是检验学习成果、锻炼团队能力的绝佳平台</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <div class="feature-title">记录分享</div>
            <div class="feature-desc">养成写技术博客、分享项目经验的好习惯</div>
          </div>
        </div>
      </div>

      <div data-lang-content="en" class="hidden">
        <p>If you're also a young person interested in programming and robotics, here are my learning suggestions:</p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <div class="feature-title">Start with Projects</div>
            <div class="feature-desc">Choose an interesting project and learn programming and robotics through practice</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <div class="feature-title">Participate in Competitions</div>
            <div class="feature-desc">VEX competitions are excellent platforms for testing learning outcomes and building teamwork skills</div>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <div class="feature-title">Document & Share</div>
            <div class="feature-desc">Develop the habit of writing technical blogs and sharing project experiences</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section">
      <h2><span class="icon">📬</span> <span data-lang-key="contact-title">联系我</span></h2>

      <div data-lang-content="zh">
        <p>欢迎交流学习！如果你对编程、机器人或 VEX 竞赛有任何问题，欢迎联系我：</p>

        <div class="contact-links">
          <a href="#" class="contact-link">
            💻 GitHub
          </a>
          <a href="#" class="contact-link">
            📧 邮箱
          </a>
          <a href="#" class="contact-link">
            🐦 Twitter
          </a>
        </div>
      </div>

      <div data-lang-content="en" class="hidden">
        <p>Welcome to connect! If you have any questions about programming, robotics, or VEX competitions, feel free to reach out:</p>

        <div class="contact-links">
          <a href="#" class="contact-link">
            💻 GitHub
          </a>
          <a href="#" class="contact-link">
            📧 Email
          </a>
          <a href="#" class="contact-link">
            🐦 Twitter
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p data-lang-key="footer">Made with ❤️ by a middle school student & VEX competitor</p>
      <p>© 2024 BricksWorkshop. <span data-lang-key="rights">保留所有权利。</span></p>
    </footer>
  </div>

  <script>
    const langBtns = document.querySelectorAll('.lang-btn');
    const zhContents = document.querySelectorAll('[data-lang-content="zh"]');
    const enContents = document.querySelectorAll('[data-lang-content="en"]');

    function setLanguage(lang) {
      langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      zhContents.forEach(el => {
        el.classList.toggle('hidden', lang !== 'zh');
      });

      enContents.forEach(el => {
        el.classList.toggle('hidden', lang !== 'en');
      });

      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

      document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }

    const translations = {
      zh: {
        'subtitle': '卓越科技官方展示网站 | VEX机器人教育引领者',
        'badge-beginner': '👶 青少年开发者',
        'badge-vex': '🤖 机器人爱好者',
        'badge-open': '📂 欢迎贡献',
        'about-title': '关于我',
        'org-title': '关于卓越科技',
        'tech-title': '技术栈',
        'tech-react': '核心前端框架',
        'tech-ts': '类型安全开发',
        'tech-vite': '快速构建工具',
        'tech-tailwind': '响应式样式',
        'tech-motion': '流畅动画',
        'tech-cf': '边缘部署',
        'features-title': '网站特色',
        'feature1-title': '极简科技风设计',
        'feature1-desc': '打破传统科技教育机构沉闷的深色调，采用大面积全白背景与彩虹风格色彩点缀',
        'feature2-title': '沉浸式交互动效',
        'feature2-desc': '流畅的视差滚动与交互动画，为访客提供愉悦的数字浏览体验',
        'feature3-title': '响应式适配',
        'feature3-desc': '完美适配桌面端、平板和手机等各种设备，确保优质浏览体验',
        'feature4-title': '极致性能',
        'feature4-desc': '基于 Vite 的快速构建，配合 Cloudflare 全球边缘网络，实现毫秒级加载',
        'sections-title': '核心板块',
        'vex-title': 'VEX 参赛历程',
        'quickstart-title': '快速开始',
        'learning-title': '学习资源',
        'contact-title': '联系我们',
        'footer': '由初中学生 & VEX参赛者用心制作 ❤️',
        'rights': '保留所有权利。'
      },
      en: {
        'subtitle': 'BricksWorkshop Official Website | VEX Robotics Education Leader',
        'badge-beginner': '👶 Young Developer',
        'badge-vex': '🤖 Robotics Enthusiast',
        'badge-open': '📂 Open to Contributions',
        'about-title': 'About Me',
        'org-title': 'About BricksWorkshop',
        'tech-title': 'Tech Stack',
        'tech-react': 'Core Frontend Framework',
        'tech-ts': 'Type-Safe Development',
        'tech-vite': 'Fast Build Tool',
        'tech-tailwind': 'Responsive Styling',
        'tech-motion': 'Smooth Animations',
        'tech-cf': 'Edge Deployment',
        'features-title': 'Website Features',
        'feature1-title': 'Minimalist Tech Design',
        'feature1-desc': 'Breaking away from traditional dark themes, featuring a clean white background with vibrant rainbow accents',
        'feature2-title': 'Immersive Interactions',
        'feature2-desc': 'Smooth parallax scrolling and interactive animations for delightful browsing',
        'feature3-title': 'Responsive Design',
        'feature3-desc': 'Perfectly adapted for desktop, tablet, and mobile devices',
        'feature4-title': 'Ultimate Performance',
        'feature4-desc': 'Fast Vite-based builds with Cloudflare global edge network',
        'sections-title': 'Core Sections',
        'vex-title': 'VEX Competition Journey',
        'quickstart-title': 'Quick Start',
        'learning-title': 'Learning Resources',
        'contact-title': 'Contact Me',
        'footer': 'Made with ❤️ by a middle school student & VEX competitor',
        'rights': 'All rights reserved.'
      }
    };

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
  </script>
</body>
</html>
