import { Facebook, Linkedin, Link2, Twitter, Check } from "lucide-react";
import { useState } from "react";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.origin + path : path;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  const links = [
    {
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      label: "Twitter",
    },
    {
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      label: "Facebook",
    },
    {
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">Bagikan</span>
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share to ${label}`}
          className="rounded-full border border-border p-2.5 transition-colors hover:bg-muted hover:text-primary"
        >
          <Icon size={14} />
        </a>
      ))}
      <button
        onClick={copy}
        className="rounded-full border border-border p-2.5 transition-colors hover:bg-muted hover:text-primary"
        aria-label="Copy link"
      >
        {copied ? <Check size={14} /> : <Link2 size={14} />}
      </button>
    </div>
  );
}
