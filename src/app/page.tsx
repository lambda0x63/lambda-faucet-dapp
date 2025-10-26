"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [hoveredExhibit, setHoveredExhibit] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />

      {/* Hero Section - Main Exhibition Space */}
      <section className="relative min-h-screen flex items-center justify-center border-b border-border">
        {/* Background asset container */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20"></div>
          {/* Asset slots - User provides transparent PNG/SVG */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-40">
            {/* Asset Slot 1: Hero right side */}
          </div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-30">
            {/* Asset Slot 2: Hero left bottom */}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-6xl px-8 text-left space-y-8">
          <div className="max-w-2xl">
            <h1 className="text-7xl md:text-8xl font-black text-foreground mb-6 leading-none">
              Lambda
              <br />
              Faucet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              An exhibition of token distribution. Where earning meets innovation.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8">
                Enter Exhibition
              </Button>
              <Button variant="outline" size="lg">
                Exhibition Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Hall 1 - Statistics Display */}
      <section className="relative py-32 border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset Slot 3: Stats background elements */}
          <div className="absolute top-20 right-10 w-96 h-96 opacity-20">
            {/* Asset Slot for Stats section */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4">Exhibition Metrics</h2>
            <p className="text-muted-foreground text-lg">
              Measurements of a thriving ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Distributed", value: "500K LMDA", accent: "border-blue-500" },
              { label: "Active Visitors", value: "12.5K", accent: "border-purple-500" },
              { label: "Total Interactions", value: "45.2K", accent: "border-cyan-500" },
              { label: "Base Exhibition", value: "100 LMDA", accent: "border-emerald-500" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`border-l-4 ${stat.accent} bg-card/40 backdrop-blur-sm p-6 hover:bg-card/60 transition-all duration-300 hover:shadow-lg cursor-default`}
              >
                <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Hall 2 - Features/Exhibits */}
      <section className="relative py-32 border-b border-border bg-card/30">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset Slot 4: Features background */}
          <div className="absolute -top-32 left-1/4 w-1/2 h-full opacity-15 pointer-events-none">
            {/* Large background asset */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4">Exhibition Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Four pillars of this industrial-era token distribution museum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                num: "01",
                title: "Dynamic Multipliers",
                desc: "Rewards that shift with your balance, time, and activity. A system that adapts to its participants.",
              },
              {
                num: "02",
                title: "Referral Networks",
                desc: "Build your network of fellow seekers. 10% rewards for each connection, 20% for newcomers.",
              },
              {
                num: "03",
                title: "Real-time Analytics",
                desc: "Live tracking of your journey through the exhibition. Charts, statistics, and growth metrics.",
              },
              {
                num: "04",
                title: "Secure Architecture",
                desc: "Built on OpenZeppelin standards. Reentrancy guards. Comprehensive security measures.",
              },
            ].map((exhibit, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredExhibit(idx)}
                onMouseLeave={() => setHoveredExhibit(null)}
                className={`border border-border bg-background/50 backdrop-blur-sm p-8 transition-all duration-300 ${
                  hoveredExhibit === idx
                    ? "border-foreground shadow-2xl"
                    : "hover:border-muted-foreground/50"
                }`}
              >
                <div className="text-6xl font-black text-muted-foreground/30 mb-4">
                  {exhibit.num}
                </div>
                <h3 className="text-2xl font-black mb-4">{exhibit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exhibit.desc}
                </p>
                <div
                  className={`h-0.5 bg-foreground mt-6 transition-all duration-300 ${
                    hoveredExhibit === idx ? "w-16" : "w-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Hall 3 - Multiplier System Display */}
      <section className="relative py-32 border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset Slot 5: Multiplier system decorative elements */}
          <div className="absolute bottom-0 right-0 w-2/5 h-full opacity-10 pointer-events-none">
            {/* Gears, mechanical elements */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4">Multiplier Mechanisms</h2>
            <p className="text-muted-foreground text-lg">
              Three systems working in harmony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Balance-Based",
                items: [
                  { range: "100-75%", mult: "100%", color: "bg-emerald-500/20" },
                  { range: "75-50%", mult: "80%", color: "bg-cyan-500/20" },
                  { range: "50-25%", mult: "50%", color: "bg-yellow-500/20" },
                  { range: "25-10%", mult: "30%", color: "bg-orange-500/20" },
                  { range: "<10%", mult: "10%", color: "bg-red-500/20" },
                ],
              },
              {
                title: "Time-Based (UTC)",
                items: [
                  { range: "00:00-08:00", mult: "120%", color: "bg-emerald-500/20" },
                  { range: "08:00-16:00", mult: "100%", color: "bg-cyan-500/20" },
                  { range: "16:00-24:00", mult: "80%", color: "bg-orange-500/20" },
                ],
              },
              {
                title: "Cooldown-Adjusted",
                items: [
                  { range: "0-10 req/hr", mult: "1x", color: "bg-cyan-500/20" },
                  { range: "11-50 req/hr", mult: "2x", color: "bg-purple-500/20" },
                  { range: "51-100 req/hr", mult: "4x", color: "bg-pink-500/20" },
                  { range: "100+ req/hr", mult: "8x", color: "bg-red-500/20" },
                ],
              },
            ].map((system, idx) => (
              <div key={idx} className="border border-border bg-background/50 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-black mb-6 pb-4 border-b border-border">
                  {system.title}
                </h3>
                <div className="space-y-3">
                  {system.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`flex justify-between items-center p-3 rounded ${item.color} border border-border/50 transition-all hover:border-border`}
                    >
                      <span className="text-sm font-medium">{item.range}</span>
                      <span className="font-black text-foreground">{item.mult}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Hall 4 - Interactive Elements */}
      <section className="relative py-32 border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset Slot 6: Interactive section background */}
          <div className="absolute inset-0 opacity-5">
            {/* Pattern or texture asset */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Your journey through the exhibition in three steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect & Enter",
                desc: "Link your wallet to access the exhibition. No registration, no barriers.",
              },
              {
                step: "2",
                title: "Claim Your Reward",
                desc: "Request tokens. Your reward is calculated by the multiplier system in real-time.",
              },
              {
                step: "3",
                title: "Track & Grow",
                desc: "Watch your earnings accumulate. Invite others. Build your network.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="border-2 border-dashed border-border bg-card/40 backdrop-blur-sm p-8 text-center">
                  <div className="text-6xl font-black text-muted-foreground/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-black mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-2xl text-border">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call - Exhibition Exit */}
      <section className="relative py-32 border-b border-border bg-card/50">
        <div className="absolute inset-0 overflow-hidden">
          {/* Asset Slot 7: Final section background elements */}
          <div className="absolute top-1/2 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none">
            {/* Final decorative asset */}
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl px-8 text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-black">
            Begin Your
            <br />
            Exhibition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step into the future of token distribution. No complexity. No fees. Just rewards.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-12">
              Enter Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Exhibition Info */}
      <footer className="border-t border-border py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-black text-lg mb-4">Lambda Faucet</h3>
              <p className="text-sm text-muted-foreground">
                A museum of token distribution. Industrial, refined, and open to all.
              </p>
            </div>
            <div>
              <h3 className="font-black mb-4">Exhibition</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contract</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black mb-4">Community</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black mb-4">Legal</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Lambda Faucet. An industrial museum of rewards.</p>
          </div>
        </div>
      </footer>

      <style>{`
        /* Asset placeholder styles - for transparent PNGs/SVGs */
        div[class*="opacity-"] {
          /* These divs are ready for background-image assets */
        }
      `}</style>
    </div>
  );
}
