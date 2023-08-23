import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [numBalls, setNumBalls] = useState(10); // Default number of balls

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setNumBalls(5);
      } else {
        setNumBalls(10);
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.slice(0, numBalls).map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");