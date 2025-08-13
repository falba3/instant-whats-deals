const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-50 dark:bg-gray-900 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-whatsapp to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">MS</span>
            </div>
            <span className="text-xl font-bold gradient-text">MiniStores</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © 2025 MiniStores – Personalized shopping on demand.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;