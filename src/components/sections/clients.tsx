import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clients } from "@/lib/clients";

export function ClientsGrid() {
  return (
    <ul
      aria-label="Client and collaborator logos"
      className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
    >
      {clients.map((client) => (
        <li key={client.name} className="flex items-center justify-center">
          <span className="inline-flex min-h-20 min-w-44 items-center justify-center rounded-xl px-5 py-3 transition-colors duration-300 dark:bg-white dark:shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              width={176}
              height={88}
              loading="lazy"
              className="max-h-14 w-auto max-w-[150px] object-contain opacity-85 transition-all duration-300 hover:scale-105 hover:opacity-100 dark:opacity-100"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Clients() {
  return (
    <section id="clients" className="relative isolate overflow-hidden py-24">
      <Container className="relative">
        <SectionHeading
          title="Trusted by leading research institutions"
          description="Proud to partner with leading academic institutions and industry organisations driving neuroscience forward."
        />

        <div className="mt-16">
          <ClientsGrid />
        </div>
      </Container>
    </section>
  );
}
