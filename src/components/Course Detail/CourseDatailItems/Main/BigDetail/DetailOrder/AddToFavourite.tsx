import React from 'react'
import style from './style.module.css'
import { postCourseFavourite } from '../../../../../../core/services/api/postCourseFavoutite'
import toast from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'


const AddToFavourite = ({id}) => {
  const [isFavourite, setIsFavourite] = useGlobalState('isFavoriteCourse');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');

  const addToFavoutite = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postCourseFavourite({courseId: `${id}`})
    if(res.success === true){
      toast.remove("1");
      toast.success("دوره به لیست مورد علاقه اضافه شد")
      setIsFavourite(true)
    }
    if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <div className={isFavourite ? style.AddedToFav : style.AddToFav} onClick={() => addToFavoutite()}>{isFavourite === false ? " اضافه به لیست موردعلاقه" : "به لیست مورد علاقه اضافه شد"}</div>
  )
}

export {AddToFavourite}