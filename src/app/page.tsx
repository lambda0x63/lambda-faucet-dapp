"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Gift, TrendingUp, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section - Gallery Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center space-y-8">
          <Badge className="mx-auto animate-fade-in" variant="outline">
            ✨ Web3 Faucet Platform
          </Badge>

          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Lambda Faucet
          </h1>

          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the future of token distribution. <span className="text-foreground font-semibold">Dynamic rewards</span> tailored to your journey.
          </p>

          <div className="flex gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="group">
              Connect Wallet
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Gallery - Floating Cards */}
      <section className="relative py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-bold text-center mb-4">By The Numbers</h2>
          <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
            A thriving ecosystem of token seekers and reward earners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500K", label: "Total Distributed", icon: "📊", delay: "0s" },
              { value: "12.5K", label: "Active Users", icon: "👥", delay: "0.1s" },
              { value: "45.2K", label: "Total Requests", icon: "⚡", delay: "0.2s" },
              { value: "100 LMDA", label: "Base Reward", icon: "💎", delay: "0.3s" },
            ].map((stat, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
                className="group cursor-pointer"
                style={{
                  animation: `slideUp 0.6s ease-out ${stat.delay} both`,
                }}
              >
                <Card
                  className={`p-8 text-center h-full backdrop-blur-sm border transition-all duration-300 ${
                    hoveredStat === idx
                      ? "scale-105 shadow-2xl border-primary"
                      : "hover:shadow-lg"
                  }`}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black text-primary mb-3">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Gallery Exhibition */}
      <section className="py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">The Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four pillars of an exceptional token distribution experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                Icon: Zap,
                title: "Dynamic Rewards",
                description:
                  "Your earnings multiply based on your balance, time of day, and request frequency.",
                color: "from-blue-500 to-cyan-500",
                icon_bg: "bg-blue-100 dark:bg-blue-900",
              },
              {
                Icon: Gift,
                title: "Referral Bonuses",
                description:
                  "Invite friends and earn 10% rewards. New users get 20% bonus on their first claim.",
                color: "from-green-500 to-emerald-500",
                icon_bg: "bg-green-100 dark:bg-green-900",
              },
              {
                Icon: TrendingUp,
                title: "Real-time Stats",
                description:
                  "Beautiful analytics dashboard tracking your earnings and referral network growth.",
                color: "from-purple-500 to-pink-500",
                icon_bg: "bg-purple-100 dark:bg-purple-900",
              },
              {
                Icon: Shield,
                title: "Secure & Audited",
                description:
                  "Built with OpenZeppelin standards, reentrancy guards, and comprehensive security.",
                color: "from-orange-500 to-red-500",
                icon_bg: "bg-orange-100 dark:bg-orange-900",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group"
                style={{
                  animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div
                  className={`p-10 rounded-xl border border-border/50 backdrop-blur-sm transition-all duration-300 cursor-pointer h-full ${
                    hoveredFeature === idx
                      ? "border-primary shadow-2xl scale-105"
                      : "hover:border-primary/50 hover:shadow-lg"
                  }`}
                >
                  <div className={`p-4 rounded-lg ${feature.icon_bg} w-fit mb-6`}>
                    <feature.Icon className="w-8 h-8 text-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${feature.color} w-0 group-hover:w-full transition-all duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiplier System - Artistic Display */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-5xl font-bold text-center mb-20">
            The Multiplier System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Balance-Based",
                multipliers: [
                  { range: "100-75%", value: "100%", color: "bg-green-500" },
                  { range: "75-50%", value: "80%", color: "bg-blue-500" },
                  { range: "50-25%", value: "50%", color: "bg-yellow-500" },
                  { range: "25-10%", value: "30%", color: "bg-orange-500" },
                  { range: "<10%", value: "10%", color: "bg-red-500" },
                ],
              },
              {
                title: "Time-Based (UTC)",
                multipliers: [
                  { range: "00:00-08:00", value: "120%", color: "bg-green-500" },
                  { range: "08:00-16:00", value: "100%", color: "bg-blue-500" },
                  { range: "16:00-24:00", value: "80%", color: "bg-orange-500" },
                ],
              },
              {
                title: "Cooldown-Adjusted",
                multipliers: [
                  { range: "0-10 req/hr", value: "1x", color: "bg-blue-500" },
                  { range: "11-50 req/hr", value: "2x", color: "bg-purple-500" },
                  { range: "51-100 req/hr", value: "4x", color: "bg-pink-500" },
                  { range: "100+ req/hr", value: "8x", color: "bg-red-500" },
                ],
              },
            ].map((system, idx) => (
              <div
                key={idx}
                className="group"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.2}s both`,
                }}
              >
                <Card className="p-8 h-full border-2 border-border/50 hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-8 group-hover:text-primary transition-colors">
                    {system.title}
                  </h3>

                  <div className="space-y-4">
                    {system.multipliers.map((mult, midx) => (
                      <div
                        key={midx}
                        className="flex items-center justify-between p-3 rounded-lg bg-card/50 hover:bg-card transition-colors"
                      >
                        <span className="text-sm font-medium">{mult.range}</span>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-3 h-3 rounded-full ${mult.color}`}
                          ></div>
                          <span className="font-bold text-primary">
                            {mult.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Gallery Exit */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center space-y-8">
          <h2 className="text-5xl font-bold animate-fade-in">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join thousands of token seekers earning rewards. No complicated steps, no barriers to entry.
          </p>
          <div className="flex gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="group">
              Start Earning
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Lambda</h3>
              <p className="text-sm text-muted-foreground">
                Elegant token distribution for the Web3 era.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Docs</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contract</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Lambda Faucet. Beautifully crafted for Web3.</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
