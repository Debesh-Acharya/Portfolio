import React, { useState } from "react";
import "../styles/Projects.css";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FadeInSection from "./FadeInSection";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const Projects = () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveKey(selectedIndex);
  };

  const spotlightProjects = {
    "Wall-e": {
      title: "Wall - e",
      desc: "An application that transforms text prompts into stunning images using AI.",
      techStack: "Express.js, React.js",
      link: "https://github.com/Debesh-Acharya/DALL-E",
      image: "/walle.png"
    },
    blogg: {
      title: "blogg",
      desc: "A blogging platform for creating, editing, and sharing posts with user accounts and rich text editing.",
      techStack: "React.js, Tailwind",
      link: "https://github.com/Debesh-Acharya/React/tree/main/12MegaBlog",
      image: "/blogg.png"
    }
  };

  const projects = {
    "Password Generator": {
      desc: "A secure password generator that creates strong, random passwords to enhance online security.",
      techStack: "React.js, Tailwind",
      link: "https://github.com/Debesh-Acharya/React/tree/main/05passwordGenerator",
    },
    "Currency Converter": {
      desc: "A  converter that provides real-time exchange rate conversions for various currencies.",
      techStack: "React.js, Tailwind",
      link: "https://github.com/Debesh-Acharya/React/tree/main/06currencyConverter",
    },
    "TO-DO": {
      desc: "A application that allows you to effortlessly manage and organize your tasks.",
      techStack: "React.js, Tailwind",
      link: "https://github.com/Debesh-Acharya/React/tree/main/10todocontextlocal"
    }
  };

  return (
    <div id="projects">
      <div className="section-header mt-0">
        <div className="section-title">
          <span className="flex items-start font-semibold mb-10 text-5xl mt-1 ml-1 text-lightest-slate">
            / pet projects
          </span>
        </div>
      </div>
      <Carousel activeIndex={activeKey} onSelect={handleSelect}>
        {Object.keys(spotlightProjects).map((key, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={spotlightProjects[key].image}
              alt={key}
            />
            <div className="caption-bg">
              <Carousel.Caption>
                <h3>{spotlightProjects[key].title}</h3>
                <p>{spotlightProjects[key].desc}</p>
                <p className="techStack">{spotlightProjects[key].techStack}</p>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
