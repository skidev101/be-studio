"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "../BookCallButton";
import { ArrowRight, Check, X } from "lucide-react";
import { servicesConfig } from "@/lib/services-config";

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  timeline: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  timeline: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border-2 border-slate-200 bg-surface-tint px-4 py-3.5 text-sm text-slate-800 transition-colors placeholder:text-slate-500 hover:border-slate-300 focus:border-brand-ink focus:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const labelClass = "text-sm font-semibold text-slate-700";

const infoCards = [
  {
    title: "Quick response time",
    body: "Typically within 24–48 hours.",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "No obligation",
    body: "A free consultation with zero commitment.",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Kept confidential",
    body: "What you share stays between us.",
    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const services = Object.values(servicesConfig);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData(EMPTY);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-4 md:py-8">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white lg:rounded-[4rem]">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: COPY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8 lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-ink/20 bg-blue-50/60 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-ink opacity-75 motion-reduce:animate-none animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-ink" />
                </span>
                <span className="text-xs font-semibold text-brand-ink">
                  Available for new projects
                </span>
              </div>

              <h1 className="font-display text-[2.2rem] font-semibold leading-[1.1] tracking-tight text-ink text-balance md:text-[2.6rem] xl:text-[3rem]">
                Let&apos;s build something
                <span className="mt-1 block text-brand-ink">worth keeping.</span>
              </h1>

              <p className="max-w-md text-base leading-relaxed text-slate-700 md:text-lg">
                Tell us about your business, your goals, and where you&apos;re
                feeling stuck. We&apos;ll review it and suggest the most useful
                next step — including if that is nothing yet.
              </p>

              <ul className="space-y-4 pt-4">
                {infoCards.map((card) => (
                  <li key={card.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-ink">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={card.path}
                        />
                      </svg>
                    </span>
                    <div>
                      <h2 className="mb-1 text-sm font-semibold text-ink">
                        {card.title}
                      </h2>
                      <p className="text-sm text-slate-600">{card.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-ink/10 bg-white/80 px-4 py-6 shadow-xl shadow-brand/5 backdrop-blur-sm md:p-8 lg:col-span-7"
            >
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h2 className="mb-2 text-xl font-semibold text-ink">
                  Start your project
                </h2>
                <p className="text-sm text-slate-600">
                  Fields marked with an asterisk are required.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-name">
                      Full name <span className="text-brand-ink">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-email">
                      Email address <span className="text-brand-ink">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-company">
                      Company / brand
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-website">
                      Website (if you have one)
                    </label>
                    <input
                      id="contact-website"
                      type="url"
                      name="website"
                      autoComplete="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-service">
                      What do you need? <span className="text-brand-ink">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer appearance-none`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230b1c2d' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">Select an option</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className={labelClass} htmlFor="contact-timeline">
                      Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`${fieldClass} cursor-pointer appearance-none`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230b1c2d' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">Select a timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within a month</option>
                      <option value="1-3-months">In one to three months</option>
                      <option value="3-6-months">In three to six months</option>
                      <option value="flexible">Flexible / just exploring</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass} htmlFor="contact-message">
                    Project details <span className="text-brand-ink">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, your challenges, and what a good outcome would look like."
                    className={`${fieldClass} resize-none placeholder:text-xs md:placeholder:text-sm`}
                  />
                  <p className="mt-1.5 text-xs text-slate-600">
                    The more context you give, the more useful our reply will be.
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success"}
                    className="group inline-flex items-center justify-center rounded-full bg-brand-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60 md:px-8 md:py-3.5 md:text-base"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin motion-reduce:animate-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <Check className="h-5 w-5" aria-hidden="true" />
                          Message sent
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </span>
                  </button>

                  <span className="text-sm text-slate-600">
                    Or{" "}
                    <BookCallButton
                      text="book a call"
                      className="rounded-sm bg-transparent p-0 text-sm font-semibold text-brand-ink underline underline-offset-4 hover:bg-transparent hover:text-brand-deep"
                    />{" "}
                    if you prefer
                  </span>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    role="status"
                    className="rounded-2xl border-2 border-green-200/50 bg-linear-to-r from-green-50 to-emerald-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600">
                        <Check className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-green-900">
                          Thanks for reaching out
                        </h3>
                        <p className="text-sm text-green-800">
                          We&apos;ve received your message and will reply within
                          24–48 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    role="alert"
                    className="rounded-2xl border-2 border-red-200/50 bg-linear-to-r from-red-50 to-rose-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600">
                        <X className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-red-900">
                          Your message wasn&apos;t sent
                        </h3>
                        <p className="text-sm text-red-800">
                          Something went wrong on our side. Please try again, or
                          email us directly and we&apos;ll pick it up from there.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
