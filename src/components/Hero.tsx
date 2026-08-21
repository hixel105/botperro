import { motion } from 'framer-motion';
import { Dog, Gem, ShieldCheck, ArrowRight } from 'lucide-react';
import { LINKS, STATS } from '@/data/content';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-20 sm:px-6"
    >
      {/* Floating shield emblem behind */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative h-[420px] w-[420px] sm:h-[560px] sm:w-[560px]">
          <div className="absolute inset-0 rounded-full bg-brand-500/10 blur-[100px]" />
          <div className="absolute inset-12 rounded-full border border-white/5" />
          <div className="absolute inset-24 rounded-full border border-white/5" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-400 shadow-glow" />
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violetx-400 shadow-glow-violet" />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          FREE + PREMIUM
        </motion.div>

        {/* Logo + title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violetx-600 shadow-glow">
            <Dog className="h-8 w-8 text-white" />
          </span>
          <span className="font-display text-2xl font-bold text-white sm:text-3xl">
            Bot Perro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Tu servidor.
          <br />
          <span className="gradient-text">Nuestro instinto de protección.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Bot Perro es un bot de Discord diseñado para proteger, moderar y
          mejorar tu comunidad con herramientas potentes, rápidas y fáciles de
          configurar.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={LINKS.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <Dog className="h-5 w-5" />
            Invitar Bot Perro
          </a>
          <a
            href={LINKS.premium}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            <Gem className="h-5 w-5" />
            Obtener Premium
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <ShieldCheck className="h-4 w-4 text-brand-400" />
          Protección en tiempo real para tu comunidad
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="glass rounded-2xl px-4 py-6 text-center"
            >
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#caracteristicas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-300"
        >
          Descubre más
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4 rotate-90" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
