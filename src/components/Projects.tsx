import { Smartphone, Plane, UtensilsCrossed, Gamepad2, Palette, Mic2, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Smartphone,
    title: 'HikeG App',
    tag: 'Interactive Media',
    desc: 'An interactive mobile experience built as part of my creative and technology portfolio, combining practical utility with a clear visual direction.',
    accent: 'nebula',
    href: 'https://www.figma.com/design/SG8buOKo5x7xvqD9i2JFgO/HikeG-New-UI?node-id=0-1&p=f&t=VuSDNc9akpZRysbI-0',
    preview: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Plane,
    title: 'Travel Seeker App',
    tag: 'Digital Experience',
    desc: 'A travel-focused app concept designed to help users discover and organize places to visit through a simple, engaging interface.',
    accent: 'stardust',
    href: 'https://www.figma.com/design/zlxdsKRr5XRrxfD02jr0ES/Travel-Seeker-app?node-id=0-1&p=f&t=B12sDY8GZn6VnB0e-0',
    preview: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meal Match',
    tag: 'Management System',
    desc: 'A restaurant management system project focused on organizing meal-related information and making everyday operations easier to manage.',
    accent: 'mars',
    href: 'https://www.behance.net/gallery/197365877/Meal-Match-Restaurant-Management-System',
    preview: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Gamepad2,
    title: 'Sihaba Historical Game',
    tag: 'Game Design',
    desc: 'A historical game project that brings storytelling and interactive play together. The project includes a dedicated demo link in my CV.',
    accent: 'nebula',
    href: 'https://www.behance.net/gallery/197399009/Senyaka-Games',
    preview: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Palette,
    title: 'Social Media Visuals',
    tag: 'Content Creation',
    desc: 'Social posts, logos, branded layouts, and campaign visuals created for clients and digital platforms during my professional experience.',
    accent: 'stardust',
    preview: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Mic2,
    title: 'Voice-over Reels',
    tag: 'Motion Content',
    desc: 'Short promotional reels combining voice narration, 2D animation, editing, and visual storytelling for social media audiences.',
    accent: 'mars',
    preview: 'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const accentMap: Record<string, string> = {
  nebula: 'text-nebula-400 border-nebula-400/30 group-hover:border-nebula-400/70 group-hover:shadow-[0_0_30px_-10px_rgba(38,198,218,0.5)]',
  stardust: 'text-stardust-400 border-stardust-400/30 group-hover:border-stardust-400/70 group-hover:shadow-[0_0_30px_-10px_rgba(255,202,40,0.5)]',
  mars: 'text-mars-400 border-mars-400/30 group-hover:border-mars-400/70 group-hover:shadow-[0_0_30px_-10px_rgba(255,87,34,0.5)]',
};

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad bg-space-950 bg-grid">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-nebula-400 tracking-[0.3em]">03 /</span>
          <span className="font-display text-sm text-space-400 tracking-[0.3em] uppercase">Selected Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-space-600 to-transparent" />
        </div>

        <h2 className="font-display font-bold text-3xl md:text-5xl text-space-50 mb-4">
          Built for the <span className="text-gradient">screen</span>.
        </h2>
        <p className="text-space-300 text-lg mb-16 max-w-2xl">
          Interactive media, social content, and visual experiences designed to connect ideas with people.
        </p>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group glass rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${accentMap[p.accent]}`}
              >
                <div className="relative -mx-7 -mt-7 mb-6 h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={p.preview}
                    alt={`${p.title} project preview`}
                    className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-800 via-space-800/15 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-space-950/70 backdrop-blur-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs uppercase tracking-widest text-space-400">{p.tag}</span>
                  {p.href && <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />}
                </div>
                <h3 className="font-display font-bold text-xl text-space-50 mb-3">{p.title}</h3>
                <p className="text-space-300 text-sm leading-relaxed">{p.desc}</p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-nebula-400 transition-colors hover:text-space-50"
                  >
                    Open project <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
