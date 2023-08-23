import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation'; 
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState(false);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Shahid</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        <span>I develop </span>
        <TypeAnimation
          cursor={false}
          className={"text-white"}
          sequence={[
            ' Web Applications',
            500,
            ' Desktop Applications',
            500,
            ' User Interfaces',
            500,
            ' ',
            100,
            () => setDisplayText(true),
          ]}
          repeat={0}
        />
        {displayText && ( // Render the following only when displayText is true
          <span className="text-white">
            Web Applications, Desktop
            <br className="sm:block hidden"/>
            {' '}Applications and User Interfaces
          </span>
        )}
      </p>


      </div>
    </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;