import React from "react";
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection"; // Ensure this component is correctly implemented
// import RubiksCubeSolver from "./RubiksCubeSolver";

const Intro = () => {
  return (
    
    <div id="intro" className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl pt-48 min-h-screen">
      {/* <RubiksCubeSolver/> */}
      <TypeAnimation
        avgTypingDelay={100}
        startDelay={1000}
        cursor={{ show: true, blink: true, element: "|" }}
        className=" text-teal-200 text-6xl font-sans font-semibold"
        sequence={[
          'hi, ',
          500,
          'hi, debesh here.',
          500,
        ]}
      />
      {/* Content Section */}
      <FadeInSection>
        <div className="mt-8 text-4xl text-gray-400 font-sans font-normal">
          I create stuff sometimes.
        </div>
        <div className="mt-4 text-lg text-gray-400 max-w-xl pb-12 font-sans font-light">
          I'm a CSE Student from Bhubaneswar, Odisha, India.
        </div>
        <a
          href="mailto:debeshacharya30@gmail.com"
          className="flex items-center justify-center text-lg font-bold text-teal-200 w-32 h-10 border border-teal-200 rounded hover:bg-gray-700 ml-32"
        >
          <EmailIcon className="mr-2 " />
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
