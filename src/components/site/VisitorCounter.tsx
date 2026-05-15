import { useEffect, useState } from "react";
import { trackVisit } from "@/lib/visitors";
import { Eye } from "lucide-react";

export function VisitorCounter({ compact = false }: { compact?: boolean }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(trackVisit());
  }, []);

  const display = count?.toLocaleString("id-ID") ?? "—";

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Eye size={12} /> {display} kunjungan
      </span>
    );
  }

  return (
    <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-glow opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-glow" />
      </span>
      <span className="text-muted-foreground">Live visitors</span>
      <span className="font-semibold tabular-nums">{display}</span>
    </div>
  );
}
