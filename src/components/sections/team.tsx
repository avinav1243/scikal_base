"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import MemberModal from "@/components/ui/member-modal";
import { team, initialsOf } from "@/lib/team";

export function Team() {
  const [selected, setSelected] = useState<(typeof team)[number] | null>(null);
  return (
    <section
      id="team"
      className="scroll-mt-24 border-y border-border bg-muted/60 py-24"
    >
      <Container>
        <SectionHeading
          title="The scientists & engineers behind SciKal"
          description="A multidisciplinary team merging neuroscience, engineering, and data science to accelerate research worldwide."
        />

        {/* Team grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.05}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelected(member)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(member);
                }}
                className="cursor-pointer group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-glow"
              >
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
          {selected && (
            <MemberModal member={selected} onClose={() => setSelected(null)} />
          )}
        </div>
      </Container>
    </section>
  );
}
