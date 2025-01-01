import React from 'react'
import { CoursesItemsHolder } from '../CoursesItems/CoursesItemsHolder/CoursesItemsHolder'
import { CoursesTitle } from './CoursesTitle'
import style from './Courses.module.css'
import reactJs from '../../../../assets/Images/reactJs.png'
import figmaCourse from '../../../../assets/Images/FigmaCourse.png'
import JSCourse from '../../../../assets/Images/JSCourse.png'
import WebCourse from '../../../../assets/Images/webCourse.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoursesHolder = ({related}) => {

  const ArrowRight = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${style.arrowRight} ${className}`}
        onClick={onClick}
      />
    );
  }

  const ArrowLeft = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${style.arrowLeft} ${className}`}
        onClick={onClick}
      />
    );
  }

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      responsive: [
        {
          breakpoint: 1406,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1066,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            fade: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            fade: true,
          }
        }
      ]
    };

  return related.length > 1 &&  (
    <div className={style.holder}>
        <CoursesTitle />
        <Slider className={style.slider} {...settings} >
        {related.map((item, index) => {
        return (
          <CoursesItemsHolder 
            id={item.courseId}
            key={index}
            title={item.title}
            teacher={item.teacherName}
            price={item.cost}
            category={item.technologyList}
            level={item.levelName}
            image={item.tumbImageAddress}
          />
        )
      })}
      </Slider>
    </div>
  )
}

export {CoursesHolder}