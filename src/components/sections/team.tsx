import Image from "next/image";
import { Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { team, founder, initialsOf } from "@/lib/team";

export function Team() {
  const rest = team.filter((m) => m.name !== founder.name);

  return (
    <section
      id="team"
      className="scroll-mt-24 border-y border-border bg-muted/60 py-24"
    >
      <Container>
        <SectionHeading
          // eyebrow="Our team"
          eyebrowIcon={<Users />}
          title="The scientists & engineers behind SciKal"
          description="A multidisciplinary team merging neuroscience, engineering, and data science to accelerate research worldwide."
        />

        {/* Founder spotlight */}
        <Reveal>
          <article className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-glow sm:p-10">
            <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                {founder.photo ? (
                  <span className="relative size-32 shrink-0 overflow-hidden rounded-full border border-border shadow-glow ring-1 ring-primary/15">
                    <Image
                      src={founder.photo}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="inline-flex size-28 items-center justify-center rounded-full bg-brand text-3xl font-semibold text-white">
                    {initialsOf(founder)}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {founder.role}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
                {founder.highlights && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {founder.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        {/* Team grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {rest.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.05}>
              <article className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-glow">
                {/* <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-lg font-semibold text-primary">
                  {initialsOf(member)}
                </span> */}
                {member.photo ? (
                  <span className="relative size-28 shrink-0 overflow-hidden rounded-full border border-border shadow-glow ring-1 ring-primary/15">
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="inline-flex size-28 shrink-0 overflow-hidden items-center justify-center rounded-full bg-brand text-3xl font-semibold text-white">
                    {initialsOf(member)}
                  </span>
                )}
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  {member.highlights && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {member.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
