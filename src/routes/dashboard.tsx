import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend,
} from "recharts";
import { getVisitors } from "@/lib/visitors";
import { Eye, MousePointerClick, Globe2, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
  head: () => ({
    meta: [
      { title: "Dashboard Visitor — Ekonomi Perang" },
      { name: "description", content: "Dashboard analitik kunjungan website karya ilmiah." },
      { property: "og:url", content: "/dashboard" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
});

const dailyVisits = [
  { day: "Sen", visits: 320, reads: 180 },
  { day: "Sel", visits: 410, reads: 240 },
  { day: "Rab", visits: 380, reads: 210 },
  { day: "Kam", visits: 520, reads: 330 },
  { day: "Jum", visits: 610, reads: 410 },
  { day: "Sab", visits: 480, reads: 290 },
  { day: "Min", visits: 550, reads: 360 },
];

const articlePopularity = [
  { name: "Ekologi", reads: 1240 },
  { name: "Makro", reads: 1820 },
  { name: "Mikro", reads: 1480 },
];

const trafficSources = [
  { name: "Direct", value: 38 },
  { name: "Search", value: 32 },
  { name: "Social", value: 22 },
  { name: "Referral", value: 8 },
];

const PIE_COLORS = ["#0d9488", "#3b82f6", "#a855f7", "#f59e0b"];

function Stat({ Icon, label, value, delta }: { Icon: any; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <Icon className="text-primary" size={18} />
        <span className="text-[11px] text-emerald-glow">{delta}</span>
      </div>
      <div className="mt-4 font-display text-3xl tabular-nums">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function DashboardPage() {
  const [visitors, setVisitors] = useState(0);
  useEffect(() => setVisitors(getVisitors()), []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        Analytics
      </div>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">
        Dashboard Visitor
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Ringkasan performa kunjungan dan pembaca website karya ilmiah ini. Data
        gabungan dari penghitung lokal (live) dan dataset agregat 7 hari terakhir.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat Icon={Eye} label="Total kunjungan" value={visitors.toLocaleString("id-ID")} delta="▲ 12.4%" />
        <Stat Icon={MousePointerClick} label="Pembaca artikel (7 hari)" value="2.020" delta="▲ 8.1%" />
        <Stat Icon={Globe2} label="Negara unik" value="14" delta="▲ 3" />
        <Stat Icon={TrendingUp} label="Avg. waktu baca" value="4m 12s" delta="▲ 18%" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Tren mingguan
              </div>
              <h2 className="font-display text-xl">Kunjungan vs Pembaca</h2>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <AreaChart data={dailyVisits}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="visits" stroke="#0d9488" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="reads" stroke="#3b82f6" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Sumber traffic
          </div>
          <h2 className="font-display text-xl">Distribusi</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={trafficSources}
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {trafficSources.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          Popularitas artikel
        </div>
        <h2 className="font-display text-xl">Pembaca per kategori</h2>
        <div className="mt-4 h-72 w-full">
          <ResponsiveContainer>
            <BarChart data={articlePopularity}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="reads" fill="#0d9488" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
