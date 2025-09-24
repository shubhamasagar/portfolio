import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="container-width">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Agricultural Consulting Services
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-light">
              Farm & Agritourism Development Consultation
            </h2>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Transform your agricultural venture with expert guidance in sustainable farming, 
              luxury agritourism development, and strategic business planning rooted in behavioral insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Agricultural Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <div className="text-2xl font-light">Farm-to-Market Strategy</div>
              <p className="text-sm text-primary-foreground/70">
                Complete agricultural business development
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-light">Sustainable Practices</div>
              <p className="text-sm text-primary-foreground/70">
                Eco-friendly farming with premium returns
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-light">Agritourism Excellence</div>
              <p className="text-sm text-primary-foreground/70">
                Luxury agricultural tourism experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;