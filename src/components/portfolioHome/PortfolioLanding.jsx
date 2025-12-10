// PortfolioLanding.jsx
import React from "react";
import PortfolioHeading from "./PortfolioHeading";
import PortfolioCards from "./PortfolioCards";

/**
 * Landing component – composes heading + cards.
 * Keeps the outer section padding & max width.
 */

export default function PortfolioLanding({ projects, autoMs }) {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <PortfolioHeading
            eyebrow="Portfolio"
            title="Selected Projects — Premium Work"
            subtitle="Selected case studies and projects that highlight our craft and impact."
          />

          {/* Optional: You could also pass or render a View All CTA here */}
        </div>

        {/* Carousel / Cards */}
        <PortfolioCards projects={projects} autoMs={autoMs} />
      </div>
    </section>
  );
}
