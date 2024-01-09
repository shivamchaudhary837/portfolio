import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import image1 from "../../../assets/shivam_dp.png";
import handimg from "../../../assets/wave_hand.png";


const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between relative ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-5%] mb-2">Hello, I'm</h2>
        <h1 className="text-4xl sm:text-3xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[2%]">Shivam Chaudhary</h1>
        <img src={handimg} alt="" className="w-18 h-14 absolute right-52 top-2 wavee" ></img>
        <div className="my-1">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[2%] mb-4"
            cursor={true}
            sequence={[
              "A Front-end Developer",
              4000
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-5%] sm:translate-y-[-0%]  ">
        As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, 
        React, Angular, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          {/* I am a Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies. */}
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a
            href="https://drive.google.com/file/d/12BjyGmy8suPJ0nfHkTmqkppTE0hQeM_u/view"
            target="blank"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <Lottie options={defaultOptions} height="90%" width="90%" /> */}

        <img src={image1} alt="myimage" height="60%" width="50%" 
        className="ml-20 bg-opacity-90 backdrop-blur-lg shadow-2xl  
        hover:shadow-primary duration-300 cursor-pointer rounded-full"></img>
      </motion.div>
    </div>
  );
};

export default Banner;
