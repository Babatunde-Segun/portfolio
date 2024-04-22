import WorkSlider1 from "../../components/WorkSlider1";

import { serviceData } from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// const { serviceData } = ServiceSlider;

console.log(serviceData);

const Work1 = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Collection of my project
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%]"
          >
            {/* slider */}
            <WorkSlider1 />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work1;

// import React from "react";

// function index() {
//   return (
//     <section>
//       <div>
//         <h2>My Work</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rem
//           totam veniam praesentium, reprehenderit, in debitis exercitationem
//           quam tenetur possimus veritatis velit itaque nesciunt et laudantium
//           consequatur. Impedit, ducimus repellat.
//         </p>
//       </div>

//       {/* work-image */}
//     </section>
//   );
// }

// export default index;
