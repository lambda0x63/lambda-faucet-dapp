"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <h1
            className="text-3xl font-black tracking-tighter hover:opacity-70 transition-opacity"
            style={{fontFamily: "Oswald, sans-serif"}}
          >
            ⬜ LAMBDA
          </h1>

          {/* Divider */}
          <div className="hidden md:block h-8 w-0.5 bg-foreground"></div>

          {/* Nav */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              STATS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              DOCS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        {/* Connect Button */}
        <div className="flex items-center gap-4">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
