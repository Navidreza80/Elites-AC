import React from 'react'
import style from './style.module.css'
import { postCourseLike } from '../../../../../../core/services/api/postCourseLike'

import toast, { Toaster } from 'react-hot-toast';
import { deleteCourseLike } from '../../../../../../core/services/api/delete-course-like';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../../../../State/State';
const Like = ({id, userLikeId}) => {
  const [isLiked, setIsLiked] = useGlobalState('courseLike');
  const [isDisLiked, setDiIsLiked] = useGlobalState('courseDisLike');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  

  const likeCourse = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postCourseLike(id)
    if(res.success === true){
      toast.remove("1");
      toast.success("دوره با موفقیت لایک شد")
      setIsLiked("1")
    }
    else if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  const unLikeCourse = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res2 = await deleteCourseLike(userLikeId)
    console.log(res2)
    if(res2.success === true){
      toast.remove("1");
      toast.success("لایک دوره برداشته شد")
      setIsLiked("0")
    }
    else if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <>
      <Toaster />
      <div data-theme={identifier("darkLikeDetail","darkLikeDetail2","greenLikeDetail","pinkLikeDetail","blueLikeDetail","redLikeDetail")} className={isLiked == "1" ? style.liked : style.like} onClick={() => {
        if(isLiked == "0"){
          likeCourse()
        }
        else if(isLiked == "1"){
          unLikeCourse()
        }
        }}></div>
    </>
  )
}

export {Like}