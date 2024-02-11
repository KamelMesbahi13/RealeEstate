import React from "react";
import Data from "./OurTeamData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OurTeam = () => {
  return (
    <>
      <div className="md:mt-16 mt-20">
        <div className="container">
          <div>
            <h6 className="text-third-color tracking-wider">OUR TEAM</h6>
            <h1 className="text-4xl my-4 lg:text-5xl text-second-color">
              Meet Our Perfect Team
            </h1>
          </div>
          <div className="grid place-items-center grid-cols-2 gap-4 md:grid-cols-4 ">
            {Data.map(({ id, image, name, job }) => {
              return (
                <div key={id} className="mt-4">
                  <LazyLoadImage
                    effect="blur"
                    src={image}
                    alt={name}
                    className="h-[20vh] md:h-[50vh]"
                  />
                  <div className="text-center my-2">
                    <h2 className="text-2xl text-second-color">{name}</h2>
                    <h6 className="text-sm">{job}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
