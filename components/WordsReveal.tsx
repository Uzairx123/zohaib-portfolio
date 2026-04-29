"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WordsRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  highlight?: string;
  highlightClassName?: string;
}

export default function WordsReveal({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.06,
  highlight,
  highlightClassName = "font-serif-italic text-signal-400",
}: WordsRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => {
        const isHighlight = highlight && word.toLowerCase().includes(highlight.toLowerCase());
        return (
          <motion.span
            key={i}
            className={`inline-block mr-[0.25em] ${isHighlight ? highlightClassName : ""}`}
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
