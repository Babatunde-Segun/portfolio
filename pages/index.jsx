// next image
import Image from "next/image";

// components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { easeInOut, motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";
// import { HiDownload } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" h-full z-40 ">
      {/* text */}
      <div className="w-full h-full  z-2">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-30">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-20"
          >
            Transforming Ideas <br /> Into {""}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-40"
          >
            I am a Frontend Engineer based in Nigeria, focused in designing
            great websites and web-applications for easy access by everyone.
          </motion.p>

          {/* project btn */}
          <div
            className="flex justify-center xl:hidden relative"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </div>

          {/* button div */}
          <motion.div className="flex my-8 gap-2 xl:my-0 xl:mb-4  translate-z-[-1] z-30">
            {/* contact me */}
            <motion.button
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" button "
            >
              <Link href={"/contact"}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 5000, mass: 10 }}
                  className="flex gap-x-2 items-center px-4 py-2  outline-none  cursor-pointer transition-all duration-300 bg-accent rounded-full"
                >
                  Contact Me
                  <HiArrowRight />
                </motion.div>
              </Link>
            </motion.button>

            <div>
              <motion.button
                className="cursor-pointer button"
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <a
                  className="flex gap-x-2 items-center px-4 py-2  outline-none  transition-all duration-300 text-accent bg-white rounded-full"
                  href="cv.pdf"
                >
                  Download Cv
                  <FaDownload color="#333" className="text-lg " />
                </a>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-30"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 z-1">
        {/* bg img */}
        <div className="bg-none   absolute  w-full h-full "></div>
        {/* particle */}
        <ParticleContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-[-10%] lg:bottom-[-10%] lg:right-[0%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
