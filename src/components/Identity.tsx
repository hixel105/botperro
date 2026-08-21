import { motion } from 'framer-motion';
import { ShieldCheck, Dog } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Identity() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual: minimalist guardian dog emblem */}
          <Reveal>
            <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-brand-500/10 blur-3xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 rounded-full border border-white/5"
              />

              {/* Emblem */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative grid h-48 w-48 place-items-center rounded-[40%] bg-gradient-to-br from-ink-800 to-ink-950 shadow-glow ring-1 ring-white/10 sm:h-56 sm:w-56"
              >
                <div className="absolute inset-0 rounded-[40%] bg-gradient-to-br from-brand-500/20 to-violetx-600/20" />
                {/* Minimalist geometric dog/shield */}
                <svg
                  viewBox="0 0 120 120"
                  className="relative h-32 w-32 sm:h-36 sm:w-36"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Shield outline */}
                  <path
                    d="M60 10 L100 25 V60 C100 85 80 100 60 108 C40 100 20 85 20 60 V25 Z"
                    stroke="url(#shieldGrad)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Dog head - minimalist geometric */}
                  {/* Ears */}
                  <path
                    d="M42 45 L38 32 L48 40 Z"
                    fill="url(#dogGrad)"
                  />
                  <path
                    d="M78 45 L82 32 L72 40 Z"
                    fill="url(#dogGrad)"
                  />
                  {/* Head shape */}
                  <path
                    d="M60 38 C48 38 40 48 40 58 C40 68 48 76 60 78 C72 76 80 68 80 58 C80 48 72 38 60 38 Z"
                    fill="url(#dogGrad)"
                  />
                  {/* Eyes - geometric dots, not anime */}
                  <circle cx="52" cy="56" r="2.5" fill="#05060a" />
                  <circle cx="68" cy="56" r="2.5" fill="#05060a" />
                  {/* Snout */}
                  <path
                    d="M60 64 L56 70 L64 70 Z"
                    fill="#05060a"
                    opacity="0.8"
                  />
                  <circle cx="60" cy="68" r="1.5" fill="#fcd34d" />
                  <defs>
                    <linearGradient id="shieldGrad" x1="0" y1="0" x2="120" y2="120">
                      <stop offset="0%" stopColor="#598dff" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="dogGrad" x1="40" y1="32" x2="80" y2="78">
                      <stop offset="0%" stopColor="#e5e7eb" />
                      <stop offset="100%" stopColor="#9ca3af" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-2 top-1/4 flex items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-medium text-gray-200 shadow-card"
              >
                <ShieldCheck className="h-4 w-4 text-brand-400" />
                Protección
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-2 bottom-1/4 flex items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-medium text-gray-200 shadow-card"
              >
                <Dog className="h-4 w-4 text-violetx-400" />
                Guardián
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <div>
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gray-300">
                Identidad
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                Un <span className="gradient-text">guardián</span> para tu
                comunidad.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
                "Bot Perro combina seguridad, moderación y herramientas
                avanzadas para ayudarte a mantener tu servidor bajo control."
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Confianza', 'Protección', 'Seguridad', 'Control'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
