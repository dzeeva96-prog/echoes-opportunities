import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/articles", label: "Artikel" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about", label: "Tentang" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero text-white shadow-elegant">
              <span className="font-display text-lg leading-none">E</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{site.name}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Karya Ilmiah · Amikom
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active =
                l.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={site.amikomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:inline-block"
            >
              Amikom.ac.id ↗
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg border border-border p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border/60 px-5 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.amikomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm text-primary"
              >
                Kunjungi Amikom.ac.id ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
