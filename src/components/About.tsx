import { Palette, MonitorPlay, GraduationCap, MapPin } from 'lucide-react';
import AstronautPhoto from './AstronautPhoto';

const facts = [
  { icon: Palette, label: 'Creative Focus', value: 'Content & Visual Design' },
  { icon: MonitorPlay, label: 'Specialization', value: 'Interactive Media' },
  { icon: GraduationCap, label: 'Education', value: 'BSc (Hons) in IT' },
  { icon: MapPin, label: 'Based In', value: 'Colombo 10, Sri Lanka' },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad bg-space-950 bg-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-nebula-400 tracking-[0.3em]">01 /</span>
          <span className="font-display text-sm text-space-400 tracking-[0.3em] uppercase">About the Creator</span>
          <div className="flex-1 h-px bg-gradient-to-r from-space-600 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait card */}
          <div className="relative animate-fade-in-up">
            <AstronautPhoto />
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-space-50 leading-tight mb-6">
              Designing the <span className="text-gradient">signal</span> between ideas.
            </h2>
            <div className="space-y-4 text-space-200 text-lg leading-relaxed font-body">
              <p>
                I am a Content Creator with a BSc (Hons) in Information
                Technology, specializing in Interactive Media from SLIIT. I enjoy
                turning ideas into clear, engaging, and visually memorable content.
              </p>
              <p>
                My experience includes social media content creation, 2D
                animation, voice-over reels, media planning, and client
                communication through my work at Think Tank Technologies (PVT) Ltd.
              </p>
              <p>
                I work comfortably across design, editing, and interactive tools,
                with a curious mindset and a focus on reliable, high-quality
                delivery.
              </p>
            </div>

            {/* Fact grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="glass rounded-xl p-5 hover:border-nebula-400/50 transition-colors">
                  <f.icon className="w-5 h-5 text-nebula-400 mb-3" />
                  <div className="text-xs uppercase tracking-widest text-space-400 mb-1">{f.label}</div>
                  <div className="font-display font-medium text-space-50">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
