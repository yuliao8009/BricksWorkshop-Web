import { motion } from 'framer-motion';
import { Clock, Layers, ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: Clock,
    title: 'VEX Timeline',
    description:
      '备赛时间轴系统，支持本地 IndexedDB 离线使用与 Supabase 云端同步。提供个人/赛队时间轴、邀请协作、图片上传等功能，让备赛过程一目了然。',
    href: 'https://timeline.vexiq8009.website/',
    cta: '访问 VEX Timeline',
  },
  {
    icon: Layers,
    title: 'VEX Structure Log',
    description:
      '工程结构日志，聚焦底盘、抓手机构等核心模块的迭代记录。集成队伍协作、邀请码、照片上传、里程碑与实时同步，把每一版结构改进沉淀为可追溯的工程档案。',
    href: 'https://v-log.vexiq8009.website/',
    cta: '访问 VEX Structure Log',
  },
];

export default function StudentProjects() {
  return (
    <section id="student-projects" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            学员<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">共创项目</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-3xl mx-auto">
            由 Bricks Workshop 师生在 AI 主题活动中共创研发，旨在解决 VEX 实际备赛与工程管理难题，目前仍在持续迭代更新。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors duration-300"
            >
              <div className="mb-6">
                <project.icon className="w-8 h-8 text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg text-zinc-500 font-light leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors duration-300 self-start group/btn shadow-sm"
              >
                {project.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
