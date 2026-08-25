import { PenTool, Video, Sparkles, Megaphone } from 'lucide-react';

const skillGroups = [
  {
    icon: PenTool,
    title: 'Design & Visuals',
    skills: [
      { name: 'Logo Design', level: 88 },
      { name: '2D Animation', level: 82 },
      { name: 'Canva', level: 95 },
      { name: 'Adobe Photoshop', level: 78 },
    ],
  },
  {
    icon: Video,
    title: 'Content Production',
    skills: [
      { name: 'Voice-over Reels', level: 85 },
      { name: 'Video Editing', level: 80 },
      { name: 'Premiere Pro', level: 75 },
      { name: 'Soundtrack Strategies', level: 70 },
    ],
  },
  {
    icon: Sparkles,
    title: 'Interactive Media',
    skills: [
      { name: 'UI / UX Design', level: 80 },
      { name: 'Figma', level: 82 },
      { name: 'Interactive Storytelling', level: 78 },
      { name: 'Prototyping', level: 75 },
    ],
  },
  {
    icon: Megaphone,
    title: 'Strategy & Comms',
    skills: [
      { name: 'Social Media Strategy', level: 85 },
      { name: 'Client Communication', level: 88 },
      { name: 'Digital Marketing', level: 75 },
      { name: 'Media Planning', level: 78 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-space-200 text-sm font-body">{name}</span>
        <span className="font-display text-xs text-nebula-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-space-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-nebula-500 to-nebula-400 transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad bg-space-900/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-nebula-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-nebula-400 tracking-[0.3em]">04 /</span>
          <span className="font-display text-sm text-space-400 tracking-[0.3em] uppercase">Capability Matrix</span>
          <div className="flex-1 h-px bg-gradient-to-r from-space-600 to-transparent" />
        </div>

        <h2 className="font-display font-bold text-3xl md:text-5xl text-space-50 mb-4">
          Calibrated for <span className="text-gradient-mars">creativity</span>.
        </h2>
        <p className="text-space-300 text-lg mb-16 max-w-2xl">
          Every skill shaped through real projects, client work, and hands-on creative production.
        </p>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="glass rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-nebula-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-nebula-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-space-50">{g.title}</h3>
                </div>
                {g.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
