import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Salon() {
  return (
    <section id="salon" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* 文字侧 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              企业团建新选择
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">VEX + AI</span> <br className="hidden sm:block" />
              主题企业活动沙龙
            </h2>
            <p className="text-lg sm:text-xl text-zinc-500 font-light leading-relaxed mb-8">
              探索机器人与人工智能的创新融合。我们为企业提供定制化的科技沙龙与团建活动，在动手实践中激发团队创造力、问题解决能力与协作精神。
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                '定制化科技体验，打破传统团建模式',
                '沉浸式机器人拼搭与编程竞技',
                '提升团队沟通效率与凝聚力'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://salotto.vexiq8009.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors duration-300 group"
            >
              了解更多详情
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* 图片侧 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 relative group">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20corporate%20team%20building%20event%20with%20robotics%20and%20AI%20theme%2C%20professionals%20collaborating%20around%20a%20table%2C%20bright%20and%20inspiring%20atmosphere%2C%20high%20quality%2C%20photorealistic&image_size=landscape_4_3"
                alt="VEX+AI 企业沙龙"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* 装饰元素 */}
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
            </div>
            
            {/* 浮动装饰卡片 */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-zinc-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 font-light mb-1">专属沙龙主页</div>
                  <div className="text-zinc-900 font-medium text-sm">salotto.vexiq8009.website</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
