import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/shubhamsagar1234",
      linkText: "linkedin.com/in/shubhamsagar1234"
    },
    {
      label: "Email",
      link: "mailto:sagar1234shubham@gmail.com",
      linkText: "sagar1234shubham@gmail.com"
    },
    {
      label: "WhatsApp",
      link: "https://wa.me/918446886116",
      linkText: "+91 8446886116"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_3pbtc1k',
        'template_vq0p00s',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'i5XG62C96ScSrrCHq'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or use the direct contact methods below.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="mb-2">
                Get In Touch
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-light text-primary">
                Let's Create Value Together
              </h2>
              
              <p className="text-lg text-secondary leading-relaxed">
                Ready to explore innovative solutions that blend psychology, finance, and agriculture? 
                Let's discuss how we can create meaningful value for your projects.
              </p>
            </div>

            <Button 
              size="lg" 
              className="px-8 py-3 text-base font-medium"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Call
            </Button>
          </div>

          {/* Right Contact Form */}
          <div className="space-y-6">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your agricultural project or consultation needs..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            {/* Quick Contact Methods */}
            <div className="pt-6 border-t">
              <p className="text-sm text-secondary mb-4 text-center">Or reach out directly:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {contactMethods.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:text-primary transition-colors"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;