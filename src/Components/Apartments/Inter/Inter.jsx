import React from "react";
import img from "../../../assets/ImgNum11.jpg";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Inter = () => {
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
        className="mt-16"
      >
        <div className="container">
          <div className="flex flex-col justify-between items-center sm:flex-row">
            <div>
              <LazyLoadImage
                effect="blur"
                src={img}
                className="w-full h-[50vh] md:h-[100vh]"
                alt="Team Image"
              />
            </div>
            <div className="sm:w-[60%] mt-12 sm:mt-0 sm:ml-16">
              <h5 className="relative mb-4 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[40%] before:bg-second-color before:h-[2px]">
                Real Estate
              </h5>
              <h1 className="text-5xl sm:text-6xl mb-4">
                Luxury Apartment Only In Our Agency
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                optio aperiam autem, voluptatibus sed amet eaque dignissimos,
                aliquid dolorum rem temporibus corporis, ipsa quas vitae tempore
                distinctio? Sequi aut, possimus consequuntur quasi minus magni
                assumenda distinctio autem itaque voluptas odit sint placeat
                reiciendis aspernatur ad velit eius obcaecati? Error
                voluptatibus recusandae, officia animi ex corporis facere
                provident iure velit dicta dolores incidunt quam commodi a
                aperiam dolore quis odit ducimus quas nihil modi temporibus
                culpa?
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Inter;
