import React from "react";

function SideBySideSection({
  SectionOne,
  SectionTwo,
  sectionOneClassName = "p-14",
  sectionTwoClassName = "p-14",
  spacing = "gap-14",
  wrapperClassName,
  overflow = "overflow-hidden",
  children,
}) {
  return (
    <div className={wrapperClassName}>
      <div className="container">
        <div
          className={`bg-darkGray rounded-3xl grid grid-cols-2 ${overflow} ${spacing}`}
        >
          {SectionOne ? (
            <div className={`${sectionOneClassName}`}>
              <SectionOne />
            </div>
          ) : null}

          {SectionTwo ? (
            <div className={`${sectionTwoClassName}`}>
              <SectionTwo />
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </div>
  );
}

export default SideBySideSection;