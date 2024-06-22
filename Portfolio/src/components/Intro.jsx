import React from "react";
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection"; // Ensure this component is correctly implemented
import { Button } from "@mui/material";
// import RubiksCubeSolver from "./RubiksCubeSolver";

const Intro = () => {
  return (
    
    <div id="intro" className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl pt-48 min-h-screen">
      {/* <RubiksCubeSolver/> */}
      <TypeAnimation
        avgTypingDelay={100}
        startDelay={1000}
        cursor={{ show: true, blink: true, element: "|" }}
        className="text-green-400 text-6xl font-sans"
        sequence={[
          'hi, ',
          500,
          'hi, debesh here.',
          500,
        ]}
      />
      {/* Content Section */}
      <FadeInSection>
        <div className="mt-8 text-4xl text-gray-400 font-light">
          I create stuff sometimes.
        </div>
        <div className="mt-4 text-lg text-gray-400 max-w-xl pb-12">
          I'm a CSE Student from Bhubaneswar, Odisha, India.
        </div>
        <a
          href="mailto:debeshacharya30@gmail.com"
          className="flex items-center justify-center text-lg font-bold text-green-400 w-32 h-10 border border-green-400 rounded hover:bg-blue-900 ml-32"
        >
          <EmailIcon className="mr-2 " />
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
