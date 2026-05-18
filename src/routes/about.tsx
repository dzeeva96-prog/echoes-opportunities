import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Tentang — Ekonomi Perang" },
      { name: "description", content: "Tentang penulis dan latar belakang karya ilmiah ini." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">Tentang</div>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Karya Ilmiah & Penulis</h1>

      <div className="prose-academic mt-8">
        <p>
          Website ini merupakan media publikasi karya ilmiah berjudul <strong>{site.title}</strong>.
          Disusun sebagai pemenuhan tugas Ujian Tengah Semester mata kuliah{" "}
          <strong>{site.course}</strong> di <strong>{site.university}</strong>, di bawah bimbingan{" "}
          {site.lecturer}.
        </p>

        <h2>Profil Penulis</h2>
        <ul>
          <li>
            <strong>Nama:</strong> {site.author}
          </li>
          <li>
            <strong>NIM:</strong> {site.nim}
          </li>
          <li>
            <strong>Program Studi:</strong> Sistem Informasi / Reguler
          </li>
          <li>
            <strong>Universitas:</strong> {site.university}
          </li>
        </ul>

        <h2>Tujuan</h2>
        <p>
          Karya ilmiah ini bertujuan menganalisis dampak konflik geopolitik terhadap tiga lapis
          ekonomi — ekologi, makro, dan mikro — sekaligus memetakan peluang bisnis baru yang lahir
          dari perubahan tersebut.
        </p>

        <h2>Referensi Akademik</h2>
        <p>
          Seluruh data dan kutipan menggunakan referensi dari lembaga global (UNEP, IMF, IEA, World
          Bank) serta lembaga nasional (Bank Indonesia, Kementerian ESDM, Kementerian Koperasi &
          UKM).
        </p>
      </div>

      <a
        href={site.amikomUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex rounded-full gradient-hero px-6 py-3 text-sm font-medium text-white shadow-elegant"
      >
        Kunjungi Website Resmi Amikom →
      </a>
    </section>
  );
}
