import { Dog, MessageCircle, ShoppingBag, LifeBuoy } from 'lucide-react';
import { LINKS } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violetx-600 shadow-glow">
                <Dog className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Bot Perro
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Seguridad y moderación para comunidades de Discord.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Enlaces</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Características', href: '#caracteristicas' },
                { label: 'Premium', href: '#premium' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Soporte', href: '#soporte' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINKS.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Dog className="h-4 w-4 text-brand-400" />
                  Discord: Invitar Bot Perro
                </a>
              </li>
              <li>
                <a
                  href={LINKS.premium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <ShoppingBag className="h-4 w-4 text-gold-400" />
                  Tienda: Alyvex
                </a>
              </li>
              <li>
                <a
                  href={LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <LifeBuoy className="h-4 w-4 text-violetx-400" />
                  Soporte: Alyvex
                </a>
              </li>
              <li>
                <a
                  href={LINKS.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  Discord de soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center text-xs text-gray-500">
            © 2026 Bot Perro. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-center text-xs text-gray-600">
            Bot Perro no está afiliado oficialmente con Discord.
          </p>
        </div>
      </div>
    </footer>
  );
}
