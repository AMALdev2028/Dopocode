import { footerColumns } from '../data/content';

export function SiteFooter() {
  return (
    <footer className="bg-ink py-16 text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime font-display text-sm font-bold text-ink">
                P
              </span>
              The Primer
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              An AI tutor that grows with your child from KG to Class 12, in the language they think
              in.
            </p>
          </div>

          {footerColumns.map((column) =>
          <div key={column.heading}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wide text-white/40">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) =>
              <li key={link}>
                    <a
                  href="#top"
                  className="text-sm transition-colors duration-150 ease-swift hover:text-white focus-visible:text-white focus-visible:outline-none">
                  
                      {link}
                    </a>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Primer. Built for every child.</p>
          <p className="text-white/40">Tech support by RiftGo Studios · Don Deal · Ratiio</p>
        </div>
      </div>
    </footer>);

}
