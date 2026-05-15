// Lightweight client-side visitor counter using localStorage.
// In production, replace with a server-backed analytics endpoint.
const KEY = "ekonomi-perang:visitors";
const SESSION_KEY = "ekonomi-perang:session";

export function trackVisit(): number {
  if (typeof window === "undefined") return 0;
  try {
    const isNew = !sessionStorage.getItem(SESSION_KEY);
    const current = Number(localStorage.getItem(KEY) ?? "12480");
    const next = isNew ? current + 1 : current;
    if (isNew) {
      sessionStorage.setItem(SESSION_KEY, "1");
      localStorage.setItem(KEY, String(next));
    }
    return next;
  } catch {
    return 0;
  }
}

export function getVisitors(): number {
  if (typeof window === "undefined") return 12480;
  return Number(localStorage.getItem(KEY) ?? "12480");
}
