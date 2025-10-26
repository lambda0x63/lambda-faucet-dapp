"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24">
      <Header />

      {/* HERO */}
      <section className="relative py-24 border-b-4 border-foreground overflow-hidden bg-gradient-to-b from-background via-background to-foreground/5">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="border-l-8 border-foreground pl-8">
            <h1 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              SMART CONTRACTS
            </h1>
            <h2
              className="text-xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              solidity implementation
            </h2>
          </div>
        </div>
      </section>

      {/* CONTRACTS */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              CORE CONTRACTS
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              modular architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "I",
                title: "TOKEN.SOL",
                desc: "ERC-20 Lambda Token implementation. Standard token contract for LMDA token with mint and burn capabilities.",
              },
              {
                num: "II",
                title: "LAMBDAFAUCET.SOL",
                desc: "Main hub contract. Orchestrates all modules. Handles token requests with reentrancy guards and security checks.",
              },
              {
                num: "III",
                title: "FAUCETADMIN.SOL",
                desc: "Administrative controls. Ownable2Step pattern. Pause/unpause functionality. Blacklist management. Dynamic parameter configuration.",
              },
              {
                num: "IV",
                title: "REFERRALSYSTEM.SOL",
                desc: "Referral logic. Auto-generated referral codes. Bonus distribution. Prevents self-referral. Trustless implementation.",
              },
              {
                num: "V",
                title: "FAUCETSTATS.SOL",
                desc: "Comprehensive statistics tracking. Per-user metrics. Global aggregation. On-chain data persistence.",
              },
              {
                num: "VI",
                title: "FAUCETMATH.SOL",
                desc: "Calculation library. Multiplier logic (balance, time, cooldown). Bonus calculations. Gas-optimized math.",
              },
            ].map((contract, idx) => (
              <div
                key={idx}
                className="border-4 border-foreground p-6 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="text-6xl font-light text-muted-foreground/40 mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {contract.num}
                </div>
                <h3 className="text-lg font-black mb-2 tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {contract.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {contract.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="relative py-24 border-b-4 border-foreground bg-card/30">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              SECURITY
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              audit & standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "REENTRANCY GUARD", desc: "OpenZeppelin ReentrancyGuard prevents reentrancy attacks on state-changing functions." },
              { title: "OWNABLE2STEP", desc: "Two-step ownership transfer prevents accidental ownership loss. Safer than standard Ownable." },
              { title: "PAUSABLE", desc: "Emergency pause mechanism. Owner can pause/unpause protocol in case of security issues." },
              { title: "INPUT VALIDATION", desc: "All parameters validated on entry. Type checking and range verification throughout." },
              { title: "OVERFLOW PROTECTION", desc: "Solidity 0.8.27 automatically prevents integer overflow/underflow." },
              { title: "BLACKLIST SYSTEM", desc: "Admin-controlled blacklist prevents malicious actors from participating." },
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

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
