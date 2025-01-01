import React, { useState } from "react";
import { CoursesItemsHolder } from "../CoursesItems/CoursesItemsHolder/CoursesItemsHolder";
import { CoursesTitle } from "./CoursesTitle";
import style from "./Courses.module.css";
import { Button } from "../CoursesItems/CoursesItemsHolder/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CoursesHolderSkeleton } from "./CoursesHolderSkeleton";
import {
  PacmanLoader,
  PuffLoader,
  RiseLoader,
  ScaleLoader,
} from "react-spinners";
import { ScaleControl } from "react-map-gl";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const CoursesHolder = ({ courseList, isLoading }) => {
  return (
    isLoading == false && (
      <>
        <CoursesTitle />
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={5}
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{ height: "460px", paddingTop: "40px", paddingBottom: "30px" }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 200,
            modifier: 1.5,
            slideShadows: false
          }}
          className={style.swiper}
          modules={[EffectCoverflow, Navigation, Autoplay]}
        >
          {courseList.map((item, index) => {
            return (
              <SwiperSlide>
                <CoursesItemsHolder
                  key={index}
                  title={item.title}
                  teacher={item.teacherName}
                  price={item.cost}
                  category={item.statusName}
                  level={item.levelName}
                  image={item.tumbImageAddress}
                  id={item.courseId}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button />
      </>
    )
  );
};

export { CoursesHolder };
