const Footer = () => {
  return <footer className="section-spacing bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-light">Shubham Sagar</h3>
            <p className="text-primary-foreground/70 text-sm">
              Agriculture • Modern Polymath • Finance • Psychology
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-sm text-primary-foreground/60">
            <span>© 2025 Shubham Sagar</span>
            <span className="w-px h-4 bg-primary-foreground/20"></span>
            <a href="mailto:sagar1234shubham@gmail.com" className="hover:text-primary-foreground transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;