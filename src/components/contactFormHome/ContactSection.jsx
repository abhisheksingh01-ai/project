// components/contact/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * ContactSection.jsx
 * - Accent color: #53AAA4 (icons, button, focus)
 * - Left panel items animated with framer-motion
 * - Icons use ACCENT color (no black)
 * - Added Phone input (name, email, phone)
 * - Subtle micro-interactions on inputs & button
 */

const ACCENT = "#53AAA4";
const BG_BLACK = "rgb(12,12,12)";

/* ---------- Icons (stroke uses currentColor) ---------- */
function IconLocation({ className = "w-5 h-5", style }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden style={style}>
      <path d="M12 21s8-5.5 8-11a8 8 0 10-16 0c0 5.5 8 11 8 11z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10.5" r="2.2" fill="currentColor" />
    </svg>
  );
}
function IconPhone({ className = "w-5 h-5", style }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden style={style}>
      <path d="M22 16.92v3a1 1 0 01-1.11 1 19.8 19.8 0 01-8.63-3.14 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.14-8.63A1 1 0 014.08 2h3a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.25 1.02L8.3 9.7a12 12 0 005 5l1.4-1.3a1 1 0 011.02-.25l3.6 1.2a1 1 0 01.68.94z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconMail({ className = "w-5 h-5", style }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden style={style}>
      <path d="M3 8.2v7.6a2 2 0 002 2h14a2 2 0 002-2V8.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 6H3l9 7 9-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- Animated contact item ---------- */
function ContactItem({ Icon, title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.55, ease: [0.2, 0.9, 0.3, 1] }}
      className="flex items-start gap-4"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="w-14 h-14 rounded-full grid place-items-center"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <Icon className="w-6 h-6" style={{ color: ACCENT }} />
      </motion.div>

      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-white/70 mt-1">{children}</div>
      </div>
    </motion.div>
  );
}

/* ---------- Input wrapper for animated focus ---------- */
function FancyInput({ children, name }) {
  // uses focus-within tailwind utilities for micro-animation
  return (
    <label className="block focus-within:scale-[1.01] transform transition-all duration-200">
      {children}
    </label>
  );
}

/* ---------- Main component ---------- */
export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ background: "#fff" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-12"
            style={{ background: BG_BLACK }}
          >
            <h3 className="text-3xl md:text-4xl font-[Urbanist] font-extrabold text-white">
              Contact Information
            </h3>

            <p className="mt-4 text-white/70 max-w-md">
              Reach out directly through any of the channels below. We reply quickly and love to build high quality products.
            </p>

            <div className="mt-10 space-y-8">
              <ContactItem Icon={IconLocation} title="Our Location" delay={0.05}>
                E Block<br/>Noida Sector 16
              </ContactItem>

              <ContactItem Icon={IconPhone} title="Give Us A Call" delay={0.12}>
                <a href="tel:+918929082629" className="text-white/70 hover:text-white transition-colors">(+91) 89290 82629</a>
              </ContactItem>

              <ContactItem Icon={IconMail} title="Email Us" delay={0.18}>
                <a href="mailto:itteams@technexwaredigital.com" className="text-white/70 hover:text-white transition-colors">itteams@technexwaredigital.com</a>
              </ContactItem>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="text-white/60 text-xs">Trusted by</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white/6 rounded-md" />
                <div className="w-10 h-6 bg-white/6 rounded-md" />
                <div className="w-10 h-6 bg-white/6 rounded-md" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL (FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-12 bg-white"
          >
            <h3 className="text-2xl md:text-3xl font-[Urbanist] font-extrabold text-[#0C0C0C]">
              Send Us a Message
            </h3>

            <form
              className="mt-6 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                setTimeout(() => setSubmitting(false), 900); // demo submit
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FancyInput name="name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C]
                               focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition"
                  />
                </FancyInput>

                <FancyInput name="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C]
                               focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition"
                  />
                </FancyInput>

                <FancyInput name="phone">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C]
                               focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition"
                  />
                </FancyInput>
              </div>

              <FancyInput name="message">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full px-4 py-4 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C]
                             focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition resize-none"
                />
              </FancyInput>

              <div className="flex items-center gap-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 18px 40px rgba(83,170,164,0.18)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-medium"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT}, #47a79f)`,
                    boxShadow: "0 12px 30px rgba(83,170,164,0.18)",
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 2L11 13" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2l-7 20 3-7 7-7z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{submitting ? "Sending..." : "Send Message"}</span>
                </motion.button>

                <div className="text-sm text-[#6D6D6D]">Or call us at <a href="tel:+918929082629" className="text-[#0C0C0C] font-medium hover:text-[#53AAA4] transition-colors">(+91) 89290 82629</a></div>
              </div>
            </form>

            <div className="mt-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#53AAA4]/8 text-[#0C0C0C]">
                <svg className="w-4 h-4 text-[#53AAA4]" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-sm">We typically respond within 24 hours.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* small cosmetic: ensure outer rounded clipping */
        .max-w-7xl > .grid { border-radius: 12px; }

        /* placeholder color fallback */
        input::placeholder, textarea::placeholder { color: #9A9A9A; opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}
