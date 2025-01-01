import React from 'react'
import style from './style.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { likeNews } from '../../../../../../core/services/api/postNewsLike'
import { dislikeNews } from '../../../../../../core/services/api/postNewsDislike'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../../../../State/State'
import { useTranslation } from 'react-i18next'
const DisLike = ({ isClicked2, setIsClicked2, setIsClicked, id }) => {
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const { t } = useTranslation();

  const likeNewsCall = async (id) => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await dislikeNews(id)
    if (isLogin === false) {
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
    if (res.success === true) {
      toast.remove("1");
      toast.success(res.message)
    }
  }
  return (
    <>
      <Toaster />
      <div data-theme={identifier("darkDisLikeDetail","darkDisLikeDetail2","greenDisLikeDetail","pinkDisLikeDetail","blueDisLikeDetail","redDisLikeDetail")} className={isClicked2 ? style.disliked : style.dislike} onClick={() => {
        likeNewsCall(id)
        setIsClicked(false)
        setIsClicked2(true)
      }}></div>
    </>
  )
}

export { DisLike }