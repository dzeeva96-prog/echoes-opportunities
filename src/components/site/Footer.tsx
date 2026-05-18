import { site } from "@/data/site";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-transparent to-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl">{site.name}</div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{site.description}</p>
            <a
              href={site.amikomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full gradient-hero px-5 py-2.5 text-sm font-medium text-white shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Kunjungi Website Resmi Amikom →
            </a>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigasi
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-primary">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Penulis
            </div>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="font-medium">{site.author}</li>
              <li className="text-muted-foreground">NIM {site.nim}</li>
              <li className="text-muted-foreground">{site.course}</li>
              <li className="text-muted-foreground">{site.university}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Website dibuat untuk Ujian Tengah Semester Lingkungan Bisnis Universitas Amikom
          Yogyakarta. © {new Date().getFullYear()} {site.author}.
        </div>
      </div>
    </footer>
  );
}
