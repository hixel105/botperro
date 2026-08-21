import { motion } from 'framer-motion';
import { Check, Minus, Sparkles } from 'lucide-react';
import { COMPARISON } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Comparison() {
  return (
    <section id="comparacion" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-violetx-500/30 bg-violetx-500/10 px-4 py-1.5 text-xs font-semibold text-violetx-400">
            Comparación
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
            Free vs <span className="gradient-text-gold">Premium</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl glass">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
              <div className="px-4 py-4 text-sm font-semibold text-gray-300 sm:px-6">
                Característica
              </div>
              <div className="px-4 py-4 text-center text-sm font-semibold text-gray-300 sm:px-6">
                Free
              </div>
              <div className="relative px-4 py-4 text-center text-sm font-bold text-gold-300 sm:px-6">
                <Sparkles className="absolute right-3 top-3 hidden h-4 w-4 text-gold-400/50 sm:block" />
                Premium
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`grid grid-cols-3 items-center ${
                  i !== COMPARISON.length - 1
                    ? 'border-b border-white/5'
                    : ''
                } transition-colors hover:bg-white/[0.03]`}
              >
                <div className="px-4 py-4 text-sm font-medium text-gray-200 sm:px-6">
                  {row.feature}
                </div>
                <div className="px-4 py-4 text-center text-sm text-gray-400 sm:px-6">
                  {row.free === '✓' ? (
                    <Check className="mx-auto h-4 w-4 text-brand-400" />
                  ) : row.free === '—' ? (
                    <Minus className="mx-auto h-4 w-4 text-gray-600" />
                  ) : (
                    row.free
                  )}
                </div>
                <div className="px-4 py-4 text-center text-sm font-medium text-white sm:px-6">
                  {row.premium === '✓' ? (
                    <Check className="mx-auto h-4 w-4 text-gold-400" />
                  ) : row.premium === '—' ? (
                    <Minus className="mx-auto h-4 w-4 text-gray-600" />
                  ) : (
                    <span className="text-gold-300">{row.premium}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
