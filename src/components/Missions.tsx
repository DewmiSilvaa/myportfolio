import { BriefcaseBusiness, Film, Megaphone, GraduationCap, Trophy } from 'lucide-react';

const missions = [
  {
    id: 'TT-25',
    name: 'Think Tank Technologies',
    date: '2025 — Present',
    role: 'Junior Social Media Content Creator',
    status: 'Current Role',
    statusColor: 'mars',
    icon: BriefcaseBusiness,
    desc: 'Create social media posts, logos, 2D animations, and voice-narrated reels. Manage client meetings, urgent requests, and reliable delivery of high-quality content.',
    stats: [{ k: 'Focus', v: 'Content' }, { k: 'Format', v: '2D' }, { k: 'Mode', v: 'Team' }],
  },
  {
    id: 'TT-24',
    name: 'Think Tank Technologies Internship',
    date: 'Apr — Oct 2025',
    role: 'Social Media Content Creator Intern',
    status: 'Completed',
    statusColor: 'nebula',
    icon: Megaphone,
    desc: 'Designed social media posts, logos, 2D animations, and voice-narrated promotional reels while consistently delivering engaging content on time.',
    stats: [{ k: 'Focus', v: 'Social' }, { k: 'Media', v: 'Mixed' }, { k: 'Work', v: 'Client' }],
  },
  {
    id: 'EDU-25',
    name: 'BSc (Hons) in Information Technology',
    date: '2021 — 2025',
    role: 'Specializing in Interactive Media · SLIIT',
    status: 'Completed',
    statusColor: 'nebula',
    icon: GraduationCap,
    desc: 'Completed a Higher National Diploma and Bachelor degree in Information Technology, specializing in Interactive Media at Sri Lanka Institute of Information Technology, Malabe.',
    stats: [{ k: 'Field', v: 'IT' }, { k: 'Track', v: 'IM' }, { k: 'Level', v: 'BSc' }],
  },
  {
    id: 'CERT-24',
    name: 'Creative & Technology Certifications',
    date: '2017 — 2024',
    role: 'Continuous Learner',
    status: 'Completed',
    statusColor: 'nebula',
    icon: Film,
    desc: 'Completed courses in Python, AI/ML, digital marketing, UX design, user experience, cybersecurity, and ethical hacking.',
    stats: [{ k: 'Python', v: '01' }, { k: 'UX', v: '02' }, { k: 'AI/ML', v: '01' }],
  },
  {
    id: 'ACH-13',
    name: 'Creative Achievements',
    date: '2011 — 2018',
    role: 'Music, Speech & Leadership',
    status: 'Awarded',
    statusColor: 'mars',
    icon: Trophy,
    desc: 'Recognized in choir, music, speech, Sinhala language and literature competitions, including national-level placements and Ministry of Education events.',
    stats: [{ k: 'Areas', v: '4+' }, { k: 'Awards', v: '8+' }, { k: 'Years', v: '7' }],
  },
];

const colorMap: Record<string, string> = {
  nebula: 'text-nebula-400 border-nebula-400/40 bg-nebula-500/10',
  mars: 'text-mars-400 border-mars-400/40 bg-mars-500/10',
};

export default function Missions() {
  return (
    <section id="missions" className="relative section-pad bg-space-900/50">
      {/* Nebula glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-mars-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-nebula-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-nebula-400 tracking-[0.3em]">02 /</span>
          <span className="font-display text-sm text-space-400 tracking-[0.3em] uppercase">Experience Log</span>
          <div className="flex-1 h-px bg-gradient-to-r from-space-600 to-transparent" />
        </div>

        <h2 className="font-display font-bold text-3xl md:text-5xl text-space-50 mb-4">
          Creative <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-space-300 text-lg mb-16 max-w-2xl">
          From interactive media studies to professional content creation, each chapter has shaped how I communicate ideas.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-400/60 via-space-600 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {missions.map((m, i) => {
              const Icon = m.icon;
              const left = i % 2 === 0;
              return (
                <div
                  key={m.id}
                  className={`relative flex flex-col md:flex-row ${left ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 mt-2">
                    <div className={`w-8 h-8 rounded-full border-2 ${m.statusColor === 'mars' ? 'border-mars-400' : 'border-nebula-400'} bg-space-950 flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-nebula-400" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 ${left ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 hover:border-nebula-400/40 transition-all hover:glow-nebula group">
                      <div className={`flex items-center gap-3 mb-3 ${left ? 'md:justify-end' : ''}`}>
                        <span className={`text-xs font-display tracking-widest px-3 py-1 rounded-full border ${colorMap[m.statusColor]}`}>
                          {m.status}
                        </span>
                        <span className="font-display text-sm text-space-400">{m.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-space-50 mb-1">{m.name}</h3>
                      <p className="text-nebula-400 text-sm font-body mb-3">{m.role}</p>
                      <p className="text-space-300 text-sm leading-relaxed mb-4">{m.desc}</p>
                      <div className={`flex gap-6 ${left ? 'md:justify-end' : ''}`}>
                        {m.stats.map((s) => (
                          <div key={s.k}>
                            <div className="font-display font-bold text-lg text-space-50">{s.v}</div>
                            <div className="text-xs uppercase tracking-widest text-space-400">{s.k}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
