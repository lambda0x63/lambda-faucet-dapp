export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="container mx-auto max-w-7xl px-8">
        {/* Main Footer */}
        <div className="py-20 border-b-2 border-foreground">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-black text-2xl mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                λ LAMBDA
              </h3>
              <p className="text-sm text-muted-foreground font-light">
                Function-based token distribution protocol built on Solidity.
              </p>
            </div>

            {/* Protocol Info */}
            <div>
              <h4 className="font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                PROTOCOL
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground font-light">
                <li><a href="#" className="hover:text-foreground transition">Smart Contracts</a></li>
                <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition">Mechanics</a></li>
              </ul>
            </div>

            {/* Developer Links */}
            <div>
              <h4 className="font-black mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
                DEVELOPER
              </h4>
              <ul className="text-sm space-y-2 text-muted-foreground font-light">
                <li><a href="https://github.com/lambda0x63" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition">Frontend Repo</a></li>
                <li><a href="#" className="hover:text-foreground transition">Backend Repo</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-center text-sm text-muted-foreground font-light">
          <p>&copy; 2025 Lambda Protocol. Built by lambda0x63.</p>
        </div>
      </div>
    </footer>
  );
}
