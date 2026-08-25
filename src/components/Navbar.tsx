import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#missions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Rocket className="w-6 h-6 text-nebula-400 group-hover:text-stardust-400 transition-colors" />
          <span className="font-display font-bold text-lg tracking-wider text-space-50">
            DEWMI<span className="text-nebula-400">.</span>SILVA
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-space-200 hover:text-nebula-400 transition-colors tracking-wide relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-nebula-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-nebula-400/50 text-nebula-400 hover:bg-nebula-400 hover:text-space-950 transition-all text-sm font-medium tracking-wide"
          >
            Launch Comms
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-space-100"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong mt-3 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-space-200 hover:text-nebula-400 transition-colors font-body"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
