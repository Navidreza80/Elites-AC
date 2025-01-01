import { Formik, Form, Field } from "formik";
import style from "./../../Style/aboutWe.module.css";
import {AboutWeDesc} from "./aboutWeItems/aboutWe.tsx";
import {TargetWe} from "./aboutWeItems/TargetWe.tsx";
import {Teaching} from "./aboutWeItems/teaching.tsx";
import {TeamTeaching} from "./aboutWeItems/team teaching.tsx";
import {CursesTeaching} from "./aboutWeItems/CursesTeaching.tsx";
import {AboutUsTitleHeader} from "./aboutWeItems/aboutUsTitleHeader.tsx";
import {Learning} from "./aboutWeItems/Learning.tsx";
import {LearningWorld} from "./aboutWeItems/LearningWorld.tsx";
import {Programming} from "./aboutWeItems/Programming.tsx";

import { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { identifier } from '../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from "../../State/State.tsx";

const AboutWe = (props) => {
  const [isAboutUs, setisAboutUs] = useGlobalState('isAboutUs');
  const [darkMode, ] = useGlobalState('DarkMode');
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setisAboutUs(true)
  }, [])
  useEffect(() => {
    return () => {
      setisAboutUs(false)
    }
  }, [])
  
  return (
  <>
    <Formik>
      {(form) => (
        <div className={style.container} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
          <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
          <div className={style.page} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
            <AboutUsTitleHeader />
          <div className={style.page2} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
            <AboutWeDesc />
            <TargetWe />
            <Teaching />
            <TeamTeaching />
            <CursesTeaching />
            <Learning />
            <LearningWorld />
            <Programming />
          </div>  
        </div>
        </div>
      )}
    </Formik>
  </>
  )
}


export { AboutWe }
