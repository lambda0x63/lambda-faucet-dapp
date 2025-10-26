export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background py-12">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground font-light">
            &copy; 2025 Lambda Protocol. Built by lambda0x63.
          </p>
          <div>
            <h4 className="font-black text-sm mb-2" style={{ fontFamily: "Oswald, sans-serif" }}>
              DEVELOPER
            </h4>
            <a
              href="https://github.com/lambda0x63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition font-light"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
