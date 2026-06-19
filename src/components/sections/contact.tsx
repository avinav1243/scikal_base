import { Mail, MapPin, MessageSquare, Clock, Handshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

const details = [
  {
    icon: Mail,
    label: "Email us at",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  ...siteConfig.locations
    .filter((item) => item.city == "Chicago")
    .map((loc) => ({
      icon: MapPin,
      label: "Office",
      value: `${loc.city}, ${loc.country}`,
      href: undefined as string | undefined,
    })),
];

export function Contact() {
  return (
    <section id="contact" className="scroll-m-0 border-t border-border py-24">
      <Container>
        <SectionHeading
          // eyebrow="Let's collaborate"
          eyebrowIcon={<MessageSquare />}
          title="Let's talk about your science"
          description="Reach out to discuss partnerships, research, or technology solutions. Whether you're comparing platforms or have a problem no tool solves yet, we'd love to hear from you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info column */}
          <div className="flex flex-col gap-5">
            {details.map((d) => {
              const Icon = d.icon;
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/15">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-0.5 font-medium">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.value} href={d.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={d.value}>{content}</div>
              );
            })}

            <div className="border-gradient relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-glow">
              <Handshake className="size-6 text-primary" />
              <h3 className="mt-3 font-semibold tracking-tight">
                Request a live demo
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Prefer to see a platform in action? Mention &ldquo;demo&rdquo;
                in your message and we&rsquo;ll set up a walkthrough tailored to
                your assay.
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
