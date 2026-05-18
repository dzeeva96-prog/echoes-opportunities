import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getArticle, getRelated, type Article } from "@/data/articles";
import { site } from "@/data/site";
import { ArticleBody } from "@/components/site/ArticleBody";
import { TableOfContents } from "@/components/site/TableOfContents";
import { ShareButtons } from "@/components/site/ShareButtons";
import { ArticleCard } from "@/components/site/ArticleCard";
import { VisitorCounter } from "@/components/site/VisitorCounter";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }): { article: Article } => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — ${site.name}` },
        { name: "description", content: a.abstract },
        { name: "author", content: site.author },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.abstract },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/articles/${params.slug}` },
        { property: "article:published_time", content: a.publishedAt },
        { property: "article:author", content: site.author },
      ],
      links: [{ rel: "canonical", href: `/articles/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.abstract,
            datePublished: a.publishedAt,
            author: { "@type": "Person", name: site.author },
            keywords: a.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl">Artikel tidak ditemukan</h1>
      <Link to="/articles" className="mt-4 inline-block text-primary">
        ← Kembali ke daftar artikel
      </Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const params = Route.useParams();
  const related = getRelated(article.slug, 2);

  return (
    <article>
      {/* Cover */}
      <div
        className="relative h-[42vh] min-h-[320px] w-full overflow-hidden"
        style={{ background: article.cover }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-5xl items-end px-5 pb-10">
          <div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-xs text-white/85 hover:text-white"
            >
              <ArrowLeft size={12} /> Semua artikel
            </Link>
            <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur">
              {article.category}
            </span>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight text-white drop-shadow md:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <div>
            <span className="text-foreground font-medium">{site.author}</span> · NIM {site.nim}
          </div>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={12} />
            {new Date(article.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> {article.readingMinutes} menit baca
          </span>
          <VisitorCounter compact />
        </div>

        {/* Abstract */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="text-xs uppercase tracking-widest text-primary">Abstrak</div>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">{article.abstract}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block">
            <TableOfContents sections={article.sections} />
          </aside>

          <div>
            <ArticleBody sections={article.sections} />

            {/* Conclusion */}
            <section className="mt-12 rounded-2xl gradient-hero p-8 text-white shadow-elegant">
              <div className="text-xs uppercase tracking-widest text-white/70">Kesimpulan</div>
              <p className="mt-3 leading-relaxed">{article.conclusion}</p>
            </section>

            {/* References */}
            <section className="mt-10">
              <h3 className="font-display text-xl">Referensi Ilmiah</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                {article.references.map((r, i) => (
                  <li key={i}>
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {r.text}
                      </a>
                    ) : (
                      r.text
                    )}
                  </li>
                ))}
              </ol>
            </section>

            {/* Share */}
            <section className="mt-10 border-t border-border pt-6">
              <ShareButtons title={article.title} path={`/articles/${params.slug}`} />
            </section>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Artikel terkait
            </div>
            <h3 className="mt-2 font-display text-2xl">Lanjutkan membaca</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
