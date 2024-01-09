import React, { useEffect, useState } from "react";
import Items from "../../Utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./Project.css";
import project1 from "../../assets/coindom-crypto.png";
import project2 from "../../assets/project2_img.png";
import project3 from "../../assets/project3.png";


import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
import "../../pages/shared/Shared.css";

const Project = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [inView, animation, location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 3 && location.pathname === "/") {
      setItems(filtered.slice(0, 3));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-14">
            <h3 className="text-neutral text-center">
              Some of my recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center py-2 mb-4">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >

          <div >
            <div className="relative mx-auto mb-8 max-w-screen-md ">
              <div className="w-full bg-[#2b2a2a] rounded-2xl overflow-hidden mx-auto py-3">
                <div className="flex flex-col md:flex-row md:justify-between">
                  {/* Left side */}
                  <div className="leftCard md:w-1/2 ">
                    <img
                      src={project1}
                      className=" px-3 object-cover rounded-3xl projectImg"
                      alt="Project Image"
                    />
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-bold text-[20px] md:text-[26px] mb-4">
                      COINDOM CRYPTO APP 
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                      Coindom is a crypto app that allows users to search for
                      information about various cryptocurrencies in real-time.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-row mb-6">
                      <div className="text-lg w-1/2 p-2 shadow-lg">React</div>
                      <div className="text-lg w-1/2 p-2  shadow-lg">SCSS</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row">
                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 w-1/2"
                        href="https://github.com/shivamchaudhary837/coindom-crypto-info"
                        rel="noreferrer"
                      >
                        Code
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1 top-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-github"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                      </a>

                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 ml-4 w-1/2"
                        href="https://coindom-crypto-info.vercel.app/"
                        rel="noreferrer"
                      >
                        Live Demo
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of project section */}
          </div>



        {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
          <div >
            <div className="relative mx-auto mb-8 max-w-screen-md ">
              <div className="w-full bg-[#2b2a2a] rounded-2xl overflow-hidden mx-auto py-3">
                <div className="flex flex-col md:flex-row md:justify-between">
                  {/* Left side */}
                  <div className="leftCard md:w-1/2 ">
                    <img
                      src={project2}
                      className=" px-3 rounded-3xl projectImg"
                      alt="Project Image"
                    />
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-bold text-[20px] md:text-[26px] mb-4">
                      UrbanCartHub Ecommerce
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                    With a commitment to simplicity and a sleek design, making 
                    it easy for customers to find and purchase the products they desire with enhancing user experience.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-row mb-6">
                      <div className="text-lg w-1/2 p-2 shadow-lg">React</div>
                      <div className="text-lg w-1/2 p-2 shadow-lg">Redux</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row">
                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 w-1/2"
                        href="https://github.com/shivamchaudhary837/ecommerce-shopping"
                        rel="noreferrer"
                      >
                        Code
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1 top-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-github"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                      </a>

                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 ml-4 w-1/2"
                        href="https://react-ecommerce-dusky.vercel.app/"                        
                        rel="noreferrer"
                      >
                        Live Demo
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of project section */}
          </div>


          {/* ,,,,,,,,,,,,,,,,,,,,,, */}


          <div className="mt-3">
            <div className="relative mx-auto mb-8 max-w-screen-md ">
              <div className="w-full bg-[#2b2a2a] rounded-2xl overflow-hidden mx-auto py-3">
               <div className="flex flex-col md:flex-row md:justify-between">
                  {/* Left side */}
                  <div className="leftCard md:w-1/2 ">
                    <img
                      src={project3}
                      className=" px-3 object-cover rounded-5xl projectImg"
                      alt="Project Image"
                    />
                  </div>

                  {/* Right side */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-bold text-[20px] md:text-[26px] mb-4">
                      VROOMVISTA CAR RENTAL 
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                    VroomVista, a car rental website online platform, allows users to rent cars for personal or business use. 
                    It provides an interface for searching, comparing, and reserving cars.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-row mb-6">
                      <div className="text-lg w-1/2 p-2 shadow-lg">React</div>
                      <div className="text-lg w-1/2 p-2 shadow-lg">SCSS</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row">
                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 w-1/2"
                        href="https://github.com/shivamchaudhary837/vroom_vista"
                        rel="noreferrer"
                      >
                        Code
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1 top-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-github"
                      >
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                      </a>

                      <a
                        target="_blank"
                        className="flex flex-row items-center p-2 ml-4 w-1/2"
                        href="https://vroom-vista.vercel.app/"
                        rel="noreferrer"
                      >
                        Live Demo
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1 px-1"
                        width="28"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-external-link"
                      >
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of project section */}
          </div>
        </motion.div>
        
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
