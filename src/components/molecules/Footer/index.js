import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
         
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/shivamchaudhary837/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/shivamchaudhary837"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          
        </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          
         
         
        
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/gilberthutapea"
              className="text-primary hover:underline"
              target="blank"
            >
             ~ Harshita Prajapati
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
