import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/site/ArticleCard";
import { SearchBar } from "@/components/site/SearchBar";

const categories = ["Semua", "Ekologi", "Makro Ekonomi", "Mikro Ekonomi"] as const;

export const Route = createFileRoute("/articles/")({
  component: ArticlesPage,
  head: () => ({
    meta: [
      { title: "Semua Artikel — Ekonomi Perang" },
      { name: "description", content: "Daftar lengkap artikel ilmiah tentang dampak perang terhadap ekologi, makro, dan mikro ekonomi." },
      { property: "og:title", content: "Semua Artikel" },
      { property: "og:url", content: "/articles" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
});

function ArticlesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("Semua");

  const filtered = useMemo(() => {
    const needle = q.toLowerCase().trim();
    return articles.filter((a) => {
      const matchCat = cat === "Semua" || a.category === cat;
      const matchQ =
        !needle ||
        a.title.toLowerCase().includes(needle) ||
        a.abstract.toLowerCase().includes(needle) ||
        a.tags.some((t) => t.toLowerCase().includes(needle));
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        Pustaka
      </div>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Semua Artikel</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Telusuri kajian ilmiah tentang dampak perang dan peluang bisnis yang
        lahir dari setiap krisis.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <SearchBar value={q} onChange={setQ} />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
          Tidak ada artikel cocok dengan pencarian Anda.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </section>
  );
}
