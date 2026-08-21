import { motion } from 'framer-motion';
import { Check, Dog, Sparkles } from 'lucide-react';
import { LINKS, FREE_FEATURES, PREMIUM_FEATURES } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Plans() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* FREE */}
          <div id="free">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl glass p-8">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-300">
                    <Dog className="h-3.5 w-3.5" />
                    FREE
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    Bot Perro Free
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Protección esencial para tu comunidad.
                  </p>
                </div>
                <ul className="space-y-3">
                  {FREE_FEATURES.map((feat) => (
                    <li key={feat.text} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500/15">
                        <Check className="h-3 w-3 text-brand-300" />
                      </span>
                      <span className="text-sm text-gray-300">{feat.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={LINKS.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 w-full"
                >
                  <Dog className="h-5 w-5" />
                  Invitar gratis
                </a>
              </div>
            </Reveal>
          </div>

          {/* PREMIUM */}
          <div id="premium">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl p-[1.5px]"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400 via-violetx-500 to-brand-500 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Glow */}
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gold-500/15 blur-2xl transition-opacity duration-500 group-hover:bg-gold-500/25" />

                <div className="relative h-full overflow-hidden rounded-[22px] bg-ink-900/90 p-8 backdrop-blur-xl">
                  {/* Shimmer sweep */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/5 to-transparent bg-[length:200%_100%] animate-shimmer" />

                  <div className="relative mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-bold text-gold-300">
                      <Sparkles className="h-3.5 w-3.5" />
                      PREMIUM
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-white">
                      Bot Perro{' '}
                      <span className="gradient-text-gold">Premium</span>
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Más protección. Más control. Más posibilidades.
                    </p>
                  </div>

                  <ul className="relative space-y-3">
                    {PREMIUM_FEATURES.map((feat) => (
                      <li key={feat.text} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                            feat.highlight
                              ? 'bg-gold-400/20'
                              : 'bg-white/10'
                          }`}
                        >
                          <Check
                            className={`h-3 w-3 ${
                              feat.highlight ? 'text-gold-300' : 'text-white'
                            }`}
                          />
                        </span>
                        <span
                          className={`text-sm ${
                            feat.highlight
                              ? 'font-medium text-white'
                              : 'text-gray-300'
                          }`}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={LINKS.premium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold relative mt-8 w-full"
                  >
                    Comprar Premium
                  </a>
                  <p className="relative mt-3 text-center text-xs text-gray-500">
                    Compra únicamente mediante la tienda oficial de Alyvex.
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
