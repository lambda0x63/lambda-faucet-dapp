"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [hoveredExhibit, setHoveredExhibit] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* HERO - GRAND ENTRANCE */}
      <section className="relative min-h-screen flex items-end pb-20 border-b-4 border-foreground overflow-hidden bg-gradient-to-b from-background via-background to-foreground/5">
        {/* Asset Container - Hero */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
            {/* Asset: Industrial machinery, gears, steam */}
          </div>
          <div className="absolute bottom-0 left-0 w-2/5 h-3/4 opacity-20 pointer-events-none">
            {/* Asset: Pipes, metal structures */}
          </div>
          {/* Scanlines effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
            style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)"}}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8 w-full">
          <div className="space-y-8">
            <div>
              <h1 className="text-9xl md:text-[10rem] font-black leading-none mb-6" style={{fontFamily: "Oswald, sans-serif"}}>
                LAMBDA
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-32 bg-foreground"></div>
                <h2 className="text-4xl font-bold" style={{fontFamily: "Space Mono, monospace"}}>
                  FAUCET
                </h2>
              </div>
            </div>

            <p className="text-2xl max-w-2xl leading-tight text-muted-foreground font-light" style={{fontFamily: "Courier Prime, monospace"}}>
              An<br />
              <span className="text-foreground font-bold">INDUSTRIAL EXHIBITION</span><br />
              of token distribution
            </p>

            <div className="flex gap-6 pt-8">
              <Button size="lg" className="px-12 py-6 text-lg font-bold border-2 border-foreground" style={{fontFamily: "Oswald, sans-serif"}}>
                ENTER
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg font-bold border-2" style={{fontFamily: "Oswald, sans-serif"}}>
                GUIDE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 - METRICS HALL */}
      <section className="relative py-40 border-b-4 border-foreground bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-1/2 h-full opacity-25 pointer-events-none -translate-y-1/2">
            {/* Asset: Measurement tools, gauges */}
          </div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"}}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>EXHIBITION</h2>
            <h3 className="text-3xl font-light text-muted-foreground" style={{fontFamily: "Space Mono, monospace"}}>metrics & measurements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground">
            {[
              { label: "DISTRIBUTED", value: "500K", unit: "LMDA" },
              { label: "VISITORS", value: "12.5K", unit: "" },
              { label: "INTERACTIONS", value: "45.2K", unit: "" },
              { label: "BASE RATE", value: "100", unit: "LMDA" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`p-12 border-r-2 border-b-2 border-foreground hover:bg-foreground/10 transition-all duration-300 ${idx === 3 ? "border-r-0" : ""} ${idx > 1 ? "border-b-0" : ""}`}
              >
                <p className="text-xs font-black text-muted-foreground tracking-widest mb-4" style={{fontFamily: "Oswald, sans-serif"}}>
                  {stat.label}
                </p>
                <div className="text-5xl font-black mb-2" style={{fontFamily: "Oswald, sans-serif"}}>
                  {stat.value}
                </div>
                {stat.unit && <p className="text-sm text-muted-foreground font-mono">{stat.unit}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - EXHIBITS */}
      <section className="relative py-40 border-b-4 border-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-0 w-3/5 h-full opacity-15 pointer-events-none">
            {/* Asset: Large industrial structures */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>EXHIBITS</h2>
            <h3 className="text-3xl font-light text-muted-foreground" style={{fontFamily: "Space Mono, monospace"}}>core features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "I",
                title: "DYNAMIC MULTIPLIERS",
                desc: "Your earnings shift with balance, time, and activity. A system responding to its participants.",
              },
              {
                num: "II",
                title: "NETWORK REWARDS",
                desc: "Build connections. Earn 10% for each referral. 20% bonus for newcomers.",
              },
              {
                num: "III",
                title: "LIVE ANALYTICS",
                desc: "Real-time tracking. Charts. Statistics. Growth metrics. Watch your journey unfold.",
              },
              {
                num: "IV",
                title: "FORTIFIED SECURITY",
                desc: "OpenZeppelin standards. Reentrancy guards. Comprehensive security architecture.",
              },
            ].map((exhibit, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredExhibit(idx)}
                onMouseLeave={() => setHoveredExhibit(null)}
                className={`border-4 p-12 transition-all duration-300 cursor-pointer group ${
                  hoveredExhibit === idx
                    ? "border-foreground bg-foreground/15 scale-105"
                    : "border-muted-foreground hover:border-foreground/50"
                }`}
              >
                <div className="text-8xl font-light text-muted-foreground/40 mb-6 group-hover:text-muted-foreground/60 transition-colors" style={{fontFamily: "Oswald, sans-serif"}}>
                  {exhibit.num}
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight" style={{fontFamily: "Oswald, sans-serif"}}>
                  {exhibit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {exhibit.desc}
                </p>
                <div className={`h-1 bg-foreground mt-8 transition-all duration-300 ${hoveredExhibit === idx ? "w-full" : "w-0"}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - MULTIPLIER SYSTEMS */}
      <section className="relative py-40 border-b-4 border-foreground bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            {/* Asset: Mechanical gears, machines */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>SYSTEMS</h2>
            <h3 className="text-3xl font-light text-muted-foreground" style={{fontFamily: "Space Mono, monospace"}}>multiplier mechanics</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BALANCE",
                items: ["100-75% : 100%", "75-50% : 80%", "50-25% : 50%", "25-10% : 30%", "<10% : 10%"],
              },
              {
                title: "TIME (UTC)",
                items: ["00:00-08:00 : 120%", "08:00-16:00 : 100%", "16:00-24:00 : 80%"],
              },
              {
                title: "COOLDOWN",
                items: ["0-10 req/hr : 1x", "11-50 req/hr : 2x", "51-100 req/hr : 4x", "100+ req/hr : 8x"],
              },
            ].map((system, idx) => (
              <div key={idx} className="border-4 border-foreground p-10">
                <h3 className="text-3xl font-black mb-8 pb-6 border-b-2 border-foreground" style={{fontFamily: "Oswald, sans-serif"}}>
                  {system.title}
                </h3>
                <div className="space-y-4">
                  {system.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between text-lg">
                      <span className="font-mono text-muted-foreground">{item.split(" : ")[0]}</span>
                      <span className="font-black" style={{fontFamily: "Oswald, sans-serif"}}>{item.split(" : ")[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - FLOW */}
      <section className="relative py-40 border-b-4 border-foreground">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset: Flow diagram elements */}
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>JOURNEY</h2>
            <h3 className="text-3xl font-light text-muted-foreground" style={{fontFamily: "Space Mono, monospace"}}>three stages</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "CONNECT", desc: "Link your wallet. Enter the exhibition." },
              { num: "02", title: "CLAIM", desc: "Request tokens. Real-time calculation." },
              { num: "03", title: "GROW", desc: "Track earnings. Build your network." },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="border-4 border-dashed border-foreground p-12 text-center hover:border-solid hover:bg-foreground/10 transition-all">
                  <div className="text-7xl font-black text-muted-foreground/30 mb-6 group-hover:text-muted-foreground/50 transition-colors" style={{fontFamily: "Oswald, sans-serif"}}>
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL */}
      <section className="relative py-40 border-b-4 border-foreground bg-gradient-to-b from-background to-foreground/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1)), linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1))",
                    backgroundSize: "80px 80px",
                    backgroundPosition: "0 0, 40px 40px"}}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-8 text-center space-y-12">
          <h2 className="text-8xl md:text-9xl font-black leading-none" style={{fontFamily: "Oswald, sans-serif"}}>
            BEGIN
            <br />
            YOUR
            <br />
            EXHIBITION
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            No complexity.<br />
            No fees.<br />
            Just rewards.
          </p>
          <Button size="lg" className="px-16 py-8 text-2xl font-black border-2 border-foreground" style={{fontFamily: "Oswald, sans-serif"}}>
            ENTER NOW
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-foreground py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b-2 border-foreground">
            <div>
              <h3 className="font-black text-2xl mb-4" style={{fontFamily: "Oswald, sans-serif"}}>LAMBDA</h3>
              <p className="text-sm text-muted-foreground font-light">
                Industrial museum of token distribution.
              </p>
            </div>
            {[
              ["Exhibition", ["Features", "Guide", "Contract"]],
              ["Community", ["Discord", "Twitter", "GitHub"]],
              ["Legal", ["Privacy", "Terms"]],
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-black mb-4" style={{fontFamily: "Oswald, sans-serif"}}>{col[0]}</h4>
                <ul className="text-sm space-y-2 text-muted-foreground font-light">
                  {(col[1] as string[]).map((link) => (
                    <li key={link}><a href="#" className="hover:text-foreground transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground font-light">
            <p>&copy; 2025 Lambda Faucet. Industrial. Refined. Open.</p>
          </div>
        </div>
      </footer>

      <style>{`
        * {
          --font-display: "Oswald", sans-serif;
          --font-mono: "Space Mono", monospace;
          --font-code: "Courier Prime", monospace;
        }
      `}</style>
    </div>
  );
}
