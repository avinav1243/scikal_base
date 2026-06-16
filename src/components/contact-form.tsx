"use client";

import * as React from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [serverError, setServerError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const body = await res.json().catch(() => ({}));
      if (body.errors) setErrors(body.errors as FieldErrors);
      else setServerError(body.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setServerError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-glow">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. A member of the SciKal team will get back to
          you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-glow sm:p-8"
    >
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Dr. Ada Lovelace"
            className={cn(fieldClass, errors.name && "border-red-500")}
          />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@lab.edu"
            className={cn(fieldClass, errors.email && "border-red-500")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Organization" htmlFor="organization" optional>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            placeholder="University / Institute / Company"
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can we help?" error={errors.message} htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your experiment or the instrument you're looking for…"
            className={cn(fieldClass, "resize-y", errors.message && "border-red-500")}
          />
        </Field>
      </div>

      {serverError && (
        <p className="mt-4 text-sm text-red-500" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-sm font-medium"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
