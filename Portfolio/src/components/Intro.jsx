import React, { useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection";

const Intro = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to About section
  };

  return (
    <div id="intro" className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl pt-48 min-h-screen">
      <TypeAnimation
        avgTypingDelay={100}
        startDelay={1000}
        cursor={{ show: true, blink: true, element: "|" }}
        className="text-teal-200 text-6xl font-sans font-semibold"
        sequence={[
          'hi, ',
          500,
          'hi, debesh here.',
          500,
        ]}
      />
      <FadeInSection>
        <div className="mt-8 text-4xl text-slate-400 font-sans font-normal">
          I create stuff sometimes.
        </div>
        <div className="mt-4 text-lg text-slate-400 max-w-xl pb-12 font-sans font-light">
          I'm a CSE Student from Bhubaneswar, Odisha, India.
        </div>
        <a
          href="mailto:debeshacharya30@gmail.com"
          className="flex items-center justify-center text-lg font-bold text-teal-200 w-32 h-10 border border-teal-200 rounded hover:bg-gray-700 ml-32"
        >
          <EmailIcon className="mr-2" />
          {" Say hi!"}
        </a>
      </FadeInSection>
      <div ref={aboutRef} /> {/* Empty div to mark the scroll target */}
    </div>
  );
};

export default Intro;
