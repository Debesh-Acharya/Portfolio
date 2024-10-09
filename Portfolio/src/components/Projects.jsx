import React, { useState } from "react";
import "../styles/Projects.css";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FadeInSection from "./FadeInSection";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

const Projects = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  const spotlightProjects = {
    "No Man's Land": {
      title: "no man's land",
      desc: "A third-person survival-mode game where you battle against time and space to return to Earth.",
      techStack: "C# (UNITY)",
      link: "https://github.com/slakh96/no-mans-land",
      open: "https://gazijarin.itch.io/no-mans-land",
      image: "/assets/nomansland.png"
    },
    Truth: {
      title: "truth",
      desc: "A three.js simulation of the planet system revolving around a monolith.",
      techStack: "JAVASCRIPT (THREE.JS)",
      link: "https://github.com/gazijarin/truth",
      open: "https://gazijarin.github.io/Truth/",
      image: "/assets/truth.png"
    },
    "Tall Tales": {
      title: "tall tales",
      desc: "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
      techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
      link: "https://github.com/gazijarin/TallTales",
      open: "https://talltales.herokuapp.com/",
      image: "/assets/talltales.png"
    },
    Portfolio: {
      title: "portfolio.js",
      desc: "A small JS library that helps with clear and succinct data presentation.",
      techStack: "NODE.JS (EXPRESS.JS)",
      link: "https://github.com/gazijarin/Portfolio.js",
      open: "https://afternoon-ocean-92382.herokuapp.com/",
      image: "/assets/portfolio.png"
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
                <p>
                  {spotlightProjects[key].desc}
                  <p className="techStack">{spotlightProjects[key].techStack}</p>
                </p>
                <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
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
                    ></ExternalLinks>
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
