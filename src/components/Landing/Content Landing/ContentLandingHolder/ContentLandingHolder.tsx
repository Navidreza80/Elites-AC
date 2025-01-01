import React, { useEffect, useState } from 'react'
import style from './ContentLandingHolder.module.css'
import { BannerHolder } from '../WebBanner/BannerHolder/BannerHolder'
import { ProgrammingLanguagesHolder } from '../Programming Languages/ProgrammingLanguagesHolder/ProgrammingLanguagesHolder'
import { OurGoalsHolder } from '../Our Goals/OurGoalsHolder/OurGoalsHolder'
import { ServicesHolder } from '../Our services/OurServicesHolder/ServicesHolder'
import { CoursesHolder } from '../Courses Of The Weekend/CoursesHolder/CoursesHolder'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'
import { Teachers } from '../Teacher OF The Weekend/TeachersHolder/Teachers'
import {getCourseList} from '../../../../core/services/api/CourseList.ts'
import { getTopBlogs } from '../../../../core/services/api/TopBlogs.ts'


const ContentLandingHolder = (props) => {
  const [courseList, setCourseList] = useState([]);
  const [topBlogs, setTopBlogs] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const getList = async () => {
    const courses = await getCourseList(7);
    setCourseList(courses);
    setisLoading(false)
  };
  const TopBlogs = async () => {
    const Blogs = await getTopBlogs();
    setTopBlogs(Blogs.news);
  }

  useEffect(() => {
    getList();
    TopBlogs();
  }, []);
  return (
    <>
        <div className={style.contentLanding}>
          <BannerHolder MAndJ={props.MAndJ} />
          <ProgrammingLanguagesHolder />
          <OurGoalsHolder />
          <ServicesHolder />
          <CoursesHolder isLoading={isLoading} courseList={courseList} />
          <Blogs topBlogs={topBlogs} />
          <Teachers />
        </div>
    </>
  )
}

export {ContentLandingHolder}