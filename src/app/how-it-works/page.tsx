"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24">
      <Header />

      {/* HERO */}
      <section className="relative py-24 border-b-4 border-foreground overflow-hidden bg-gradient-to-b from-background via-background to-foreground/5">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="border-l-8 border-foreground pl-8">
            <h1 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              HOW IT WORKS
            </h1>
            <h2
              className="text-xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              protocol mechanics explained
            </h2>
          </div>
        </div>
      </section>

      {/* CORE MECHANICS */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              CORE MECHANICS
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              understanding the distribution system
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "I",
                title: "REQUEST INITIATION",
                desc: "Users connect their wallet and submit a token request. The system validates the request against cooldown timers and blacklist status. Each request is logged for audit purposes.",
              },
              {
                num: "II",
                title: "MULTIPLIER CALCULATION",
                desc: "Three independent multipliers are computed: Balance-based (wallet holding %), Time-based (UTC hour), and Cooldown-based (request frequency). Final amount is base × multiplier1 × multiplier2 × multiplier3.",
              },
              {
                num: "III",
                title: "TOKEN DISTRIBUTION",
                desc: "The calculated amount is minted and transferred to the user's wallet. Transaction is recorded on-chain. Referral bonuses are distributed to referrer if applicable.",
              },
              {
                num: "IV",
                title: "STATISTICS TRACKING",
                desc: "User stats are updated: total received, request count, max/min amounts, timestamps. Global stats are incremented. Multiplier history is recorded for transparency.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="border-4 border-foreground p-6 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="text-6xl font-light text-muted-foreground/40 mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-black mb-2 tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTIPLIER SYSTEM */}
      <section className="relative py-24 border-b-4 border-foreground bg-card/30">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              MULTIPLIER SYSTEM
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              dynamic reward adjustment
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BALANCE MULTIPLIER",
                desc: "Based on user's current wallet holdings. Incentivizes long-term token retention.",
                tiers: ["100-75%: 100%", "75-50%: 80%", "50-25%: 50%", "25-10%: 30%", "<10%: 10%"],
              },
              {
                title: "TIME MULTIPLIER (UTC)",
                desc: "Varies by hour to distribute load. Peak hours (08:00-16:00) have standard rates.",
                tiers: ["00:00-08:00: 120%", "08:00-16:00: 100%", "16:00-24:00: 80%"],
              },
              {
                title: "COOLDOWN MULTIPLIER",
                desc: "Increases with request frequency. Rewards consistent engagement and participation.",
                tiers: ["0-10 req/hr: 1x", "11-50 req/hr: 2x", "51-100 req/hr: 4x", "100+ req/hr: 8x"],
              },
            ].map((system, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {system.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {system.desc}
                </p>
                <div className="space-y-1 border-t border-foreground pt-3">
                  {system.tiers.map((tier, tierIdx) => (
                    <div key={tierIdx} className="text-xs font-mono text-muted-foreground">
                      {tier}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERRAL SYSTEM */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              REFERRAL SYSTEM
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              network growth incentives
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-4 border-foreground p-6">
              <h3 className="text-sm font-black mb-4 pb-2 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                HOW REFERRALS WORK
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-foreground pl-3">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    GENERATE CODE
                  </p>
                  <p className="text-xs text-muted-foreground">Your unique referral code is auto-generated on first claim. Share it with friends.</p>
                </div>
                <div className="border-l-4 border-foreground pl-3">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    FRIEND JOINS
                  </p>
                  <p className="text-xs text-muted-foreground">Friend enters your code when making their first claim. Link is established on-chain.</p>
                </div>
                <div className="border-l-4 border-foreground pl-3">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    EARN REWARDS
                  </p>
                  <p className="text-xs text-muted-foreground">You earn 10% of their claim amount every time they request tokens. Passive income stream.</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-foreground p-6">
              <h3 className="text-sm font-black mb-4 pb-2 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                REFERRAL RULES
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="text-lg font-black text-foreground flex-shrink-0" style={{ fontFamily: "Oswald, sans-serif" }}>✓</div>
                  <p className="text-xs text-muted-foreground">No self-referral allowed. Contract prevents circular gains.</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-lg font-black text-foreground flex-shrink-0" style={{ fontFamily: "Oswald, sans-serif" }}>✓</div>
                  <p className="text-xs text-muted-foreground">Unlimited referral chain depth. Your referrals can refer others.</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-lg font-black text-foreground flex-shrink-0" style={{ fontFamily: "Oswald, sans-serif" }}>✓</div>
                  <p className="text-xs text-muted-foreground">Rewards distributed instantly. No withdrawal delays.</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-lg font-black text-foreground flex-shrink-0" style={{ fontFamily: "Oswald, sans-serif" }}>✓</div>
                  <p className="text-xs text-muted-foreground">Trustless system. Smart contract enforces all rules automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & DESIGN */}
      <section className="relative py-24 border-b-4 border-foreground bg-card/30">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              DESIGN PHILOSOPHY
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              principles & approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "MODULARITY",
                desc: "Six independent smart contracts work together. Each contract has single responsibility. Easy to upgrade or replace components without touching entire system.",
              },
              {
                title: "TRANSPARENCY",
                desc: "All transactions on-chain. All calculations deterministic. Users can verify their stats and rewards. No hidden mechanics or RNG.",
              },
              {
                title: "FAIRNESS",
                desc: "Multiplier system rewards consistent users. Balance check prevents whale dominance. Time distribution prevents timezone bias. No admin discretion.",
              },
              {
                title: "SECURITY",
                desc: "Reentrancy guards prevent exploits. Ownable2Step prevents accidental ownership loss. Pausable for emergency response. Input validation on all parameters.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
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
