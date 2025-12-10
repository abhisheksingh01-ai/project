// pages/ServicesLanding.jsx
import React from "react";
import ServicesHeading from "./ServicesHeading"
import ServicesGrid from "./ServicesGrid";

export default function ServicesLanding({ services }) {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ServicesHeading
          eyebrow="Our Services"
          titleLines={["High-impact services", "for your business"]}
          subtitle="We craft tailored solutions that blend strategy, design and technology — delivering measurable growth and a premium experience."
        />

        <ServicesGrid services={services} />
      </div>
    </section>
  );
}
