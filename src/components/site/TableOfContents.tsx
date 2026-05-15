import type { Section } from "@/data/articles";
import { useEffect, useState } from "react";

export function TableOfContents({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-24">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Daftar Isi
      </div>
      <ul className="mt-4 space-y-2 border-l border-border">
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block border-l-2 py-1 pl-4 text-sm transition-colors -ml-px ${
                active === s.id
                  ? "border-primary text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-2 text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
