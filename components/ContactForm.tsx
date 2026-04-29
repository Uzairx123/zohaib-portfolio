"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(80),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(15, "Tell me a bit more (at least 15 characters)").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus({ state: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus({ state: "success" });
      reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-mono uppercase tracking-[0.15em] text-cream-400 mb-2.5"
        >
          Your name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Jane Doe"
          autoComplete="name"
          disabled={status.state === "loading"}
          className="w-full px-5 py-4 rounded-2xl bg-ink-900 border border-cream-100/[0.08] text-cream-50 placeholder:text-cream-500 focus:outline-none focus:border-signal-400/50 focus:ring-2 focus:ring-signal-400/20 transition-all"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-amber-accent flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-mono uppercase tracking-[0.15em] text-cream-400 mb-2.5"
        >
          Email address
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="jane@company.com"
          autoComplete="email"
          disabled={status.state === "loading"}
          className="w-full px-5 py-4 rounded-2xl bg-ink-900 border border-cream-100/[0.08] text-cream-50 placeholder:text-cream-500 focus:outline-none focus:border-signal-400/50 focus:ring-2 focus:ring-signal-400/20 transition-all"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-amber-accent flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase tracking-[0.15em] text-cream-400 mb-2.5"
        >
          Tell me about your job search
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          placeholder="What roles are you targeting? What's worked, what hasn't? What's your timeline?"
          disabled={status.state === "loading"}
          className="w-full px-5 py-4 rounded-2xl bg-ink-900 border border-cream-100/[0.08] text-cream-50 placeholder:text-cream-500 focus:outline-none focus:border-signal-400/50 focus:ring-2 focus:ring-signal-400/20 transition-all resize-none"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-amber-accent flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status.state === "loading" || status.state === "success"}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.state === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : status.state === "success" ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Message sent
            </>
          ) : (
            <>
              Send message
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>

      {/* Status messages */}
      <AnimatePresence>
        {status.state === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-5 rounded-2xl bg-signal-400/[0.06] border border-signal-400/30"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-signal-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-cream-50 font-medium mb-1">Got it. Thanks!</div>
                <p className="text-cream-300 text-sm">
                  I&apos;ll personally reply within 24 hours — usually much faster. Check your inbox (and spam folder, just in case).
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {status.state === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-5 rounded-2xl bg-amber-accent/[0.06] border border-amber-accent/30"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-cream-50 font-medium mb-1">Couldn&apos;t send your message</div>
                <p className="text-cream-300 text-sm">
                  {status.message} You can also reach me directly at{" "}
                  <a href="mailto:hello@zohaibahmed.com" className="text-signal-400 underline">
                    hello@zohaibahmed.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
