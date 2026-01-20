"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "../BookCallButton";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setSubmitStatus("success");
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        service: "",
        timeline: "",
        message: "",
      });
      setSubmitStatus(null);
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-4 md:py-8">
      <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[4rem] w-full h-full bg-white">
        {/* Enhanced Background */}
        {/* <div className="absolute inset-0 bg-[#F4F7FD]" /> */}
        
        {/* Subtle texture overlay */}
        {/* <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #606366 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} /> */}

        {/* Ambient gradient orbs */}
        {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" /> */}
        {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" /> */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-12">
            {/* LEFT: ENHANCED COPY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/60 backdrop-blur-sm border border-blue-accent/20 shadow-sm">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-accent"></span>
                  </div>
                  <span className="text-xs font-semibold text-blue-accent">Available for new projects</span>
                </div>
              </motion.div>

              <h2 className="font-heading text-[2.2rem] leading-[1.1] md:text-[2.6rem] xl:text-[3rem] font-semibold tracking-tight text-[#0B1C2D]">
                Let's build something
                <span className="block text-blue-accent mt-1">worth scaling.</span>
              </h2>

              <p className="max-w-md text-base md:text-lg leading-relaxed text-slate-700">
                Tell us about your business, your goals, and where you're feeling
                stuck. We'll review your message and suggest the best next step.
              </p>

              {/* Info cards */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent/15 transition-colors">
                    <svg className="w-5 h-5 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B1C2D] mb-1">Quick Response Time</h4>
                    <p className="text-sm text-slate-600">Typically respond within 24-48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent/15 transition-colors">
                    <svg className="w-5 h-5 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B1C2D] mb-1">No Obligation</h4>
                    <p className="text-sm text-slate-600">Free consultation with zero commitment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-accent/10 flex items-center justify-center group-hover:bg-blue-accent/15 transition-colors">
                    <svg className="w-5 h-5 text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B1C2D] mb-1">Privacy Protected</h4>
                    <p className="text-sm text-slate-600">Your information stays confidential</p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white shadow-md" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-400 to-indigo-600 border-2 border-white shadow-md" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-pink-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-white">+50</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Trusted by growing teams
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: ENHANCED FORM */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              onSubmit={handleSubmit}
              className="lg:col-span-7 relative rounded-3xl bg-white/80 backdrop-blur-sm px-4 py-6 md:p-8 border border-[#0B1C2D]/10 shadow-xl shadow-blue-accent/5"
            >
              {/* Form header */}
              <div className="mb-8 pb-6 border-b border-slate-100">
                <h3 className="text-xl font-semibold text-[#0B1C2D] mb-2">Start Your Project</h3>
                <p className="text-sm text-slate-600">Fill out the form below and we'll get back to you shortly</p>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name <span className="text-blue-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-accent focus:outline-none focus:bg-white transition-all"
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Email Address <span className="text-blue-accent">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-accent focus:outline-none focus:bg-white transition-all"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Company & Website Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Company */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Company / Brand
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Company Inc."
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-accent focus:outline-none focus:bg-white transition-all"
                      />
                      {focusedField === 'company' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Website */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Website (if applicable)
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('website')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="www.yourcompany.com"
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-accent focus:outline-none focus:bg-white transition-all"
                      />
                      {focusedField === 'website' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Service & Timeline Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Service */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Service Needed <span className="text-blue-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 focus:border-blue-accent focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230B1C2D' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="brand-strategy">Brand Analysis</option>
                        <option value="brand-identity">Business Branding</option>
                        <option value="rebranding">Marketing & Digital Assets</option>
                        <option value="design-system">Print & Physical collateral</option>
                        <option value="web-design">Custom & On-Demand Design</option>
                        <option value="other">Other</option>
                      </select>
                      {focusedField === 'service' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-semibold text-slate-700">
                      Project Timeline
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('timeline')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 focus:border-blue-accent focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%230B1C2D' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                        }}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP (1-2 weeks)</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="flexible">Flexible / Just exploring</option>
                      </select>
                      {/* {focusedField === 'timeline' && (
                        <motion.div
                          layoutId="focus-ring"
                          className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )} */}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-slate-700">
                    Project Details <span className="text-blue-accent">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your goals, challenges, and what success looks like for your brand..."
                      className="w-full rounded-xl border-2 border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-accent focus:outline-none focus:bg-white resize-none transition-all placeholder:text-xs md:placeholder:text-sm"
                    />
                    {focusedField === 'message' && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute -inset-[3px] rounded-xl bg-blue-accent/10 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5">The more details you share, the better we can help</p>
                </div>

                {/* CTA Section */}
                <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success"}
                    className="group relative inline-flex items-center justify-center rounded-full bg-blue-accent px-4 md:px-8 py-2.5 md:py-3.5 text-sm md:text-base font-semibold text-white transition-all hover:bg-blue-accent/90 hover:cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : submitStatus === "success" ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          
                        </>
                      )}
                    </span>
                    {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-linear-to-r from-blue-accent via-purple-500 to-blue-accent bg-[length:200%_100%] animate-gradient" />
                    </div> */}
                  </button>

                  <span className="text-sm text-slate-500 mt-2">
                    Or{" "}
                    <BookCallButton text="book a call" className="bg-transparent! text-slate-500! px-0! hover:text-blue-accent! underline " />
                    {" "}if you prefer
                  </span>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="rounded-2xl bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200/50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-900 mb-1">
                          Thanks for reaching out!
                        </h4>
                        <p className="text-sm text-green-700">
                          We've received your message and will get back to you within 24 hours.
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

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}