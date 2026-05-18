import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Globe2, LineChart, Users } from "lucide-react";
import { site } from "@/data/site";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { VisitorCounter } from "@/components/site/VisitorCounter";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.title}` },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  const trending = articles.filter((a) => a.trending);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-hero opacity-95" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(252,211,77,.18),transparent_55%)]" />
        <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-emerald-glow/30 blur-3xl animate-float-slow" />
        <div className="absolute -right-10 bottom-0 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl animate-float-slow [animation-delay:-3s]" />

        <div className="mx-auto max-w-6xl px-5 py-24 text-white md:py-32">
          <div className="glass inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs">
            <Sparkles size={12} /> Karya Ilmiah · UTS Lingkungan Bisnis 2026
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Peluang Bisnis di Tengah Dampak Perang terhadap{" "}
            <span className="italic text-gold">Ekologi</span>,{" "}
            <span className="italic text-emerald-glow">Makro</span>, dan{" "}
            <span className="italic">Mikro Ekonomi</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            Studi modern yang memetakan bagaimana krisis geopolitik global mengubah ekologi, ekonomi
            makro, dan perilaku mikro — serta peluang bisnis baru yang lahir darinya.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/articles"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              <BookOpen size={16} /> Baca Artikel
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.amikomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Kunjungi Amikom ↗
            </a>
          </div>

          {/* Author card */}
          <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div className="glass max-w-md rounded-2xl border border-white/20 p-5 text-white">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Penulis</div>
              <div className="mt-1 font-display text-2xl">{site.author}</div>
              <div className="text-sm text-white/80">
                NIM {site.nim} · {site.course}
              </div>
              <div className="text-xs text-white/60">{site.university}</div>
            </div>

            <VisitorCounter />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-10 max-w-6xl px-5">
        <div className="glass grid grid-cols-2 gap-px rounded-2xl border border-border/60 bg-border/40 shadow-elegant md:grid-cols-4">
          {[
            { Icon: Globe2, label: "Negara terdampak konflik", value: "32+" },
            { Icon: LineChart, label: "Inflasi pangan global", value: "8.4%" },
            { Icon: Users, label: "UMKM go-digital target 2030", value: "30 jt" },
            { Icon: Sparkles, label: "Pertumbuhan pasar AI ASEAN", value: "25% / thn" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="bg-card p-6">
              <Icon className="text-primary" size={18} />
              <div className="mt-3 font-display text-3xl">{value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Trending sekarang
            </div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Artikel pilihan</h2>
          </div>
          <Link to="/articles" className="text-sm text-primary hover:underline">
            Semua artikel →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {trending.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* CTA AMIKOM */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-white shadow-elegant md:p-14">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-white/70">
              Universitas Amikom Yogyakarta
            </div>
            <h3 className="mt-2 max-w-2xl font-display text-3xl md:text-4xl">
              Tertarik mendalami dunia bisnis & teknologi?
            </h3>
            <p className="mt-3 max-w-xl text-white/80">
              Kunjungi website resmi Amikom untuk informasi program studi, penelitian, dan inovasi
              terbaru.
            </p>
            <a
              href={site.amikomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground shadow transition-transform hover:-translate-y-0.5"
            >
              Kunjungi Website Resmi Amikom →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
