import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Farmhouse Gateways",
      description: "Premium agricultural tourism destinations combining sustainable farming with luxury hospitality. Creating immersive farm experiences that educate guests while generating substantial revenue for farming communities.",
      category: "Agricultural Tourism",
      featured: true
    },
    {
      title: "Sustainable Farm Transformation",
      description: "Converting traditional farms into eco-friendly, high-yield operations using modern agricultural techniques, soil restoration, and water conservation systems.",
      category: "Sustainable Agriculture",
      featured: true
    },
    {
      title: "Farm-to-Table Enterprise Development",
      description: "Establishing direct-to-consumer agricultural businesses, including organic produce delivery, farmstand operations, and community-supported agriculture programs.",
      category: "Agricultural Business",
      featured: true
    },
    {
      title: "Agricultural Psychology Research",
      description: "Applying behavioral psychology principles to improve farm management, worker productivity, and sustainable farming practices adoption.",
      category: "Research & Innovation",
      featured: false
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-primary">
              Agricultural Innovations
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Transforming agriculture through sustainable practices, luxury tourism, and strategic business development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-8 bg-card rounded-lg hover-scale border ${
                  project.featured ? 'border-primary/20' : 'border-border'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant={project.featured ? "default" : "secondary"} 
                      className="text-xs"
                    >
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-primary">
                      {project.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;