"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function FaucetPage() {
  const [copiedCode, setCopiedCode] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0x3a4f7c8e9b2d5f1a");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* HERO - FAUCET HEADER */}
      <section className="relative py-40 border-b-4 border-foreground overflow-hidden bg-gradient-to-b from-background via-background to-foreground/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-1/2 h-full opacity-20 pointer-events-none -translate-y-1/2">
            {/* Asset: Measurement tools, gauges */}
          </div>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="space-y-6">
            <div className="border-l-8 border-foreground pl-8">
              <h1 className="text-7xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                CLAIM
              </h1>
              <h2
                className="text-3xl font-light text-muted-foreground"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                token distribution interface
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST SECTION */}
      <section className="relative py-40 border-b-4 border-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-0 w-3/5 h-full opacity-15 pointer-events-none">
            {/* Asset: Large industrial structures */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              REQUEST
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              claim your tokens
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Request Card */}
            <div className="border-4 border-foreground p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    YOUR BALANCE
                  </p>
                  <div className="text-6xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    0
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1">LMDA</p>
                </div>

                <div className="border-t-2 border-border pt-8">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    NEXT REQUEST
                  </p>
                  <div className="text-5xl font-black text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                    00:45:23
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">⏰ Time until next claim available</p>
                </div>

                <div className="border-t-2 border-border pt-8">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    ESTIMATED AMOUNT
                  </p>
                  <div className="text-4xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    ~100
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1">LMDA (after multipliers)</p>
                </div>

                <Button
                  size="lg"
                  className="w-full px-12 py-6 text-lg font-bold border-2 border-foreground"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  REQUEST TOKENS
                </Button>
              </div>
            </div>

            {/* Current Multipliers */}
            <div className="border-4 border-foreground p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                    CURRENT MULTIPLIERS
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Balance</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      80%
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Time (UTC)</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      100%
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Cooldown</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      2x
                    </span>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-muted-foreground">Final Rate</span>
                      <span className="text-3xl font-black text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                        160%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">80% × 100% × 2x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL SECTION */}
      <section className="relative py-40 border-b-4 border-foreground bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            {/* Asset: Mechanical gears, machines */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              NETWORK
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              referral & rewards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Referral Code */}
            <div className="border-4 border-foreground p-12">
              <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                YOUR CODE
              </h3>
              <div className="space-y-4">
                <div className="bg-foreground/10 p-4 border border-foreground font-mono text-sm break-all">
                  0x3a4f7c8e9b2d5f1a
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-foreground"
                  onClick={copyToClipboard}
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {copiedCode ? "COPIED!" : "COPY CODE"}
                </Button>
              </div>
            </div>

            {/* Referral Stats */}
            <div className="border-4 border-foreground p-12">
              <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                REFERRALS
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    INVITED
                  </p>
                  <div className="text-5xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    7
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">people</p>
                </div>
              </div>
            </div>

            {/* Rewards Earned */}
            <div className="border-4 border-foreground p-12">
              <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                EARNED
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    TOTAL REWARDS
                  </p>
                  <div className="text-5xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    70
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1">LMDA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR STATS SECTION */}
      <section className="relative py-40 border-b-4 border-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              HISTORY
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              your personal statistics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "TOTAL RECEIVED", value: "1,500", unit: "LMDA" },
              { label: "TOTAL REQUESTS", value: "15", unit: "" },
              { label: "FIRST REQUEST", value: "2025-10-01", unit: "" },
              { label: "LATEST REQUEST", value: "2025-10-26", unit: "" },
              { label: "MAX REQUEST", value: "200", unit: "LMDA" },
              { label: "AVG REQUEST", value: "100", unit: "LMDA" },
            ].map((stat, idx) => (
              <div key={idx} className="border-4 border-foreground p-8 text-center">
                <p
                  className="text-xs font-black text-muted-foreground tracking-widest mb-3"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {stat.label}
                </p>
                <div className="text-4xl font-black mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {stat.value}
                </div>
                {stat.unit && <p className="text-sm text-muted-foreground font-mono">{stat.unit}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL STATS SECTION */}
      <section className="relative py-40 border-b-4 border-foreground bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-1/2 h-full opacity-25 pointer-events-none -translate-y-1/2">
            {/* Asset: Measurement tools */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              NETWORK
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              global statistics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground">
            {[
              { label: "TOTAL DISTRIBUTED", value: "500K", unit: "LMDA" },
              { label: "ACTIVE USERS", value: "1,234", unit: "" },
              { label: "TOTAL REQUESTS", value: "45,678", unit: "" },
              { label: "FAUCET BALANCE", value: "250K", unit: "LMDA" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`p-12 border-r-2 border-b-2 border-foreground hover:bg-foreground/10 transition-all duration-300 ${
                  idx === 3 ? "border-r-0" : ""
                } ${idx > 1 ? "border-b-0" : ""}`}
              >
                <p
                  className="text-xs font-black text-muted-foreground tracking-widest mb-4"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {stat.label}
                </p>
                <div className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {stat.value}
                </div>
                {stat.unit && <p className="text-sm text-muted-foreground font-mono">{stat.unit}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-foreground py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b-2 border-foreground">
            <div>
              <h3 className="font-black text-2xl mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                λ LAMBDA
              </h3>
              <p className="text-sm text-muted-foreground font-light">
                Function-based token distribution protocol built on Solidity. By lambda0x63.
              </p>
            </div>
            {[
              ["Protocol", ["Contract ABI", "Mechanics", "Parameters"]],
              ["Developer", ["GitHub", "Twitter", "Docs"]],
              ["Network", ["Testnet", "Status", "Explore"]],
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {col[0]}
                </h4>
                <ul className="text-sm space-y-2 text-muted-foreground font-light">
                  {(col[1] as string[]).map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-foreground transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground font-light">
            <p>&copy; 2025 Lambda Protocol. Built by lambda0x63.</p>
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
