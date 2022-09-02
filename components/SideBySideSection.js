import React from "react";

function SideBySideSection({
  SectionOne,
  SectionTwo,
  sectionOneClassName = "",
  sectionTwoClassName = "",
  spacing = "lg:gap-14",
  wrapperClassName,
  overflow = "overflow-hidden",
  children,
}) {
  return (
    <div className={wrapperClassName}>
      <div className="container">
        <div
          className={`bg-darkGray rounded-xl lg:rounded-3xl grid grid-cols-1 lg:grid-cols-2 ${overflow} ${spacing}`}
        >
          {SectionOne ? (
            <div
              className={`${sectionOneClassName} p-6 sm:p-8 md:p-10 xl:p-14 lg:pr-0 xl:pr-0`}
            >
              <SectionOne />
            </div>
          ) : null}

          {children}

          {SectionTwo ? (
            <div
              className={`${sectionTwoClassName} p-6 sm:p-8 md:p-10 xl:p-14 lg:pl-0 xl:pl-0`}
            >
              <SectionTwo />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideBySideSection;
