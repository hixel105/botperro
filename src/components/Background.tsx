export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Base radial brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(31,72,245,0.18),_transparent_55%)]" />
      {/* Violet glow bottom-right */}
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-violetx-600/10 blur-[120px]" />
      {/* Gold glow top-left subtle */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-500/5 blur-[120px]" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
