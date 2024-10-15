import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FadeInSection from "./FadeInSection";
import '../styles/Experience.css'
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
        "Developed an intranet plotting application using React, integrating parsing for six file formats to enable 2D and 3D visualizations with customization options.",
        "Created immersive 3D simulations in Three.js to track and visualize data points dynamically.",
        "Enhanced user engagement and interaction through intuitive, customizable visualizations, optimizing the application's usability and functionality."
      ],
    },
    {
      company: "MLSA KIIT",
      jobTitle: "Corporate and Public Relations Executive @",
      duration: "MAR 2023 - PRESENT",
      desc: [
        "Organized multiple technical events, drawing over 5,000 student participants.",
        "Developed and executed communication strategies to effectively promote events, significantly enhancing awareness and attendance.",
        "Cultivated strategic partnerships with industry professionals, faculty members, and student organizations to maximize event impact, and managed social media and traditional media channels to amplify event visibility.",
      ],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="root min-h-1 mx-auto max-w-1000 px-0 pt-36 pb-0 mb-0 ">
      <div className="experience-flex">
        <Tabs
          orientation={horizontal ? "horizontal" : "vertical"}
          variant={horizontal ? "fullWidth" : "scrollable"}
          value={value}
          onChange={handleChange}
          className={horizontal ? "w-full pr-8" : "w-1/4 mb-8"}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#319795",
              height: horizontal ? "2px" : "17%",
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
                color: value === index ? "#64ffda" : "#a8b2d1",
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
                <span className="text-teal-200 font-bold">{item.company}</span>
                <div className="text-slate-400">{item.duration}</div>
              </div>
              <ul className="list-none ml-0 mt-4 text-left text-slate-400">
                {item.desc.map((descItem, j) => (
                  <FadeInSection delay={`${j + 1}00ms`} key={j}>
                    <li className="relative pl-6 pb-4">
                      <span className="text-teal-200 absolute left-0 top-0">▹</span>
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
