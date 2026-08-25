import { Rocket, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-space-950 border-t border-space-800/50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-nebula-400" />
            <span className="font-display font-bold text-space-50 tracking-wider">
              DEWMI<span className="text-nebula-400">.</span>SILVA
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-6 justify-center">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-space-300 hover:text-nebula-400 transition-colors text-sm font-body"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-space-700 flex items-center justify-center text-space-300 hover:text-nebula-400 hover:border-nebula-400/50 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-space-800/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-space-500 font-body">
          <p>© 2026 K.P. Dewmi Amanda Silva. Crafted with curiosity and care.</p>
          <p className="font-display tracking-widest">
            COL 6.93°N · LON 79.86°E · COL 10, LK
          </p>
        </div>
      </div>
    </footer>
  );
}
