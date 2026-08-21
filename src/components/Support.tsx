import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { LINKS } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Support() {
  return (
    <section id="soporte" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass p-10 text-center sm:p-14">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl" />

            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violetx-600 shadow-glow">
                <MessageCircle className="h-7 w-7 text-white" />
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
                ¿Necesitas ayuda?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
                "Nuestro equipo está disponible para ayudarte con Bot Perro,
                Premium y cualquier problema relacionado con el bot."
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <motion.a
                  href={LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ir al soporte
                </motion.a>
                <motion.a
                  href={LINKS.premium}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-gold w-full sm:w-auto"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Ver Premium
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
