"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { TeamMember } from "@/lib/team";

type Props = {
  member: TeamMember | null;
  onClose: () => void;
};

export default function MemberModal({ member, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (member) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      <dialog
        open
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-lg"
        aria-modal
        role="dialog"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground"
        >
          <X />
        </button>

        <div className="flex flex-col gap-4 sm:flex-row">
          {member.photo ? (
            <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="inline-flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full bg-brand text-3xl font-semibold text-white">
              {member.initials ?? "?"}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm font-medium text-primary">{member.role}</p>
            <div className="mt-4 text-sm leading-relaxed text-foreground/90">
              {(member.description ?? member.bio)
                .split("\n\n")
                .map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "" : "mt-3"}>
                    {para}
                  </p>
                ))}
            </div>

            {member.highlights?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {member.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </dialog>
    </div>
  );
}
