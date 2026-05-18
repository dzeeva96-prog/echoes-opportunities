import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/articles";
import { Clock, TrendingUp } from "lucide-react";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      to="/articles/$slug"
      params={{ slug: article.slug }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
        style={{ background: article.cover }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_60%)]" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
            {article.category}
          </span>
          {article.trending && (
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-foreground">
              <TrendingUp size={10} /> Trending
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[10px] text-white backdrop-blur">
          {new Date(article.publishedAt).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-tight transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{article.abstract}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {article.readingMinutes} menit baca
          </span>
          <span className="text-primary">Baca →</span>
        </div>
      </div>
    </Link>
  );
}
