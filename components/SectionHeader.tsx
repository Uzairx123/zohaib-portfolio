"use client";

import FadeIn from "./FadeIn";
import { ReactNode } from "react";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({
  number,
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      <FadeIn>
        <p className="section-number mb-4 inline-flex items-center gap-3">
          <span className="w-8 h-px bg-signal-400" />
          <span className="text-signal-400">{number}</span>
          <span className="text-cream-400">{label}</span>
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-display-3 font-serif text-cream-50 text-balance">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-6 text-cream-300 text-lg leading-relaxed text-pretty max-w-2xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
