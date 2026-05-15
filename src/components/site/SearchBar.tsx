import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Cari judul, kategori, atau kata kunci…",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        size={16}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm shadow-sm outline-none ring-ring/30 transition-all focus:ring-4"
      />
    </div>
  );
}
