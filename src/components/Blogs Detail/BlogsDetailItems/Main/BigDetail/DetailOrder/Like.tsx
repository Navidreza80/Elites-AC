import React from 'react'
import style from './style.module.css'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import toast, { Toaster } from 'react-hot-toast'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../../../../State/State'
import { useTranslation } from 'react-i18next'
const Like = ({isClicked, setIsClicked2, setIsClicked, id}) => {
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const { t } = useTranslation();

  const likeNewsCall = async (id) => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await likeNews(id)
    if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
    if(res.success === true) {
      toast.remove("1");
      toast.success(res.message)
    }
  }
  return (
    <>
    <Toaster />
    <div data-theme={identifier("darkLikeDetail","darkLikeDetail2","greenLikeDetail","pinkLikeDetail","blueLikeDetail","redLikeDetail")} className={isClicked ? style.liked : style.like} onClick={() => {
      likeNewsCall(id)
      setIsClicked2(false)
      setIsClicked(true)
    }}></div>
    </>
  )
}

export {Like}