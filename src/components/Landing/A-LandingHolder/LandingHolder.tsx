import React, { useEffect, useState } from 'react'
import style from './LandingHolder.module.css'
import { ContentLandingHolder } from '../Content Landing/ContentLandingHolder/ContentLandingHolder'
import {getStudentAndTeacherCount} from '../../../core/services/api/StudentAndTeacher.ts'
import toast, { Toaster } from 'react-hot-toast'

import { getProfile } from '../../../core/services/api/getProfileInfo.ts'
import { motion, useScroll } from "framer-motion";
import { identifier } from '../../../core/services/Functions/ThemeIdentifier.ts'
import { useGlobalState } from '../../../State/State.tsx'

const LandingHolder = () => {
  const [MAndJ, setMAndJ] = useState([])
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const [isLanding, setisLanding] = useGlobalState('isLanding')

  const getSAndT = async () => {
    const SAndT = await getStudentAndTeacherCount();
    setMAndJ(SAndT)
  }

  const getProfilee = async () => {
    let userInfo = await getProfile()
    setUserInfoObj(userInfo)
  }

  useEffect(() => {
    getSAndT();
    // isLoginOrNot();
    getProfilee();
    setisLanding(true)
  }, [])
  useEffect(() => {
    getProfilee();
  }, [isLogin])
  useEffect(() => {
    return () => {
      setisLanding(false)
    }
  }, [])
  


  
  return (
    <>
      <Toaster />
        <div className={style.landing} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
          <ContentLandingHolder
            MAndJ={MAndJ}
          />
        </div>
    </>
  )
}

export {LandingHolder}