import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast({
      title: "Message received",
      description: "Thank you for reaching out. We'll be in touch shortly.",
    });
    setFormData({ name: "", email: "", organization: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@scikal.com",
      href: "mailto:info@scikal.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (800) 000-0000",
      href: "tel:+18000000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Scikal Headquarters",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-14">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Let's Build Something Together
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have a project in mind or simply want to explore how Scikal can support your research, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-border hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="font-medium text-secondary">{info.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="mt-4 p-6 rounded-2xl bg-secondary text-white">
              <h4 className="font-semibold mb-2 text-lg">Partner With Us</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                From a single instrument to a full bioinformatics infrastructure, we work with organizations of every scale. Reach out — we respond within one business day.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 rounded-2xl border border-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-secondary font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    data-testid="input-name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-secondary font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="input-email"
                    placeholder="jane@yourorganization.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-secondary font-medium">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  data-testid="input-organization"
                  placeholder="Research Institute / Company"
                  value={formData.organization}
                  onChange={handleChange}
                  className="bg-white border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-secondary font-medium">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  data-testid="input-subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-secondary font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  data-testid="input-message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                data-testid="button-submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 font-semibold group"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
