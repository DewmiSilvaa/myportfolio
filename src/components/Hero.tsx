import { lazy, Suspense } from 'react';
import { Rocket, Sparkles, ArrowDown, Download } from 'lucide-react';

const HeroScene = lazy(() => import('./HeroScene'));

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-space-950">
      {/* 3D Canvas — full background */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-nebula-400/30 border-t-nebula-400 rounded-full animate-spin" />
            </div>
          }
        >
          <HeroScene />
        </Suspense>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid z-[1] pointer-events-none" />

      {/* Vignette gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-950/60 via-transparent to-space-950 z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-space-950/80 via-transparent to-transparent z-[2] pointer-events-none" />

      {/* HUD corner brackets */}
      <div className="absolute top-24 left-6 md:left-12 z-10 pointer-events-none">
        <div className="w-8 h-8 border-l-2 border-t-2 border-nebula-400/50" />
      </div>
      <div className="absolute top-24 right-6 md:right-12 z-10 pointer-events-none">
        <div className="w-8 h-8 border-r-2 border-t-2 border-nebula-400/50" />
      </div>
      <div className="absolute bottom-24 left-6 md:left-12 z-10 pointer-events-none">
        <div className="w-8 h-8 border-l-2 border-b-2 border-nebula-400/50" />
      </div>
      <div className="absolute bottom-24 right-6 md:right-12 z-10 pointer-events-none">
        <div className="w-8 h-8 border-r-2 border-b-2 border-nebula-400/50" />
      </div>

      {/* HUD telemetry top-right */}
      <div className="absolute top-24 right-16 md:right-24 z-10 pointer-events-none hidden lg:block">
        <div className="font-display text-xs text-nebula-400/70 tracking-widest space-y-1 text-right">
          <p>SYS // ONLINE</p>
          <p className="text-space-300">O2: 98.2%</p>
          <p className="text-space-300">TEMP: 21°C</p>
          <p className="text-space-300">ALT: 408km</p>
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-stardust-400" />
          <span className="font-display text-xs tracking-[0.3em] text-nebula-400 uppercase">
            Content Creator · Interactive Media
          </span>
        </div>

        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-space-50">DEWMI</span>
          <span className="block text-gradient">SILVA</span>
        </h1>

        <p className="mt-8 max-w-xl text-space-200 text-lg md:text-xl leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A creative content creator and interactive media specialist turning
          ideas into engaging digital experiences, stories, and visual content.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-nebula-500 text-space-950 font-semibold tracking-wide hover:bg-nebula-400 transition-all glow-nebula"
          >
            <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            Explore My Work
          </a>
          <a
            href="/public/dewmisilva.pdf"
            download="Dewmi_Silva_CV.pdf"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-space-500/50 text-space-100 hover:border-stardust-400 hover:text-stardust-400 transition-all font-medium tracking-wide"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap gap-8 md:gap-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '3+', label: 'Years of Study' },
            { value: '2D', label: 'Animations Created' },
            { value: '8+', label: 'Creative Tools' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl md:text-4xl text-space-50">{s.value}</div>
              <div className="font-body text-xs uppercase tracking-widest text-space-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-display text-xs tracking-widest text-space-400 uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-nebula-400 animate-bounce" />
      </div>
    </section>
  );
}
