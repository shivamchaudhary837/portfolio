import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";
import Aboutpic from "../../assets/img3.png";


const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src= {Aboutpic}
              alt="Harshita Prajapati"
              className=" w-100 h-70 mt-6 translate-y-[-20%]"
              title="Harshita Prajapati"
            />
 


          </motion.div>
          <motion.div
            className="sm:mb-6"
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-2 text-center translate-y-[-250%] 
            sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Shivam Chaudhary</h1>
            <div className="my-3">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-320%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-6 md:text-left"
                cursor={true}
                sequence={[
                 
                  "A Front-end Developer",
                  3000
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-30%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, 
            JavaScript, React, Angular, Tailwind, and SCSS. I excel in designing and maintaining
             responsive websites that offer a smooth user experience. My expertise lies in crafting 
             dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
              
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-90%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
              
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              
              <a
                href="https://drive.google.com/file/d/1J7_XcSa2mVG9Mj_oMncV8ynViHAFmUVF/view"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
