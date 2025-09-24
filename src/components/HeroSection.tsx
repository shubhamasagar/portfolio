import { Badge } from "@/components/ui/badge";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-secondary">
                <span className="font-medium">53+</span>
                <span>Acres Transformed</span>
                <span className="w-px h-4 bg-border"></span>
                <span className="font-medium">15+</span>
                <span>Farm Projects Delivered</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-primary">
                Cultivating Tomorrow
              </h1>
              
              <p className="text-lg md:text-xl text-secondary max-w-md">
                I'm Shubham Sagar, pioneering sustainable agriculture through innovative farming, luxury agritourism, and strategic business development.
              </p>
            </div>

            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-secondary/80 transition-colors"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Call
            </Badge>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
              <img
                src={heroPortrait}
                alt="Shubham Sagar - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;