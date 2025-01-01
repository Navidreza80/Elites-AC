import React from 'react'
import style from './style.module.css'

import toast from 'react-hot-toast';
import { postCourseDisLike } from '../../../../../../core/services/api/postCourseDislike';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../../State/State';
const DisLike = ({id}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');


  const dislikeCourse = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postCourseDisLike(id)
    if(res.success === true){
      toast.remove("1");
      toast.success("دوره با موفقیت دیسلایک شد")
      setIsLiked("0")
    }
    if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }

  return (
    <div data-theme={identifier("darkDisLikeDetail","darkDisLikeDetail2","greenDisLikeDetail","pinkDisLikeDetail","blueDisLikeDetail","redDisLikeDetail")} className={isDisLiked == "1" ? style.disLiked : style.dislike} onClick={() => isDisLiked === "0" && dislikeCourse()}></div>
  )
}

export {DisLike}