import React, { useRef, useState } from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";
import '../styles/Experience.css'


const Experience = () => {
  const aboutRef = useRef(null);
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div id="experience" className=" mt-5 mb-0 md:p-1 lg:p-15">
      <FadeInSection>
        <div className="section-header">
          <span className="flex place-items-start font-sans-serif section-title text-lightest-slate text-5xl font-semibold md:ml-20 lg:ml-24 -mb-20 mt-20">/ experience</span>
        </div>
        <JobList />
      </FadeInSection>
    </div>
  );
};

export default Experience;
