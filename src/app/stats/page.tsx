"use client";

import { useAccount } from "wagmi";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useUserStats, useGlobalStats } from "@/hooks";

export default function StatsPage() {
  const { address, isConnected } = useAccount();

  // Fetch real smart contract data
  const { userStats, isLoading: userStatsLoading } = useUserStats();
  const { globalStats, isLoading: globalStatsLoading } = useGlobalStats();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24">
      <Header />

      {/* HERO - STATS HEADER */}
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
                ANALYTICS
              </h1>
              <h2
                className="text-3xl font-light text-muted-foreground"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                detailed statistics & reports
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL STATS SECTION */}
      <section className="relative py-40 border-b-4 border-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-0 w-3/5 h-full opacity-15 pointer-events-none">
            {/* Asset: Large industrial structures */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              PERSONAL
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              your activity overview
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Stats Grid */}
            <div className="space-y-8">
              <div className="border-4 border-foreground p-12">
                <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  CUMULATIVE EARNINGS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Total Received</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStatsLoading ? "..." : userStats?.totalReceived.toString() ?? "0"} LMDA
                    </span>
                  </div>
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Total Requests</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStatsLoading ? "..." : userStats?.totalRequests.toString() ?? "0"}
                    </span>
                  </div>
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Average per Request</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStatsLoading ? "..." : userStats?.averageRequest.toString() ?? "0"} LMDA
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-4 border-foreground p-12">
                <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  REQUEST PATTERNS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">First Request</span>
                    <span className="text-lg font-mono">{userStatsLoading ? "..." : userStats?.firstRequestTime ? new Date(Number(userStats.firstRequestTime) * 1000).toLocaleDateString() : "---"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Latest Request</span>
                    <span className="text-lg font-mono">{userStatsLoading ? "..." : userStats?.lastRequestTime ? new Date(Number(userStats.lastRequestTime) * 1000).toLocaleDateString() : "---"}</span>
                  </div>
                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Max in Single Request</span>
                    <span className="text-xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStatsLoading ? "..." : userStats?.maxSingleRequest.toString() ?? "0"} LMDA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiplier History */}
            <div className="border-4 border-foreground p-12">
              <h3 className="text-2xl font-black mb-6 pb-4 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                MULTIPLIER HISTORY
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-foreground pl-4">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    CURRENT BALANCE
                  </p>
                  <p className="font-mono text-muted-foreground">{userStatsLoading ? "..." : "Calculating..."} multiplier</p>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    TIME BASED
                  </p>
                  <p className="font-mono text-muted-foreground">{userStatsLoading ? "..." : "Calculating..."}</p>
                </div>
                <div className="border-l-4 border-foreground pl-4">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-1" style={{ fontFamily: "Oswald, sans-serif" }}>
                    COOLDOWN
                  </p>
                  <p className="font-mono text-muted-foreground">{userStatsLoading ? "..." : "Calculating..."}</p>
                </div>
                <div className="border-t-2 border-foreground pt-6">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    EFFECTIVE RATE
                  </p>
                  <p className="text-3xl font-black text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {userStatsLoading ? "..." : "Calculating..."}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">---</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM MECHANICS SECTION */}
      <section className="relative py-40 border-b-4 border-foreground bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            {/* Asset: Mechanical gears, machines */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-20 border-l-8 border-foreground pl-8">
            <h2 className="text-7xl font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              MECHANICS
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              system parameters breakdown
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BALANCE MULTIPLIER",
                items: ["100-75% : 100%", "75-50% : 80%", "50-25% : 50%", "25-10% : 30%", "<10% : 10%"],
              },
              {
                title: "TIME MULTIPLIER (UTC)",
                items: ["00:00-08:00 : 120%", "08:00-16:00 : 100%", "16:00-24:00 : 80%"],
              },
              {
                title: "COOLDOWN MULTIPLIER",
                items: ["0-10 req/hr : 1x", "11-50 req/hr : 2x", "51-100 req/hr : 4x", "100+ req/hr : 8x"],
              },
            ].map((system, idx) => (
              <div key={idx} className="border-4 border-foreground p-10">
                <h3 className="text-2xl font-black mb-8 pb-6 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {system.title}
                </h3>
                <div className="space-y-4">
                  {system.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between text-lg">
                      <span className="font-mono text-muted-foreground">{item.split(" : ")[0]}</span>
                      <span className="font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                        {item.split(" : ")[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK OVERVIEW SECTION */}
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
              ECOSYSTEM
            </h2>
            <h3
              className="text-3xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              network wide metrics
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground">
            {[
              { label: "TOTAL DISTRIBUTED", value: globalStatsLoading ? "..." : globalStats?.totalDistributed.toString() ?? "0", unit: "LMDA" },
              { label: "ACTIVE USERS", value: globalStatsLoading ? "..." : globalStats?.uniqueUsers.toString() ?? "0", unit: "" },
              { label: "TOTAL REQUESTS", value: globalStatsLoading ? "..." : globalStats?.totalRequests.toString() ?? "0", unit: "" },
              { label: "FAUCET BALANCE", value: globalStatsLoading ? "..." : "Calculating...", unit: "LMDA" },
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
