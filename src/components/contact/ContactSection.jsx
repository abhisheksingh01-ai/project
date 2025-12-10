import { useState } from "react";
import { motion } from "framer-motion";
import ContactItem from "./ContactItem";
import FancyInput from "./FancyInput";
import { IconLocation, IconPhone, IconMail } from "./icons";
const BG_BLACK = "rgb(12,12,12)";
const ACCENT = "#53AAA4";


export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ background: "#fff" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT PANEL */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="p-12" style={{ background: BG_BLACK }}>
            <h3 className="text-3xl md:text-4xl font-[Urbanist] font-extrabold text-white">Contact Information</h3>
            <p className="mt-4 text-white/70 max-w-md">
              Reach out directly through any of the channels below. We reply quickly and love to build high quality products.
            </p>
            <div className="mt-10 space-y-8">
              <ContactItem Icon={IconLocation} title="Our Location" delay={0.05}>E Block<br/>Noida Sector 16</ContactItem>
              <ContactItem Icon={IconPhone} title="Give Us A Call" delay={0.12}><a href="tel:+918929082629" className="text-white/70 hover:text-white transition-colors">(+91) 89290 82629</a></ContactItem>
              <ContactItem Icon={IconMail} title="Email Us" delay={0.18}><a href="mailto:itteams@technexwaredigital.com" className="text-white/70 hover:text-white transition-colors">itteams@technexwaredigital.com</a></ContactItem>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="p-10 md:p-12 bg-white">
            <h3 className="text-2xl md:text-3xl font-[Urbanist] font-extrabold text-[#0C0C0C]">Send Us a Message</h3>
            <form className="mt-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitting(true); setTimeout(() => setSubmitting(false), 900); }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FancyInput><input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition" /></FancyInput>
                <FancyInput><input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition" /></FancyInput>
                <FancyInput><input type="tel" name="phone" placeholder="Your Phone" required className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition" /></FancyInput>
              </div>
              <FancyInput><textarea name="message" placeholder="Your Message" rows={6} required className="w-full px-4 py-4 rounded-lg border border-[#E6E6E6] placeholder:text-[#9A9A9A] text-[#0C0C0C] focus:outline-none focus:ring-2 focus:ring-[#53AAA4]/30 transition resize-none" /></FancyInput>
              <motion.button type="submit" whileHover={{ scale: 1.02, boxShadow: "0 18px 40px rgba(83,170,164,0.18)" }} whileTap={{ scale: 0.98 }} disabled={submitting} className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-medium" style={{ background: `linear-gradient(90deg, ${ACCENT}, #47a79f)`, boxShadow: "0 12px 30px rgba(83,170,164,0.18)" }}>
                <span>{submitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
