import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/articles")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl">Artikel tidak ditemukan</h1>
      <Link to="/articles" className="mt-4 inline-block text-primary">
        ← Kembali ke daftar artikel
      </Link>
    </div>
  ),
});
