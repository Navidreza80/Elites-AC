import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { addToFav } from '../../../../../../core/services/api/postNewsFav'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'
import { useTranslation } from 'react-i18next'


const AddToFavourite = ({id}) => {
  const [isFavouriteBlog, setisCurrentUserFavorite] = useGlobalState('isFavouriteBlog');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  const { t } = useTranslation();

  const addToFavCall = async (newsId) => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await addToFav(newsId);
    if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
    if(res.success === true) {
      toast.remove("1");
      toast.success("بلاگ به لیست مورد علاقه اضافه شد")
      setisCurrentUserFavorite("1")
    }
  }
  return (
    <>
      <Toaster />
      {
        <div className={isFavouriteBlog == true  ? style.isFaved : style.AddToFav} onClick={() => {isFavouriteBlog == false && addToFavCall(id);
        }}>{isFavouriteBlog == true ? "به لیست مورد علاقه اضافه شد" : "اضافه به لیست موردعلاقه"}</div>
      }
    </>
  )
}

export {AddToFavourite}