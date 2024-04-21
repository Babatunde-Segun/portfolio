// data
import { BsArrowRight } from "react-icons/Bs";
// import { HiArrowDownRight } from "react-icons/hi2";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          src: "www.w3schools.com",
          details:
            "llorouremena;kafj;adfjas;kldfjakdfjas;klfjasd;kfjas;klj;kj;kl",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          src: "www.w3schools.com",
          details: "details",
        },
      ],
    },
  ],
};

//

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const WorkSlider1 = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid  grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a key={index} href={image.src}>
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative gap-2">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={300}
                          height={300}
                          alt=""
                        />

                        <div className="flex wrap">
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
