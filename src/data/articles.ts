import { site } from "./site";

export interface Reference {
  text: string;
  url?: string;
}

export interface Section {
  id: string;
  heading: string;
  body: string; // markdown-ish: paragraphs separated by \n\n, ## subheading, - bullets
}

export interface Article {
  slug: string;
  title: string;
  category: "Ekologi" | "Makro Ekonomi" | "Mikro Ekonomi";
  abstract: string;
  cover: string; // gradient css
  publishedAt: string;
  readingMinutes: number;
  tags: string[];
  trending: boolean;
  sections: Section[];
  conclusion: string;
  references: Reference[];
}

const author = site.author;

export const articles: Article[] = [
  {
    slug: "ekologi-energi-hijau",
    title:
      "Dampak Perang terhadap Ekologi Global dan Peluang Bisnis Energi Hijau serta Teknologi Ramah Lingkungan",
    category: "Ekologi",
    abstract:
      "Perang modern bukan hanya menimbulkan korban manusia, tetapi juga menyisakan jejak ekologis yang dalam: pencemaran tanah, kerusakan hutan, emisi karbon militer, hingga gangguan rantai pasok energi global. Karya ilmiah ini menganalisis bagaimana krisis lingkungan akibat konflik bersenjata justru membuka peluang bisnis besar di sektor energi terbarukan, teknologi ramah lingkungan, dan ekonomi sirkular. Penulis memetakan tiga kluster peluang utama: pembangkit energi bersih terdesentralisasi, manufaktur hijau substitusi impor, serta climate-tech berbasis data dan kecerdasan buatan.",
    cover: "linear-gradient(135deg,#0d3b3b,#1a8a6b,#86efac)",
    publishedAt: "2026-05-10",
    readingMinutes: 11,
    tags: ["Ekologi", "Energi Hijau", "Climate Tech", "ESG"],
    trending: true,
    sections: [
      {
        id: "pendahuluan",
        heading: "Pendahuluan",
        body: `Konflik bersenjata berskala besar yang terjadi dalam dekade terakhir — mulai dari perang di Eropa Timur hingga krisis Timur Tengah — telah mengubah peta lingkungan dan energi dunia secara permanen. Laporan UNEP (2024) memperkirakan bahwa sektor militer global menyumbang sekitar 5,5% dari total emisi karbon dunia, angka yang lebih besar dari emisi gabungan industri penerbangan dan pelayaran sipil.\n\nDi sisi lain, gangguan pasokan minyak dan gas memaksa banyak negara mempercepat transisi energi. Krisis menjadi katalis: kebijakan yang sebelumnya berjalan lambat tiba-tiba diakselerasi karena alasan keamanan energi nasional. Kondisi inilah yang membuka jendela peluang bisnis baru di sektor hijau.`,
      },
      {
        id: "dampak-ekologi",
        heading: "Dampak Perang terhadap Ekologi Global",
        body: `## Pencemaran Tanah dan Air\nPenggunaan amunisi berat, bahan bakar fosil dalam jumlah masif, serta kerusakan instalasi industri menyebabkan pencemaran logam berat di tanah pertanian dan sumber air. Wilayah konflik di Ukraina, misalnya, melaporkan kerusakan lebih dari 30% lahan subur akibat ranjau dan kebakaran.\n\n## Emisi Karbon Militer\nOperasi militer modern mengonsumsi bahan bakar fosil dalam jumlah ekstrem. Satu pesawat tempur generasi keempat dapat menghasilkan emisi setara perjalanan ribuan mobil dalam sehari.\n\n## Krisis Pangan dan Deforestasi\nPerang mengganggu rantai pasok pangan global, mendorong negara-negara mengonversi hutan menjadi lahan pertanian darurat — memperparah deforestasi.`,
      },
      {
        id: "peluang-energi-hijau",
        heading: "Peluang Bisnis Energi Hijau",
        body: `Krisis energi yang dipicu perang mendorong permintaan tinggi terhadap solusi energi alternatif. Tiga model bisnis paling menjanjikan:\n\n- **Solar rooftop as-a-service** untuk UMKM dan rumah tangga, dengan skema pembiayaan tanpa modal awal.\n- **Microgrid komunitas** berbasis baterai LFP, cocok untuk daerah terpencil yang ingin lepas dari ketergantungan listrik impor.\n- **Bioenergi limbah pertanian**, mengubah jerami, sekam, dan limbah sawit menjadi listrik atau biogas.\n\nDi Indonesia, kapasitas terpasang energi terbarukan masih di bawah 15% dari potensi nasional — celah pasar yang sangat besar bagi pengusaha muda.`,
      },
      {
        id: "teknologi-ramah-lingkungan",
        heading: "Peluang Bisnis Teknologi Ramah Lingkungan",
        body: `Selain energi, teknologi ramah lingkungan (green-tech) tumbuh pesat sebagai respons terhadap krisis:\n\n## Climate-Tech & AI\nStartup berbasis AI untuk pemantauan emisi, prediksi cuaca ekstrem, dan optimasi konsumsi energi industri menjadi salah satu sektor paling banyak menerima pendanaan ventura sejak 2023.\n\n## Material Berkelanjutan\nBioplastik dari pati singkong, tekstil dari serat nanas, hingga beton rendah karbon — semua menjadi peluang manufaktur substitusi impor.\n\n## Ekonomi Sirkular\nModel bisnis daur-ulang elektronik (e-waste), refurbishment perangkat IT, dan platform sewa-pakai (rental economy) tumbuh menjadi industri bernilai miliaran dolar.`,
      },
    ],
    conclusion:
      "Perang membawa kerusakan ekologis yang nyata, namun secara paradoks mempercepat transisi menuju ekonomi hijau. Pelaku bisnis Indonesia memiliki posisi strategis untuk mengambil peran: dari energi terbarukan terdesentralisasi, climate-tech berbasis AI, hingga manufaktur material berkelanjutan. Pemerintah, perguruan tinggi, dan sektor swasta perlu berkolaborasi membangun ekosistem inovasi hijau agar krisis global dapat dikonversi menjadi pertumbuhan ekonomi yang inklusif dan berkelanjutan.",
    references: [
      { text: "UNEP (2024). Environmental Impact of Armed Conflict.", url: "https://www.unep.org" },
      { text: "IEA (2024). World Energy Outlook.", url: "https://www.iea.org" },
      { text: "IRENA (2023). Renewable Capacity Statistics.", url: "https://www.irena.org" },
      { text: "Kementerian ESDM (2024). Statistik EBT Indonesia." },
    ],
  },
  {
    slug: "makro-ekonomi-digital-ai",
    title:
      "Dampak Perang terhadap Makro Ekonomi: Inflasi, Harga Minyak, Supply Chain, dan Peluang Bisnis Digital serta AI",
    category: "Makro Ekonomi",
    abstract:
      "Konflik geopolitik mengguncang fondasi makro ekonomi global: inflasi melonjak, harga minyak bergejolak, dan rantai pasok terputus. Karya ilmiah ini menganalisis mekanisme transmisi guncangan tersebut ke perekonomian Indonesia dan memetakan peluang bisnis baru di sektor digital dan kecerdasan buatan, mulai dari fintech inflation-hedging, AI logistik, hingga platform B2B substitusi impor.",
    cover: "linear-gradient(135deg,#1e3a8a,#3b82f6,#60a5fa)",
    publishedAt: "2026-05-08",
    readingMinutes: 12,
    tags: ["Makro Ekonomi", "Inflasi", "AI", "Supply Chain"],
    trending: true,
    sections: [
      {
        id: "pendahuluan",
        heading: "Pendahuluan",
        body: `Sejak 2022, perekonomian dunia mengalami tekanan beruntun: pandemi yang belum tuntas disusul perang di Eropa Timur dan eskalasi konflik Timur Tengah. Bank Dunia mencatat pertumbuhan global terkoreksi rata-rata 1,2 poin persentase setiap tahun konflik berlangsung.\n\nIndonesia sebagai negara pengimpor minyak dan komoditas pangan tertentu sangat rentan terhadap guncangan eksternal. Namun, di balik tekanan inflasi dan ketidakpastian, muncul kebutuhan baru yang mendorong inovasi bisnis berbasis digital dan AI.`,
      },
      {
        id: "inflasi",
        heading: "Inflasi sebagai Konsekuensi Perang",
        body: `Perang mendorong inflasi melalui beberapa jalur: kenaikan harga energi, gangguan pasokan pangan, biaya logistik yang melonjak, dan depresiasi mata uang negara berkembang akibat capital outflow ke aset aman.\n\nDi Indonesia, inflasi inti tetap terjaga, tetapi inflasi pangan bergejolak (volatile food) dan harga diatur pemerintah (administered prices) menjadi tekanan utama. UMKM yang bergantung pada bahan baku impor — gandum, kedelai, baja — paling terdampak.`,
      },
      {
        id: "harga-minyak",
        heading: "Volatilitas Harga Minyak dan Energi",
        body: `Harga minyak Brent sempat menembus USD 130/barel pada puncak konflik. Setiap kenaikan USD 10/barel diperkirakan menambah defisit transaksi berjalan Indonesia sekitar 0,1% PDB.\n\nVolatilitas ini memaksa korporasi membangun sistem manajemen risiko energi yang lebih canggih — sebuah peluang besar bagi penyedia software analitik energi dan platform hedging berbasis AI.`,
      },
      {
        id: "supply-chain",
        heading: "Disrupsi Supply Chain Global",
        body: `Penutupan jalur Laut Hitam dan gangguan di Selat Hormuz mengubah peta logistik dunia. Ongkos kontainer dari Asia ke Eropa sempat melonjak 4 kali lipat. Strategi just-in-time digantikan just-in-case: perusahaan menumpuk inventori dan mendiversifikasi pemasok.\n\nIndonesia berpotensi menjadi alternatif manufaktur regional, terutama untuk komponen elektronik, tekstil teknis, dan komoditas energi.`,
      },
      {
        id: "peluang-digital-ai",
        heading: "Peluang Bisnis Digital dan AI",
        body: `Kombinasi inflasi, volatilitas, dan disrupsi melahirkan kelas baru produk digital:\n\n- **Fintech inflation-hedging**: aplikasi mikro-investasi emas, reksa dana pasar uang, dan deposito syariah otomatis untuk masyarakat menengah.\n- **AI logistik**: optimasi rute, prediksi keterlambatan kapal, dan dynamic pricing untuk freight forwarder.\n- **Marketplace B2B substitusi impor**: menghubungkan UMKM manufaktur lokal dengan korporasi yang mencari pemasok alternatif.\n- **Generative AI untuk konten dan layanan pelanggan**: menurunkan biaya operasional bisnis di tengah tekanan margin.\n\nValuasi pasar AI di Asia Tenggara diproyeksikan tumbuh 25% per tahun hingga 2030 — peluang yang tidak boleh dilewatkan.`,
      },
    ],
    conclusion:
      "Guncangan makro akibat perang menciptakan tekanan sekaligus peluang. Bisnis digital dan AI menjadi kanal paling efektif untuk merespons inflasi, volatilitas energi, dan disrupsi supply chain. Indonesia berpotensi mengubah krisis menjadi momentum pertumbuhan ekonomi digital, asalkan pelaku usaha sigap, regulator adaptif, dan ekosistem inovasi terus diperkuat.",
    references: [
      { text: "World Bank (2024). Global Economic Prospects.", url: "https://www.worldbank.org" },
      { text: "IMF (2024). World Economic Outlook." },
      { text: "Bank Indonesia (2024). Laporan Kebijakan Moneter." },
      { text: "McKinsey (2024). State of AI in Southeast Asia." },
    ],
  },
  {
    slug: "mikro-ekonomi-umkm-startup",
    title:
      "Dampak Perang terhadap Mikro Ekonomi: Perilaku Konsumen, UMKM, Freelance Digital, serta Peluang Startup AI dan Cyber Security",
    category: "Mikro Ekonomi",
    abstract:
      "Pada level mikro, perang mengubah cara orang berbelanja, bekerja, dan membangun bisnis. Karya ilmiah ini menelaah pergeseran perilaku konsumen menuju nilai dan keamanan, transformasi UMKM menuju digital, melonjaknya pasar freelance lintas negara, serta kebangkitan startup AI dan cyber security sebagai sektor paling tahan resesi.",
    cover: "linear-gradient(135deg,#5b21b6,#a855f7,#fcd34d)",
    publishedAt: "2026-05-05",
    readingMinutes: 10,
    tags: ["Mikro Ekonomi", "UMKM", "Freelance", "Cyber Security"],
    trending: false,
    sections: [
      {
        id: "pendahuluan",
        heading: "Pendahuluan",
        body: `Jika makro ekonomi berbicara tentang agregat, mikro ekonomi berbicara tentang keputusan harian rumah tangga dan unit usaha. Perang mengubah keduanya. Konsumen menjadi lebih berhati-hati, UMKM dipaksa beradaptasi, dan tenaga kerja muda mencari sumber penghasilan baru di luar batas geografis.`,
      },
      {
        id: "perilaku-konsumen",
        heading: "Perubahan Perilaku Konsumen",
        body: `Penelitian Nielsen (2024) menunjukkan tiga pergeseran utama perilaku konsumen pasca konflik global:\n\n- **Value-seeking**: konsumen lebih sensitif harga, beralih ke private label dan promo bundling.\n- **Local pride**: produk lokal dianggap lebih aman dari risiko geopolitik.\n- **Digital-first**: e-commerce menjadi kanal utama, terutama untuk kategori esensial.\n\nMerek yang gagal beradaptasi terhadap pergeseran ini kehilangan pangsa pasar dengan cepat.`,
      },
      {
        id: "umkm",
        heading: "UMKM dan Transformasi Digital",
        body: `UMKM adalah tulang punggung ekonomi Indonesia — menyumbang 60% PDB dan 97% lapangan kerja. Kenaikan harga bahan baku dan biaya logistik menekan margin mereka. Namun, digitalisasi membuka peluang baru:\n\n- Onboarding ke marketplace nasional dan global (Tokopedia, Shopee, TikTok Shop, Etsy).\n- Penggunaan QRIS dan pembayaran digital untuk efisiensi kasir.\n- Adopsi tools AI gratis untuk desain, copywriting, dan customer service.\n\nPemerintah melalui program UMKM Go Digital menargetkan 30 juta UMKM on-boarding pada 2030.`,
      },
      {
        id: "freelance",
        heading: "Bangkitnya Freelance Digital",
        body: `Resesi parsial dan PHK di sektor formal mendorong pekerja muda Indonesia masuk ke pasar freelance global melalui platform seperti Upwork, Fiverr, dan Toptal. Layanan paling diminati: desain UI/UX, pengembangan web, copywriting bilingual, video editing, dan konsultasi AI.\n\nKombinasi biaya hidup yang relatif rendah dan kemampuan bahasa Inggris menjadikan freelancer Indonesia kompetitif secara global. Penghasilan freelancer top dapat mencapai 5–10 kali UMR Jakarta.`,
      },
      {
        id: "startup-ai-cyber",
        heading: "Peluang Startup AI dan Cyber Security",
        body: `Perang modern juga adalah perang siber. Serangan ransomware dan disinformasi meningkat tajam. Permintaan terhadap solusi keamanan siber melonjak — dari endpoint protection, SOC-as-a-service, hingga simulasi serangan berbasis AI.\n\nBeberapa peluang konkret untuk startup Indonesia:\n\n- **AI vertical**: solusi AI khusus industri (legal-tech, agri-tech, edu-tech).\n- **Cyber security UMKM**: paket keamanan terjangkau untuk usaha kecil.\n- **Identity verification**: KYC dan anti-fraud berbasis biometrik.\n- **Privacy-tech**: tools kepatuhan UU Pelindungan Data Pribadi (PDP).`,
      },
    ],
    conclusion:
      "Pada level mikro, perang mempercepat transisi konsumen, UMKM, dan tenaga kerja menuju ekonomi digital. Startup AI dan cyber security muncul sebagai sektor paling resilien dan paling diminati pendanaan. Bagi mahasiswa dan wirausahawan muda Indonesia, momentum ini adalah panggilan untuk membangun produk yang menjawab kebutuhan riil pasar yang sedang bergejolak.",
    references: [
      { text: "Nielsen (2024). Consumer Confidence Report." },
      { text: "Kementerian Koperasi dan UKM (2024). Statistik UMKM Indonesia." },
      { text: "Upwork (2024). Future Workforce Report." },
      { text: "Cybersecurity Ventures (2024). Cybercrime Report.", url: "https://cybersecurityventures.com" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const getRelated = (slug: string, limit = 2) =>
  articles.filter((a) => a.slug !== slug).slice(0, limit);

export { author };
