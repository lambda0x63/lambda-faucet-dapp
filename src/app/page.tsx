import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Gift, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center space-y-6 mb-16">
          <Badge className="mx-auto" variant="outline">
            ✨ Web3 Faucet Platform
          </Badge>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Lambda Faucet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get free LMDA tokens every hour. No strings attached. Dynamic rewards based on balance, time, and referrals.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Connect Wallet</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">500K</div>
            <p className="text-sm text-muted-foreground">Total Distributed</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">12.5K</div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">45.2K</div>
            <p className="text-sm text-muted-foreground">Total Requests</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100 LMDA</div>
            <p className="text-sm text-muted-foreground">Base Amount</p>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 card-elevated">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Rewards</h3>
                  <p className="text-muted-foreground">
                    Earn more tokens based on your balance, time of day, and request frequency. The more you have, the more you earn!
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 card-elevated">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900">
                  <Gift className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Referral Bonuses</h3>
                  <p className="text-muted-foreground">
                    Invite friends and get 10% reward for each referral. New users get 20% bonus on first claim!
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 card-elevated">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Stats</h3>
                  <p className="text-muted-foreground">
                    Track your earnings, requests, and referrals with beautiful real-time analytics and charts.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 card-elevated">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
                  <p className="text-muted-foreground">
                    Built with OpenZeppelin standards, reentrancy guards, and comprehensive security measures.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Multipliers Section */}
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Multiplier System</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Balance Multiplier */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Balance-Based</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>100-75%</span>
                <Badge variant="secondary">100%</Badge>
              </div>
              <div className="flex justify-between">
                <span>75-50%</span>
                <Badge variant="secondary">80%</Badge>
              </div>
              <div className="flex justify-between">
                <span>50-25%</span>
                <Badge variant="secondary">50%</Badge>
              </div>
              <div className="flex justify-between">
                <span>25-10%</span>
                <Badge variant="secondary">30%</Badge>
              </div>
              <div className="flex justify-between">
                <span>&lt;10%</span>
                <Badge variant="secondary">10%</Badge>
              </div>
            </div>
          </Card>

          {/* Time Multiplier */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Time-Based (UTC)</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>00:00 - 08:00</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">120%</Badge>
              </div>
              <div className="flex justify-between">
                <span>08:00 - 16:00</span>
                <Badge variant="secondary">100%</Badge>
              </div>
              <div className="flex justify-between">
                <span>16:00 - 24:00</span>
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">80%</Badge>
              </div>
            </div>
          </Card>

          {/* Cooldown Multiplier */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Cooldown Adjusted</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>0-10 req/hr</span>
                <Badge variant="secondary">1x</Badge>
              </div>
              <div className="flex justify-between">
                <span>11-50 req/hr</span>
                <Badge variant="secondary">2x</Badge>
              </div>
              <div className="flex justify-between">
                <span>51-100 req/hr</span>
                <Badge variant="secondary">4x</Badge>
              </div>
              <div className="flex justify-between">
                <span>100+ req/hr</span>
                <Badge variant="secondary">8x</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card border-t border-border py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Earn?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect your wallet and claim your first LMDA tokens. No signup, no hassle, just instant rewards!
          </p>
          <Button size="lg">Start Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Lambda Faucet</h3>
              <p className="text-sm text-muted-foreground">
                Get free LMDA tokens with dynamic rewards.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground">Docs</a></li>
                <li><a href="#" className="hover:text-foreground">Smart Contract</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Lambda Faucet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
