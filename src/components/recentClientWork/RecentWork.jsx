// components/works/RecentWork.jsx
import React from "react";
import WorksHeading from "./WorksHeading";
import WorksGrid from "./WorksGrid";

export default function RecentWork() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <WorksHeading />
        <WorksGrid />
      </div>
    </section>
  );
}
