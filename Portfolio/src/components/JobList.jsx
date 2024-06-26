import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FadeInSection from "./FadeInSection";

const isHorizontal = () => window.innerWidth < 600;

const JobList = () => {
  const [value, setValue] = useState(0);
  const [horizontal, setHorizontal] = useState(isHorizontal());

  useEffect(() => {
    const handleResize = () => {
      setHorizontal(isHorizontal());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const experienceItems = [
    {
      company: "ADRDE",
      jobTitle: "Intern @",
      duration: "May 2024 - June 2024",
      desc: [
        "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
        "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers.",
      ],
    },
    {
      company: "Wattpad",
      jobTitle: "Associate Engineer @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="root min-h-screen mx-auto max-w-1000 px-8 pt-32">
      <div className="flex">
        <Tabs
          orientation={horizontal ? "horizontal" : "vertical"}
          variant={horizontal ? "fullWidth" : "scrollable"}
          value={value}
          onChange={handleChange}
          className={horizontal ? "w-1/4 pr-8" : "mb-8"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#319795",
              height: horizontal ? "2px" : "25%",
              width: horizontal ? "auto" : "2px",
            },
          }}
        >
          {experienceItems.map((item, index) => (
            <Tab
              key={`${item.company}-${index}`}
              label={horizontal ? `0${index}. ${item.company}` : item.company}
              {...a11yProps(index)}
              className={`text-center items-center ${
                value === index ? "text-teal-200" : "text-slate-400"
              } focus:outline-none`}
              style={{
                color: value === index ? "#64ffda" : "#a8b2d1", // Teal 200
              }}
            />
          ))}
        </Tabs>
        <div className="flex-1 mb-5">
          {experienceItems.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              role="tabpanel"
              hidden={value !== index}
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              className={`p-6 ${value === index ? "block" : "hidden"} max-w-650 text-teal-200`}
            >
              <div className="text-left">
                <span className="font-bold text-lg text-slate-400">
                  {item.jobTitle}
                </span>{" "}
                <span className="text-teal-200 mb-5">{item.company}</span>
                <div className="text-slate-400">{item.duration}</div>
              </div>
              <ul className="list-none ml-0 mt-4 text-left text-slate-400">
                {item.desc.map((descItem, j) => (
                  <FadeInSection delay={`${j + 1}00ms`} key={j}>
                    <li className="relative pl-6 pb-4">
                      <span className="text-teal-200 absolute left-0 top-0 text-green-bright">▹</span>
                      {descItem}
                    </li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const a11yProps = (index) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
});

export default JobList;
