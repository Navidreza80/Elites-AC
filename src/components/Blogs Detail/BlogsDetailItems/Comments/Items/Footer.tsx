import React, { useEffect, useState } from 'react'
import style from './style.module.css'

import { likeComment } from '../../../../../core/services/api/postCommentBlogLike';
import toast, { Toaster } from 'react-hot-toast';
import { dateConvertor } from '../../../../../core/services/Functions/DateMiladi';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Footer = ({autor, pictureAddress, dissLikeCount, likeCount, inserDate, currentUserIsDissLike, currentUserIsLike, id}) => {

  const [renderLike, setrenderLike] = useState(false)
  const { t } = useTranslation();

  const [isClicked, setisClicked] = useState(false)
  const [isClicked2, setisClicked2] = useState(false)

  useEffect(() => {
    setisClicked(currentUserIsLike)
    setisClicked2(currentUserIsDissLike)
  }, [])
  

  const likeSystem = async (id, type) => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await likeComment(id, type)
    setrenderLike(!renderLike)
    if(res.success === true){
      toast.remove("1");
      toast.success('عملیات با موفقیت انجام شد')
    }
    else {
      toast.remove("1");
      toast.error("خطا در انجام عملیات")
  }
  }

  
  
  return (
    <div className={style.footer}>
      <Toaster />
        <div className={style.likeAndDislikes}>
            <div className={style.count} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {likeCount} </div>
            <div data-theme={identifier("darkLikeDetail","darkLikeDetail2","greenLikeDetail","pinkLikeDetail","blueLikeDetail","redLikeDetail")} className={isClicked ? style.like : style.iconLike} onClick={() => {
              likeSystem(id, true)
              setisClicked(true)
              setisClicked2(false)
            }}></div>
            <div className={style.count} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {dissLikeCount} </div>
            <div data-theme={identifier("darkDisLikeDetail","darkDisLikeDetail2","greenDisLikeDetail","pinkDisLikeDetail","blueDisLikeDetail","redDisLikeDetail")} className={isClicked2 ? style.dislike : style.iconDislike} onClick={() => {
              likeSystem(id, false)
              setisClicked(false)
              setisClicked2(true)
            }}></div>
        </div>
        <div className={style.user}>
            <div className={style.username} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {autor} </div>
            <img className={style.profile} src={pictureAddress} />
            <div className={style.date} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {dateConvertor(inserDate)} </div>
        </div>
    </div>
  )
}

export {Footer}