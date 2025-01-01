import React from 'react'
import style from './style.module.css'
import Bahr from '../../../../../assets/Images/Bahr.jpg'

import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi';
import { postCourseCommentLike } from '../../../../../core/services/api/postCoureCommentLike';
import toast, { Toaster } from 'react-hot-toast';
import { postCourseCommentDisLike } from '../../../../../core/services/api/postCourseCommentDisLike';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Footer = ({pictureAddress, currentUserEmotion, id, author, disslikeCount, likeCount, insertDate, commentId}) => {


  return (
    <div className={style.footer}>
      <Toaster />
        <div className={style.likeAndDislikes}>
            <div className={style.count} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{likeCount}</div>
            <div data-theme={identifier("darkLikeDetail","darkLikeDetail2","greenLikeDetail","pinkLikeDetail","blueLikeDetail","redLikeDetail")} className={currentUserEmotion == "LIKED" ? style.liked : style.like} onClick={async () => {
                                  toast.loading('درحال پردازش', {
                                    id: "1"
                                })
              let res = await postCourseCommentLike(commentId)
              if(res.success === true){
                toast.remove("1");
                toast.success("کامنت لایک شد")
              }
              else {
                toast.remove("1");
                toast.error("خطا در انجام عملیات")
            }
            }}></div>
            <div className={style.count} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{disslikeCount}</div>
            <div data-theme={identifier("darkDisLikeDetail","darkDisLikeDetail2","greenDisLikeDetail","pinkDisLikeDetail","blueDisLikeDetail","redDisLikeDetail")} className={currentUserEmotion == "DISSLIKED" ? style.disliked : style.dislike} onClick={async () => {
                                  toast.loading('درحال پردازش', {
                                    id: "1"
                                })
              let res = await postCourseCommentDisLike(commentId)
              console.log(res)
              if(res.success === true){
                toast.remove("1");
                toast.success("کامنت دیس لایک شد")
              }
              else {
                toast.remove("1");
                toast.error("خطا در انجام عملیات")
            }
            }}></div>
        </div>
        <div className={style.user}>
            <div className={style.username} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{author}</div>
            <img className={style.profile} src={pictureAddress} />
            <div className={style.date} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{dateConvertor(insertDate)}</div>
        </div>
    </div>
  )
}

export {Footer}