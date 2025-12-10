import React from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesGrid from "./ServicesGrid";

export default function ServicesLanding({ services }) {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ServicesHeading />
        <ServicesGrid services={services} />
      </div>
    </section>
  );
}
