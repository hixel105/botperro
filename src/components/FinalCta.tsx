import { motion } from 'framer-motion';
import { Dog, Gem } from 'lucide-react';
import { LINKS } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function FinalCta() {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-[1.5px]">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-brand-500 via-violetx-500 to-gold-400 opacity-70" />
            <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-ink-900/90 px-6 py-16 text-center backdrop-blur-xl sm:px-12">
              {/* Glow */}
              <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-32 right-0 h-64 w-96 rounded-full bg-violetx-600/15 blur-[100px]" />

              <div className="relative">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violetx-600 shadow-glow">
                  <Dog className="h-9 w-9 text-white" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-extrabold text-white sm:text-5xl">
                  Protege tu servidor con{' '}
                  <span className="gradient-text">Bot Perro</span>.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-gray-400 sm:text-lg">
                  "Una comunidad segura empieza con las herramientas
                  adecuadas."
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <motion.a
                    href={LINKS.invite}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Dog className="h-5 w-5" />
                    Invitar Bot Perro
                  </motion.a>
                  <motion.a
                    href={LINKS.premium}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-gold w-full sm:w-auto"
                  >
                    <Gem className="h-5 w-5" />
                    Comprar Premium
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
