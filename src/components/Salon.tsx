import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Salon() {
  return (
    <section id="salon" className="pt-24 pb-8 sm:pt-32 sm:pb-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 mb-6 tracking-tight">
            VEX + AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">创新沙龙</span>
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-500 font-normal leading-relaxed mb-12 max-w-3xl mx-auto">
            探索机器人与人工智能的融合新方式。在这里，老师与学生共同参与、教学相长，在开放的沙龙环境中体验前沿科技，激发创新思维与实践能力。
          </p>
          
          <a
            href="https://salotto.vexiq8009.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors duration-300 group shadow-sm"
          >
            访问沙龙主页
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
