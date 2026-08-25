import { useState, type FormEvent } from 'react';
import { Radio, Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        'service_6107hik',   // replace with your EmailJS service ID
        'template_elj7uzs',  // replace with your EmailJS template ID
        {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
        'P3cdD6XkjZgkgtzlK'    // replace with your EmailJS public key
      );

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Transmission failed. Try again.');
    }
  };

  return (
    <section id="contact" className="relative section-pad bg-space-950 bg-grid overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-nebula-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-display text-sm text-nebula-400 tracking-[0.3em]">05 /</span>
          <span className="font-display text-sm text-space-400 tracking-[0.3em] uppercase">Open Channel</span>
          <div className="flex-1 h-px bg-gradient-to-r from-space-600 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: intro */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-space-50 leading-tight mb-6">
              Let's talk <span className="text-gradient">mission</span>.
            </h2>
            <p className="text-space-300 text-lg leading-relaxed mb-8">
              Speaking engagements, collaborations, or just a question
              about content, animation, or interactive media — the channel is
              open.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Radio className="w-5 h-5 text-nebula-400" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-space-400">Direct Comms</div>
                  <div className="font-display text-space-50">dewmi78@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Radio className="w-5 h-5 text-stardust-400" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-space-400">Base Station</div>
                  <div className="font-display text-space-50">No: 87/15, Ernest Place, Laxapathiya, Moratuwa,Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-strong rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-space-400 mb-2">
                  Call Sign
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-space-900/60 border border-space-600/50 rounded-lg px-4 py-3 text-space-50 placeholder-space-500 focus:border-nebula-400 focus:outline-none focus:ring-1 focus:ring-nebula-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-space-400 mb-2">
                  Return Frequency
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-space-900/60 border border-space-600/50 rounded-lg px-4 py-3 text-space-50 placeholder-space-500 focus:border-nebula-400 focus:outline-none focus:ring-1 focus:ring-nebula-400 transition-colors"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-space-400 mb-2">
                  Transmission
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-space-900/60 border border-space-600/50 rounded-lg px-4 py-3 text-space-50 placeholder-space-500 focus:border-nebula-400 focus:outline-none focus:ring-1 focus:ring-nebula-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-nebula-500 text-space-950 font-semibold tracking-wide hover:bg-nebula-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed glow-nebula"
              >
                {status === 'sending' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <Check className="w-5 h-5" />}
                {status === 'idle' && <Send className="w-5 h-5" />}
                {status === 'error' && <Send className="w-5 h-5" />}
                {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Message Sent' : 'Send Transmission'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-nebula-400 text-sm">
                  <Check className="w-4 h-4" />
                  Transmission received. I'll respond from orbit.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-mars-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
