import { Formik, Form, Field } from "formik";
import style from "./../../Style/teacher.module.css";
import { ListCardBlogs } from "./blogsListGrid/index/cardsBlogsList.tsx";
import { SearchFilter } from "./blogsListGrid/index/search/searchFilter.tsx";
import { useEffect, useState } from "react";
import {getTeacher} from '../../core/services/api/TeachersList.ts'

import { useTranslation } from 'react-i18next';
import { motion, useScroll } from "framer-motion";
import { identifier } from "../../core/services/Functions/ThemeIdentifier.ts";
const TeacherList = (props) => {
  const { t } = useTranslation();
  const [teacherList, setTeacherList] = useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [applyFilter, setApplyFilter] = useState(false)
  const [isLoading, setisLoading] = useState(true)
  const { scrollYProgress } = useScroll()

  const getTeacherList = async () => {
    setisLoading(true)
    const teacher = await getTeacher();
    setTeacherList(teacher);
    setisLoading(false)
  };

  useEffect(() => {
    getTeacherList();
  }, []);

  useEffect(() => {
    getTeacherList();
  }, [searchValue]);



  return (
  <>
    <Formik>
      {(form) => (

        <div className=' h-full w-full flex flex-wrap justify-center mt-12' data-theme={identifier("dark","dark2","green","pink","blue","red")}>
          <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
          <div className={style.titleHolder}>
            <h1 className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("TeacherPage")}</h1>
            <h1 className={style.p} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("TeacherPageDesc")}</h1>
          </div>  
          <div className={style.page}>
            <div className={style.page2}>      
              <ListCardBlogs isLoading={isLoading}  teacherList={teacherList} />
            </div>
          </div>  
        </div>
      )}
    </Formik>
  </>
  )
}


export { TeacherList }
