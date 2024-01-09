import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                BTech, ECE
              </h3>
              <p className="text-sm text-neutral font-semibold">2019 - 2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">


            I completed my Bachelor's degree in Information Technology from Rajiv 
            gandhi proudyogiki vishwavidyalaya University in Bhopal, M.P, with a CGPA of 8.95.           
             </p>
          </div>

          

          {/* SSC */}
          <div className="p-6 m-10 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">SSC</h3>
              <p className="text-sm text-neutral font-semibold">2018 - 2019</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Secondary School Certificate with the
              highest result <b>% - 89</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
