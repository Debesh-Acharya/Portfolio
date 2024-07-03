import React, { useRef, useState } from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

const Experience = () => {
  const aboutRef = useRef(null);
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="experience" className="md:p-10 lg:p-20">
      <FadeInSection>
        <div className="section-header">
          <span className="flex place-items-start font-sans section-title text-white text-5xl font-normal ml-4 -mb-20 mt-20">/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
