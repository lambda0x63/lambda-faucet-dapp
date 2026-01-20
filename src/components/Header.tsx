"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`border-b-2 border-foreground fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background" : "bg-transparent"
    }`}>
      <div className="w-full px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6 ml-8">
          <h1
            className="text-3xl font-black tracking-tighter hover:opacity-70 transition-opacity"
            style={{fontFamily: "Oswald, sans-serif"}}
          >
            λ LAMBDA
          </h1>

          {/* Divider */}
          <div className="hidden md:block h-8 w-0.5 bg-foreground"></div>

          {/* Nav */}
          <nav className="hidden md:flex gap-8">
            <a
              href="/"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/faucet"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              FAUCET
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/stats"
              className="text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              style={{fontFamily: "Space Mono, monospace"}}
            >
              STATS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        {/* Connect Button */}
        <div className="ml-auto mr-4">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
