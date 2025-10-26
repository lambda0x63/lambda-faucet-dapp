export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="container mx-auto max-w-7xl px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 pb-16 border-b-2 border-foreground">
          {/* Brand */}
          <div>
            <h3 className="font-black text-2xl mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
              λ LAMBDA
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Function-based token distribution protocol built on Solidity.
            </p>
          </div>

          {/* Protocol */}
          <div>
            <h4 className="font-black text-sm mb-6 tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
              PROTOCOL
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#" className="hover:text-foreground transition">Smart Contracts</a></li>
              <li><a href="#" className="hover:text-foreground transition">How it Works</a></li>
              <li><a href="#" className="hover:text-foreground transition">Mechanics</a></li>
            </ul>
          </div>

          {/* System */}
          <div>
            <h4 className="font-black text-sm mb-6 tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
              SYSTEM
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="/" className="hover:text-foreground transition">Home</a></li>
              <li><a href="/faucet" className="hover:text-foreground transition">Faucet</a></li>
              <li><a href="/stats" className="hover:text-foreground transition">Analytics</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-sm mb-6 tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
              <li><a href="#" className="hover:text-foreground transition">Status</a></li>
            </ul>
          </div>

          {/* Developer */}
          <div>
            <h4 className="font-black text-sm mb-6 tracking-wide" style={{ fontFamily: "Oswald, sans-serif" }}>
              DEVELOPER
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/lambda0x63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition font-light underline"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition font-light underline"
                >
                  Backend Repo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition font-light underline"
                >
                  Frontend Repo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground font-light">
          <p>&copy; 2025 Lambda Protocol. Built by lambda0x63.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
