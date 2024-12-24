import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const NavBar = () => {
  // const scrollToAbout = (event) => {
  //   event.preventDefault();
  //   document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollToHome = (event) => {
  //   event.preventDefault();
  //   document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollToExperience = (event) => {
  //   event.preventDefault();
  //   document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <nav className="bg-gray-900 -text--lightest-slate fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center font-NTR">
        <div className="flex items-center">
          <a className="font-semibold text-l hidden sm:block" href="#">
            Debesh Acharya
          </a>
          <div className="ml-4 flex space-x-4 font-semibold text-sm hidden sm:flex">
            <a className="hover:text-green-200" href="#intro">
              Home
            </a>
            <a className="hover:text-green-200" href="#about" >
              About
            </a>
            <a className="hover:text-green-200" href="#experience">
              Experience
            </a>
            <a className="hover:text-green-200" href="#projects">
              Projects
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a className="hover:text-green-200" href="mailto:debeshacharya30@gmail.com">
            <EmailIcon style={{ fontSize: 20 }} />
          </a>
          <a
            className="hover:text-green-200"
            href="https://github.com/Debesh-Acharya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 19 }} />
          </a>
          <a
            className="hover:text-green-200"
            href="https://www.linkedin.com/in/debesh-acharya-06ba72175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon style={{ fontSize: 21 }} />
          </a>
          <a
            className="hover:text-green-200"
            href="https://drive.google.com/file/d/1N4xKOImdAso1ZVjrap7vNumld0kU4gnR/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileOpenIcon style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
