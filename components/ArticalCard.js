import React from "react";
import LearnMoreButton from "./LearnMoreButton";

function ArticalCard({ title, date, link }) {
  return (
    <div className="py-6 md:py-10 px-8 md:px-12 rounded-lg bg-purple-dark">
      <h1 className="fs-32px font-semibold text-white mb-5 leading-1_3">
        {title}
      </h1>
      <p className="fs-16px font-light mb-6">{date}</p>

      <LearnMoreButton
        title="FULL ARTICLE"
        onClick={() => window.open(link, "_blank")}
      />
    </div>
  );
}

export default ArticalCard;
