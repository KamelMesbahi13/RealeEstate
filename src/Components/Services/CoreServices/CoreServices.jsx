import React from "react";
import Data from "./Data";
import { motion } from "framer-motion";

const CoreServices = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="mt-28"
      >
        <div className="container">
          <div>
            <h5 className="relative mb-2 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[30%] before:bg-second-color before:h-[2px]">
              Core Services
            </h5>
            <h1 className="text-5xl sm:text-6xl">What We Offer</h1>
            <p className="w-[80%] md:w-[40%] mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              corrupti commodi ut vitae nihil repudiandae aliquid natus ipsum
              molestiae quisquam unde labore rem optio eaque soluta eveniet
              beatae, esse temporibus.
            </p>
          </div>

          <div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-y-8">
              {Data.map(({ id, alt, img, description, heading }) => {
                return (
                  <div
                    key={id}
                    className="bg-white h-[50vh] md:h-[60vh] text-center w-[90%] shadow-lg rounded-sm relative before:absolute before:w-0 before:h-1 before:transition-all before:duration-1000 before:bottom-0 before:left-0 before:bg-third-color hover:before:w-full"
                  >
                    <img
                      src={img}
                      className="w-[65%] h-[23vh] mx-auto"
                      alt={alt}
                    />
                    <h2 className="text-xl sm:text-2xl">{heading}</h2>
                    <p className="mt-8 px-6">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CoreServices;
