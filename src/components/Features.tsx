import { motion } from 'framer-motion';
import { FEATURES } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Features() {
  return (
    <section id="caracteristicas" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300">
            Características
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
            Todo lo que necesitas para mantener tu servidor{' '}
            <span className="gradient-text">protegido</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6"
              >
                {/* Glow on hover */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${f.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:ring-brand-400/40">
                    <f.icon className="h-6 w-6 text-brand-300 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
