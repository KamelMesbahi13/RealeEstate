import React from "react";
import { BsArrowRight } from "react-icons/bs";
import imgOne from "../../../assets/ImgNum10.jpg";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Materials = () => {
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
        className="mt-8 sm:m-0"
      >
        <div className="flex flex-col items-center sm:p-0 px-8 mx-auto sm:mb-0 sm:flex-row">
          <div className="sm:mx-28 sm:w-[60%] mb-8">
            <h6 className="text-third-color tracking-wider">MATERIALS</h6>
            <h1 className="text-4xl my-4 lg:text-5xl text-second-color">
              Fine Touch Of Luxury
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              neque, ratione eaque, assumenda corporis rem nihil similique
              aspernatur exercitationem voluptate iure nesciunt error officiis.
              Quia recusandae asperiores et aspernatur dolorum?
            </p>
            <div className="flex mt-4 items-center">
              <a href="/apartments">
                <p className="cursor-pointer text-third-color">View More</p>
              </a>
              <BsArrowRight className="text-third-color text-[1.2rem] ml-1" />
            </div>
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="md:h-[100vh] h-[50vh] w-[45rem]"
              src={imgOne}
              alt="description img one"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Materials;
