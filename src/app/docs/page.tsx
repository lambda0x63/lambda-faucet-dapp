"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-24">
      <Header />

      {/* HERO */}
      <section className="relative py-24 border-b-4 border-foreground overflow-hidden bg-gradient-to-b from-background via-background to-foreground/5">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="border-l-8 border-foreground pl-8">
            <h1 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              DOCUMENTATION
            </h1>
            <h2
              className="text-xl font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              complete protocol reference
            </h2>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              GETTING STARTED
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              quick start guide
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "INSTALL METAMASK",
                desc: "Download MetaMask browser extension. Create or import wallet. This is your key to the protocol.",
              },
              {
                step: "2",
                title: "SWITCH TO TESTNET",
                desc: "Lambda runs on Sepolia testnet. Add Sepolia to your MetaMask wallet. You'll need Sepolia ETH for gas.",
              },
              {
                step: "3",
                title: "VISIT FAUCET",
                desc: "Navigate to /faucet page. Click Connect Wallet button in header. Approve MetaMask connection.",
              },
              {
                step: "4",
                title: "REQUEST TOKENS",
                desc: "Click REQUEST TOKENS button. Approve transaction in MetaMask. Wait for confirmation. Tokens appear in wallet.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-foreground p-6 hover:bg-foreground/10 transition-all duration-300">
                <div className="text-6xl font-light text-muted-foreground/40 mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-black mb-2 tracking-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API REFERENCE */}
      <section className="relative py-24 border-b-4 border-foreground bg-card/30">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              API REFERENCE
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              smart contract interfaces
            </h3>
          </div>

          <div className="space-y-8">
            {[
              {
                contract: "LambdaFaucet",
                functions: [
                  { name: "requestTokens()", returns: "uint256", desc: "Request tokens for user. Returns amount distributed." },
                  { name: "estimateAmount(address)", returns: "uint256", desc: "Calculate estimated tokens without executing." },
                  { name: "getBalance(address)", returns: "uint256", desc: "Check user's current token balance." },
                  { name: "getNextClaimTime(address)", returns: "uint256", desc: "Get Unix timestamp of next allowed claim." },
                ],
              },
              {
                contract: "ReferralSystem",
                functions: [
                  { name: "generateCode()", returns: "bytes32", desc: "Generate unique referral code for caller." },
                  { name: "useCode(bytes32)", returns: "bool", desc: "Apply referral code to account." },
                  { name: "getReferralInfo(address)", returns: "tuple", desc: "Get referrer, referrals count, earned amount." },
                  { name: "claimReferralRewards()", returns: "uint256", desc: "Claim pending referral bonuses." },
                ],
              },
              {
                contract: "FaucetStats",
                functions: [
                  { name: "getStats(address)", returns: "tuple", desc: "Get complete stats object for user." },
                  { name: "getTotalDistributed()", returns: "uint256", desc: "Get global amount distributed by protocol." },
                  { name: "getActiveUsers()", returns: "uint256", desc: "Get count of addresses that claimed tokens." },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-4 pb-2 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {section.contract}
                </h3>
                <div className="space-y-3">
                  {section.functions.map((func, funcIdx) => (
                    <div key={funcIdx} className="border-l-4 border-foreground pl-3">
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <code className="text-xs font-mono font-black text-foreground bg-foreground/10 px-2 py-1">
                          {func.name}
                        </code>
                        <span className="text-xs font-mono text-muted-foreground">→ {func.returns}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{func.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              FAQ
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              common questions answered
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How often can I claim tokens?",
                a: "Minimum 1 hour between claims. The system enforces cooldown on-chain. Timer shown on faucet page.",
              },
              {
                q: "What's the maximum I can claim?",
                a: "Base amount is 100 LMDA. Multipliers can increase this up to 800 LMDA (100 × 100% × 100% × 8x) at optimal conditions.",
              },
              {
                q: "Is my data safe?",
                a: "All data is on-chain. Your wallet controls your tokens. Contract cannot unilaterally move funds. Only owner can pause protocol.",
              },
              {
                q: "Can I lose my tokens?",
                a: "Balance multiplier incentivizes holding. You won't lose claimed tokens. Contract has no burn mechanism affecting users.",
              },
              {
                q: "How do multipliers work together?",
                a: "Multiplicative: Final = Base × Balance × Time × Cooldown. Example: 100 × 0.80 × 1.0 × 2.0 = 160 LMDA.",
              },
              {
                q: "Can I use multiple wallets?",
                a: "Yes. Each address tracked separately. Multiplier bonus applies per-wallet based on holdings.",
              },
              {
                q: "How is the protocol governed?",
                a: "Owner can pause/unpause and manage blacklist. ReferralSystem and stats are immutable. No democracy voting.",
              },
              {
                q: "Is there a token supply cap?",
                a: "No hard cap. Protocol can mint indefinitely. Real limit is faucet balance allocation and gas costs.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.q}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="relative py-24 border-b-4 border-foreground bg-card/30">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              TROUBLESHOOTING
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              solve common issues
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                issue: "WALLET NOT CONNECTING",
                solution: "Check MetaMask is installed. Refresh page. Try hard refresh (Cmd+Shift+R). Check console for errors.",
              },
              {
                issue: "WRONG NETWORK",
                solution: "MetaMask shows current network top-left. Click and switch to Sepolia. Add if missing.",
              },
              {
                issue: "INSUFFICIENT GAS",
                solution: "Each claim costs ~50k gas. Need Sepolia ETH in wallet. Get free Sepolia ETH from faucet.sepolia.dev",
              },
              {
                issue: "CLAIM BUTTON DISABLED",
                solution: "Check cooldown timer. Can only claim once per hour. Wait until timer reaches zero.",
              },
              {
                issue: "TRANSACTION FAILED",
                solution: "Check MetaMask popup for error. Common: low gas, insufficient balance, or contract paused.",
              },
              {
                issue: "BLACKLISTED",
                solution: "Contract returned 'address blacklisted' error. Contact admin if this is wrong. Check stats page.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-2 pb-1 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {item.issue}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="relative py-24 border-b-4 border-foreground">
        <div className="relative z-10 container mx-auto max-w-7xl px-8">
          <div className="mb-12 border-l-8 border-foreground pl-8">
            <h2 className="text-5xl font-black mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              RESOURCES
            </h2>
            <h3
              className="text-lg font-light text-muted-foreground"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              external tools & references
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ESSENTIAL TOOLS",
                items: [
                  "MetaMask: wallet.metamask.io",
                  "Sepolia Faucet: faucet.sepolia.dev",
                  "Block Explorer: sepolia.etherscan.io",
                  "Network Info: chainlist.org",
                ],
              },
              {
                title: "LEARNING RESOURCES",
                items: [
                  "Ethereum Basics: ethereum.org/developers",
                  "Solidity Docs: docs.soliditylang.org",
                  "Web3.js Guide: docs.web3js.org",
                  "Hardhat Tutorial: hardhat.org/docs",
                ],
              },
              {
                title: "PROTOCOL REPO",
                items: [
                  "Frontend: github.com/lambda0x63/lambda-faucet-dapp",
                  "Backend: [Coming Soon]",
                  "Contracts: [Coming Soon]",
                  "Issues: github.com/lambda0x63/issues",
                ],
              },
              {
                title: "LEGAL & SECURITY",
                items: [
                  "Privacy Policy: /privacy",
                  "Terms of Service: /terms",
                  "Security Policy: /security",
                  "Bug Bounty: [Coming Soon]",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="border-4 border-foreground p-6">
                <h3 className="text-sm font-black mb-3 pb-1 border-b-2 border-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-muted-foreground font-mono">
                      • {item}
                    </li>
                  ))}
                </ul>
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
