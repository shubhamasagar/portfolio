const AboutSection = () => {
  return <section className="section-spacing bg-muted">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Main Bio */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl text-primary md:text-4xl font-semibold">
                About Me
              </h2>
              
              <p className="text-lg leading-relaxed text-slate-950">
                I am passionate about transforming agriculture through sustainable innovation and luxury experiences. 
                My work focuses on creating profitable, environmentally-conscious farming ventures that bridge 
                traditional agriculture with modern business practices. I specialize in developing agricultural 
                tourism destinations that preserve farming heritage while generating exceptional returns.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-primary">Agricultural Expertise</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Sustainable Agriculture & Innovation</h4>
                  <p className="text-sm text-secondary">Modern farming techniques, crop optimization, and eco-friendly practices</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Agricultural Tourism & Hospitality</h4>
                  <p className="text-sm text-secondary">Luxury farm experiences, agritourism development, and heritage preservation</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Farm Business Development</h4>
                  <p className="text-sm text-secondary">Financial planning, investment strategies, and psychology-driven farm management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Highlight */}
          <div className="space-y-8">
            {/* Key Highlight */}
            <div className="p-6 bg-background rounded-lg">
              <div className="text-4xl font-light text-primary mb-4">15+</div>
              <p className="text-sm text-secondary mb-2">Agricultural Projects</p>
              <p className="text-xs text-muted-foreground">
                Transforming farms into sustainable, profitable ventures
              </p>
            </div>

            {/* Professional Highlight */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">Mission Focus</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Creating the future of agriculture by merging traditional farming wisdom 
                with cutting-edge business strategy, sustainable practices, and luxury hospitality experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;