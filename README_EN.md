
# BricksWorkshop | Official Showcase Website

&gt; [中文版](README.md)

&lt;div align="center"&gt;

[![React Version](https://img.shields.io/badge/React-18.3.1-61dafb?style=flat-square&amp;logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=flat-square&amp;logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?style=flat-square&amp;logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06b6d4?style=flat-square&amp;logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-ff6b6b?style=flat-square)](https://www.framer.com/motion)
[![Cloudflare Workers](https://img.shields.io/badge/Deployed_on-Cloudflare-f38020?style=flat-square&amp;logo=cloudflare)](https://developers.cloudflare.com/workers)

[![GitHub Last Commit](https://img.shields.io/github/last-commit/yourusername/bricksworkshop?style=flat-square)](https://github.com/yourusername/bricksworkshop)
[![GitHub License](https://img.shields.io/github/license/yourusername/bricksworkshop?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

&lt;/div&gt;

---

## 👨‍💻 About the Author

**Middle School Developer | Multi-Year VEX Robotics Competitor**

Hello! I'm a middle school student passionate about programming and robotics, with several years of experience in VEX Robotics competitions. Through VEX, I've systematically learned mechanical design, programming strategies, autonomous program development, and teamwork - experiences that have fueled my enthusiasm for technology.

This project is a practical combination of my classroom learning and competition experience. As the official showcase website for BricksWorkshop, it not only presents our educational philosophy but also serves as a testament to my personal technical growth.

---

## 🌟 About BricksWorkshop

BricksWorkshop is the first professional VEX Academy in Northwest China, located on the beautiful Hanzhong Riverside Road.

### Educational Philosophy
- **Focus**: Specialized in VEX robotics education, providing systematic and professional curriculum
- **Gamified Learning**: Stimulating interest through engaging projects and competitions
- **All-Age Coverage**: From early childhood with VEX 123/GO to advanced competition with VEX IQ/V5

---

## 🚀 Tech Stack

### Core Frameworks
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | Frontend UI Framework |
| TypeScript | 5.8.3 | Type-safe JavaScript superset |
| Vite | 6.3.5 | Next-generation frontend build tool |

### Styling &amp; Interactions
- **Tailwind CSS 3.4.17** - Atomic CSS framework for responsive design
- **Framer Motion 12.38.0** - Smooth animations and parallax scrolling
- **clsx + tailwind-merge** - Efficient class name management and merging

### Deployment &amp; Tooling
- **Cloudflare Workers** - Edge deployment for global fast access
- **ESLint** - Code quality checking
- **@typescript-eslint** - TypeScript-specific lint rules

---

## 📁 Project Structure

```
bricksworkshop/
├── index.html              # HTML entry file
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── wrangler.jsonc          # Cloudflare Wrangler configuration
└── src/
    ├── components/         # React components
    ├── pages/              # Page components
    ├── hooks/              # Custom Hooks
    ├── utils/              # Utility functions
    ├── styles/             # Style files
    └── main.tsx            # Application entry
```

---

## 🛠️ Quick Start

### Prerequisites
- Node.js &gt;= 18
- pnpm &gt;= 8 (recommended) or npm &gt;= 9

### Install Dependencies

```bash
# Using pnpm (recommended, faster and space-efficient)
pnpm install

# Or using npm
npm install
```

### Local Development

```bash
pnpm dev
```

The development server will start at `http://localhost:5173`.

### Build for Production

```bash
pnpm build
```

The build output will be in the `dist/` directory.

### Preview Production Build Locally

```bash
pnpm preview
```

### Deploy to Cloudflare

```bash
pnpm deploy
```

---

## 🎯 Core Website Sections

### 1. Hero Section
Visually striking brand main visual with core promotional slogan, establishing first impressions.

### 2. Statistics Section
Intuitive data visualization presenting BricksWorkshop's teaching achievements and professional expertise.

### 3. About Section
In-depth interpretation of our "Focus, Gamified Learning" philosophy and the unique advantages of VEX robotics education.

### 4. Curriculum Section
Comprehensive presentation of the full-age VEX robotics curriculum matrix, from early childhood to advanced competition.

### 5. Pathway Section
Customized technology learning and domestic/international competition progression roadmap for students.

### 6. Campus &amp; Gallery
Full showcase of the first-class teaching environment at Hanzhong Riverside Road campus, classroom highlights, and student achievements.

### 7. FAQ Section
Thoughtful answers to common questions from parents about robotics learning planning and course enrollment.

---

## 🏆 VEX Competition Experience

### My Competition Journey
1. **Getting Started** - First exposure to VEX robotics, learning basic programming and mechanical structures
2. **First Competition** - Participating in regional competitions, gaining valuable teamwork experience
3. **Skill Development** - Deep diving into PID control, autonomous strategies, and mechanical design optimization
4. **National Competition** - Competing with top teams nationwide, broadening horizons

### Competition Skill Stack
- **Programming**: C/C++ (PROS), Python, autonomous program design
- **Mechanics**: Linkages, gear trains, structural optimization
- **Teamwork**: Division of labor, problem diagnosis, quick fixes

---

## 📖 Young Programmer Learning Resources

If you're also a young person interested in programming and robotics, here are my learning recommendations:

### Recommended Learning Path
1. **Scratch** - Introduction to programming thinking (ages 8-12)
2. **Python** - Learning programming logic and data structures
3. **C/C++** - Deep dive into low-level programming (foundation for VEX)
4. **Web Development** - Learning modern frameworks like React/Vue

### VEX Related Resources
- [VEX Robotics Official Website](https://www.vexrobotics.com)
- [PROS Kernel](https://pros.cs.purdue.edu) - Open source firmware for V5
- [VEX Forum](https://www.vexforum.com) - World's largest VEX community

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

&lt;div align="center"&gt;

**Made with ❤️ by a middle school student &amp; VEX competitor**

&copy; 2024 BricksWorkshop. All rights reserved.

&lt;/div&gt;

