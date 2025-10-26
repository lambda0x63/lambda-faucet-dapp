"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Lambda</span> Faucet
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Home
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Stats
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Docs
            </a>
          </nav>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}
