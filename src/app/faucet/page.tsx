"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  useUserStats,
  useGlobalStats,
  useTokenBalance,
  useTimeUntilNextRequest,
  useEstimatedAmount,
  useMyReferralCode,
  useReferralInfo,
} from "@/hooks";

export default function FaucetPage() {
  const { address, isConnected } = useAccount();
  const [copiedCode, setCopiedCode] = useState(false);

  // Fetch real smart contract data
  const { userStats, isLoading: userStatsLoading } = useUserStats();
  const { globalStats, isLoading: globalStatsLoading } = useGlobalStats();
  const { formatted: balance, isLoading: balanceLoading } = useTokenBalance(address);
  const { timeUntilNextRequest } = useTimeUntilNextRequest();
  const { estimatedAmount } = useEstimatedAmount();
  const { referralCode } = useMyReferralCode();
  const { referralInfo } = useReferralInfo();

  const copyToClipboard = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24">
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

          {!isConnected ? (
            <div className="border-4 border-foreground p-20 text-center">
              <p className="text-2xl text-muted-foreground mb-8">Connect your wallet to claim tokens</p>
              <p className="text-sm text-muted-foreground">Use the CONNECT WALLET button in the header</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Request Card */}
            <div className="border-4 border-foreground p-12">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    YOUR BALANCE
                  </p>
                  <div className="text-6xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {balanceLoading ? "..." : balance ?? "0"}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1">LMDA</p>
                </div>

                <div className="border-t-2 border-border pt-8">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    NEXT REQUEST
                  </p>
                  <div className="text-5xl font-black text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                    {timeUntilNextRequest ?? "00:00:00"}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">⏰ Time until next claim available</p>
                </div>

                <div className="border-t-2 border-border pt-8">
                  <p className="text-xs font-black text-muted-foreground tracking-widest mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                    ESTIMATED AMOUNT
                  </p>
                  <div className="text-4xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                    ~{estimatedAmount ?? "0"}
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
                      {userStats.balanceMultiplier}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Time (UTC)</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStats.timeMultiplier}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-muted-foreground">Cooldown</span>
                    <span className="text-2xl font-black" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {userStats.cooldownMultiplier}
                    </span>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-muted-foreground">Final Rate</span>
                      <span className="text-3xl font-black text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                        {userStats.finalRate}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{userStats.balanceMultiplier} × {userStats.timeMultiplier} × {userStats.cooldownMultiplier}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* REFERRAL SECTION */}
      {isConnected && (
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
                  {referralCode ?? "Generate code on first claim"}
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
                    {referralInfo?.referralCount ?? "0"}
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
                    {referralInfo?.totalEarned ?? "0"}
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1">LMDA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* YOUR STATS SECTION */}
      {isConnected && (
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
              { label: "TOTAL RECEIVED", value: userStats?.totalReceived.toString() ?? "0", unit: "LMDA" },
              { label: "TOTAL REQUESTS", value: userStats?.totalRequests.toString() ?? "0", unit: "" },
              { label: "FIRST REQUEST", value: userStats?.firstRequestTime ? new Date(Number(userStats.firstRequestTime) * 1000).toLocaleDateString() : "---", unit: "" },
              { label: "LATEST REQUEST", value: userStats?.lastRequestTime ? new Date(Number(userStats.lastRequestTime) * 1000).toLocaleDateString() : "---", unit: "" },
              { label: "MAX REQUEST", value: userStats?.maxSingleRequest.toString() ?? "0", unit: "LMDA" },
              { label: "AVG REQUEST", value: userStats?.averageRequest.toString() ?? "0", unit: "LMDA" },
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
      )}

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
              { label: "TOTAL DISTRIBUTED", value: globalStats?.totalDistributed.toString() ?? "0", unit: "LMDA" },
              { label: "ACTIVE USERS", value: globalStats?.uniqueUsers.toString() ?? "0", unit: "" },
              { label: "TOTAL REQUESTS", value: globalStats?.totalRequests.toString() ?? "0", unit: "" },
              { label: "FAUCET BALANCE", value: "Calculating...", unit: "LMDA" },
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
