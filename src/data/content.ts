import {
  Shield,
  Bomb,
  Ban,
  Link2,
  Bot,
  ScrollText,
  Settings,
  Lock,
  type LucideIcon,
} from 'lucide-react';

export const LINKS = {
  invite: 'https://discord.com/oauth2/authorize?client_id=1461074832212099173',
  premium: 'https://alyvex.tip4serv.com/',
  support: 'https://dc.gg/alyvex',
} as const;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'Anti-Raid',
    description: 'Detecta y responde ante ataques coordinados.',
    accent: 'from-brand-500/20 to-brand-700/5',
  },
  {
    icon: Bomb,
    title: 'Anti-Nuke',
    description: 'Protección contra acciones destructivas masivas.',
    accent: 'from-red-500/20 to-red-700/5',
  },
  {
    icon: Ban,
    title: 'Anti-Spam',
    description: 'Mantén tu servidor libre de spam.',
    accent: 'from-violetx-500/20 to-violetx-700/5',
  },
  {
    icon: Link2,
    title: 'Anti-Links',
    description: 'Control y protección frente a enlaces no permitidos.',
    accent: 'from-emerald-500/20 to-emerald-700/5',
  },
  {
    icon: Bot,
    title: 'Anti-Bot',
    description: 'Detecta comportamientos sospechosos.',
    accent: 'from-amber-500/20 to-amber-700/5',
  },
  {
    icon: ScrollText,
    title: 'Logs',
    description: 'Registra los eventos importantes del servidor.',
    accent: 'from-sky-500/20 to-sky-700/5',
  },
  {
    icon: Settings,
    title: 'Moderación',
    description: 'Herramientas completas para administrar tu comunidad.',
    accent: 'from-brand-400/20 to-brand-600/5',
  },
  {
    icon: Lock,
    title: 'Seguridad',
    description: 'Configuración de protección adaptable a cada servidor.',
    accent: 'from-violetx-400/20 to-violetx-600/5',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: '24/7', label: 'Protección' },
  { value: 'FREE', label: 'Plan gratuito' },
  { value: 'PREMIUM', label: 'Funciones avanzadas' },
  { value: '🐶', label: 'Siempre alerta' },
];

export interface PlanFeature {
  text: string;
  highlight?: boolean;
}

export const FREE_FEATURES: PlanFeature[] = [
  { text: 'Moderación básica' },
  { text: 'Anti-Spam' },
  { text: 'Anti-Links' },
  { text: 'Anti-Raid básico' },
  { text: 'Logs' },
  { text: 'Sistema de advertencias' },
  { text: 'Herramientas administrativas' },
  { text: 'Configuración básica' },
];

export const PREMIUM_FEATURES: PlanFeature[] = [
  { text: 'Anti-Raid avanzado', highlight: true },
  { text: 'Anti-Nuke avanzado', highlight: true },
  { text: 'Anti-Spam avanzado', highlight: true },
  { text: 'Anti-Links avanzado', highlight: true },
  { text: 'Anti-Bot avanzado', highlight: true },
  { text: 'Logs avanzados', highlight: true },
  { text: 'Configuración avanzada', highlight: true },
  { text: 'Funciones exclusivas Premium', highlight: true },
  { text: 'Acceso anticipado a nuevas funciones', highlight: true },
  { text: 'Soporte prioritario', highlight: true },
];

export interface ComparisonRow {
  feature: string;
  free: string;
  premium: string;
}

export const COMPARISON: ComparisonRow[] = [
  { feature: 'Moderación', free: '✓', premium: '✓ Avanzada' },
  { feature: 'Anti-Raid', free: 'Básico', premium: 'Avanzado' },
  { feature: 'Anti-Nuke', free: 'Básico', premium: 'Avanzado' },
  { feature: 'Anti-Spam', free: '✓', premium: 'Avanzado' },
  { feature: 'Anti-Links', free: '✓', premium: 'Avanzado' },
  { feature: 'Anti-Bot', free: 'Básico', premium: 'Avanzado' },
  { feature: 'Logs', free: '✓', premium: 'Avanzados' },
  { feature: 'Funciones exclusivas', free: '—', premium: '✓' },
  { feature: 'Soporte prioritario', free: '—', premium: '✓' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: '¿Bot Perro es gratis?',
    answer: 'Sí. Bot Perro cuenta con una versión Free y una Premium.',
  },
  {
    question: '¿Qué incluye Premium?',
    answer:
      'Funciones avanzadas y exclusivas para mejorar la protección y administración del servidor.',
  },
  {
    question: '¿Dónde compro Premium?',
    answer: 'En la tienda oficial de Alyvex.',
  },
  {
    question: '¿Dónde puedo obtener soporte?',
    answer: 'En el Discord de soporte de Alyvex.',
  },
  {
    question: '¿Cómo invito Bot Perro?',
    answer:
      'Pulsa cualquier botón de "Invitar Bot Perro" de la página.',
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Free', href: '#free' },
  { label: 'Premium', href: '#premium' },
  { label: 'Comparación', href: '#comparacion' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Soporte', href: '#soporte' },
];
