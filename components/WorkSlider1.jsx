// data
"use client";
import { HiArrowRight } from "react-icons/hi2";
// import { HiArrowRight } from "react-icons/hi2"
// import { HiArrowDownRight } from "react-icons/hi2";
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay, A11y, FreeMode } from "swiper/modules";

// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/free-mode";
// import { Pagination, autoplay } from "swiper";

import "swiper/css/bundle";

// import { autoplay } from "swiper/modules";
// import { Autoplay } from "swiper/modules";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "housemarket",
          path: "/housemarketdesktopview.png",
          src: "https://house-marketplace-hzo0.onrender.com",
          details:
            " A MERN house market site project, where users can buy, sell and rent houses,apartment and project. This site contains user profile, Google auth and many features",
        },
        // {
        //   title: "nextfoodfullscreen",
        //   path: "/nextfoodullscreen.png",
        //   src: "www.w3schools.com",
        //   details: "details",
        // },
        // {
        //   title: "title",
        //   path: "/thumb3.jpg",
        //   src: "www.w3schools.com",
        //   details: "details",
        // },
        // {
        //   title: "title",
        //   path: "/thumb4.jpg",
        //   src: "www.w3schools.com",
        //   details: "details",
        // },
      ],
    },

    {
      images: [
        {
          title: "githubfinder",
          path: "/githubfinder.png",
          src: "https://github-finder-lc55.onrender.com/",
          details:
            " A responsive project styled with tailwind css which consumes the github-api which allow user to search for the profile and repo of githubers",
        },
      ],
    },
    {
      images: [
        {
          title: "nextfoodfullscreen",
          path: "/nextfoodfullscreen.png",
          src: "https://nextjs-food-project.vercel.app/",
          details:
            "A Next JS food communities project that allow users to add their recipe to the web site. ",
        },
      ],
    },

    {
      images: [
        {
          title: "todoapp",
          path: "/todoapp.png",
          src: "https://todo-app-fmge.onrender.com",
          details:
            "A simple Typescript todo app, where user can add and delete todo task. ",
        },
      ],
    },

    {
      images: [
        {
          title: "support desk",
          path: "/support-deskdesktop.png",
          src: "https://support-ticket-desk.onrender.com",
          details:
            "A React responsive web application where users can create/delete their online  complain ticket and get a response from the customercare",
        },
      ],
    },
    {
      images: [
        {
          title: "feedbackappdesktop",
          path: "/feedbackappdesktop.png",
          src: "https://give-feedback-app.onrender.com",
          details:
            "A simple React responsive web application that recieves feedback of the users",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb2.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
      ],
    },
  ],
};

//

const WorkSlider1 = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      loop={true}
      // centered-slides="true"

      modules={[Pagination, Autoplay]}
      className="h-[300px] sm:h-[480px]"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {/* could have make the array just one, but let stick with two */}
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid  grid-rows-1 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a key={index} href={image.src} target="_blank">
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={index}
                    >
                      <div className="flex flex-col-reverse sm:flex-row items-center justify-center relative gap-2 mt-2">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={500}
                          alt={image.title}
                        />

                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838ce] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-[50%]  group-hover:xl:-translate-y-[75%] transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Live
                            </div>
                            {/* title part 2 */}
                            <div className="delay-100">Project</div>
                            {/* icons */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0  delay-200 duration-300 transition-all">
                              <HiArrowRight />
                            </div>
                          </div>
                        </div>

                        <div className="flex-wrap">
                          <p>{image.details}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider1;
