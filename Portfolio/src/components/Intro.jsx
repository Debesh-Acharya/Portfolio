import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailIcon from "@mui/icons-material/Email";
import FadeInSection from "./FadeInSection";

const Intro = () => {
  return (
    <div id="intro" className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl pt-48 min-h-screen">
      <Typist avgTypingDelay={100} startDelay={1000} cursor={{ show: true, blink: true, element: "|" }}className="text-green-400 text-6xl">
        <span className="text-6xl text-gray-300">
          {"hi, "}
          <span className="text-green-400 font-bold">{"debesh"}</span>
          {" here."}
        </span>
      </Typist>
      {/* Content Section */}
      <FadeInSection>
        <div className="mt-8 text-4xl text-gray-400 font-light">I create stuff sometimes.</div>
        <div className="mt-4 text-lg text-gray-400 max-w-xl pb-12">
          I'm a CSE Student from Bhubaneswar, Odisha, India.
        </div>
        <a href="mailto:debeshacharya30@gmail.com" className="text-lg font-bold text-green-400 px-6 py-2 border border-green-400 rounded hover:bg-gray-800">
          <EmailIcon />
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;
