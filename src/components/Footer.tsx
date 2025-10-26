export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background py-20">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex items-center justify-between">
          <p className="text-base text-muted-foreground font-light">
            &copy; 2025 Lambda Protocol. Built by lambda0x63.
          </p>
          <div className="text-right">
            <h4 className="font-black text-lg mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
              DEVELOPER
            </h4>
            <a
              href="https://github.com/lambda0x63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-muted-foreground hover:text-foreground transition font-light underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
