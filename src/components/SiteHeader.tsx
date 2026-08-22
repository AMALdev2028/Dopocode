import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '../data/content';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
      'sticky top-0 z-50 w-full bg-ink/95 backdrop-blur-md transition-shadow duration-200 ease-swift',
      scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.25)]' : 'shadow-none'].
      join(' ')}>
      
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime font-display text-sm font-bold text-ink">
            P
          </span>
          The Primer
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/60 transition-colors duration-150 ease-swift hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/50 focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
            
              {link.label}
            </a>
          )}
          <a
            href="https://dopocode-backend-3xj7.vercel.app/" target="_blank"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-150 ease-swift hover:bg-lime-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
            
            Start free trial
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-full border border-white/15 p-2 text-white transition-colors duration-150 ease-swift hover:bg-white/10 md:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ?
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className="border-t border-white/10 bg-ink px-6 pb-5 pt-3 md:hidden">
        
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-base font-medium text-white/60 transition-colors duration-150 ease-swift hover:bg-white/10 hover:text-white">
              
                  {link.label}
                </a>
              </li>
          )}
            <li className="pt-2">
              <a
              href="#start"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-lime px-5 py-3 text-center text-base font-semibold text-ink">
              
                Start free trial
              </a>
            </li>
          </ul>
        </nav> :
      null}
    </header>);

}
