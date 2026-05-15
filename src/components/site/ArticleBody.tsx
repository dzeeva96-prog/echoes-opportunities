// Renders simple markdown subset used in articles: ## h2, ### h3, - bullets, **bold**
import type { Section } from "@/data/articles";

function inline(text: string) {
  // bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="text-foreground">{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function renderBlock(block: string, key: number) {
  const lines = block.split("\n");
  if (lines[0]?.startsWith("## ")) {
    return <h3 key={key}>{lines[0].slice(3)}</h3>;
  }
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul key={key}>
        {lines.map((l, i) => (
          <li key={i}>{inline(l.slice(2))}</li>
        ))}
      </ul>
    );
  }
  return <p key={key}>{inline(block)}</p>;
}

export function ArticleBody({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-academic">
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <h2>{s.heading}</h2>
          {s.body.split("\n\n").map((block, i) => renderBlock(block, i))}
        </section>
      ))}
    </div>
  );
}
