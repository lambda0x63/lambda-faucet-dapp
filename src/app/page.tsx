import { Header } from "@/components/Header";
import { WalletInfo } from "@/components/WalletInfo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Lambda Token Faucet</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get free LMDA tokens every hour. Connect your wallet to start!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Wallet & Request */}
          <div className="space-y-6">
            <WalletInfo />
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Token Request</h3>
              <p className="text-muted-foreground mb-4">
                Connect your wallet to request tokens
              </p>
              {/* Faucet Request Component will go here */}
            </div>
          </div>

          {/* Middle Column - Stats */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Your Stats</h3>
              {/* User Stats Component will go here */}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Referral Code</h3>
              {/* Referral Code Component will go here */}
            </div>
          </div>

          {/* Right Column - Global Stats */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Global Stats</h3>
              {/* Global Stats Component will go here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
