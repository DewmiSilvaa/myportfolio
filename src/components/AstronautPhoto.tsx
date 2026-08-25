const PHOTO_URL =
  '/public/dewmi.jpeg';

/** Stylized astronaut portrait card with HUD framing. */
export default function AstronautPhoto() {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Outer frame */}
      <div className="relative rounded-2xl overflow-hidden border border-nebula-400/30 glow-nebula">
        {/* Scan line effect */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="absolute left-0 right-0 h-1 bg-nebula-400/30 animate-scan" />
        </div>

        <img
          src={PHOTO_URL}
          alt="Astronaut in space suit"
          className="w-full aspect-[3/4] object-cover"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />

        {/* HUD label */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="font-display text-xs text-nebula-400 tracking-[0.25em] mb-1">
            ID — DS-001
          </div>
          <div className="font-display font-bold text-xl text-space-50">
            K.P. DEWMI AMANDA SILVA
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-stardust-400/60 rounded-tr-xl" />
      <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-nebula-400/60 rounded-bl-xl" />

      {/* Floating badge */}
      <div className="absolute -bottom-5 -right-5 glass-strong rounded-full px-4 py-2 animate-float">
        <span className="font-display text-xs tracking-widest text-stardust-400">CONTENT CREATOR · SLIIT GRAD</span>
      </div>
    </div>
  );
}
