import React, { useRef } from "react";
import FadeInSection from "./FadeInSection";
import '../styles/About.css'

const About = () => {
  const aboutRef = useRef(null); // Create a ref for the About section

  const one = (
    <p>
      I am currently a <b>3rd year Computer Science undergrad</b> at
      <b><a href="https://kiit.ac.in/" style={{ color: "#64ffda"}}> Kalinga Institute of Industrial Technology</a></b>
    </p>
  );

  const two = (
    <p>
      <br/>
      Outside of work, I'm interested in following the developments of
      science. I also watch a lot of movies. And play football.
    </p>
  );

  const tech_stack = [
    "Java",
    "Javascript ES6+",
    "React.js",
    "Tailwind CSS",
    "Express.js",
  ];

  // Use the relative path to the image in the public directory
  const imagePath = "/IMG_20221231_191933_048.jpg";

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to About section
  };

  return (
    <div id="about" ref={aboutRef} className="min-h-[50vh] mx-auto max-w-[1000px] pt-[100px]">
      <FadeInSection>
        <div className="section-header">
          <span className=" flex place-items-start font-NTR font-sans-serif mb-10 section-title text-lightest-slate text-5xl font-semibold ml-1">/ about me</span>
        </div>
        <div className="about-content flex flex-row">
          <div className="about-description font-sans text-slate-400 max-w-[600px] text-justify text-lg sm:text-base">
            {one}
            <br/>
            <p>Here are some technologies I have been working with:</p>
            <ul className="pt-5 list-none grid grid-cols-2 gap-y-2">
              {tech_stack.map((tech_item, index) => (
                <FadeInSection key={index} delay={`${index + 1}00ms`}>
                  <li className="relative pl-5 text-lg text-slate-400 before:content-['▹'] before:text-teal-200 before:absolute before:left-0">
                    {tech_item}
                  </li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image pl-10">
            <img 
              alt="Debesh Acharya" 
              src={imagePath} 
              className="max-w-[300px] h-auto rounded-lg ml-7 shadow-lg border-none transition-transform transform hover:translate-y-[-7px] sm:max-w-[200px] sm:block sm:ml-0 md:ml-7 lg:block"
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
