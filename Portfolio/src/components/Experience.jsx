import React, { useState } from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title flex place-items-start font-sans section-title text-white text-5xl font-normal ml-24 -mb-20 mt-20">/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
