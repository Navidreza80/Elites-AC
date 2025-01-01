import React from 'react'
import style from './style.module.css'
import { postReserveCourse } from '../../../../../../core/services/api/postAddCourseReserve'
import toast, { Toaster } from 'react-hot-toast'
import { useGlobalState } from '../../../../../../State/State'


const ReserveCourse = ({id}) => {
  const [isReserved, setIsReserved] = useGlobalState('isReserved');
  const [isLogin, setIsLogin] = useGlobalState('isLogin');

  const reserveCourse = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postReserveCourse(id)
    if(res.success === true){
      toast.remove("1");
      toast.success("دوره رزرو شد")
      setIsReserved("1")
    }
    if(isLogin === false){
      toast.remove("1");
      toast.error("لطفا به حساب کاربری خود وارد شوید")
    }
  }
  return (
    <>
    <Toaster />
        <div className={isReserved === "1" ? style.reserved : style.reserve} onClick={() => {
          isReserved && reserveCourse()
        }}>{isReserved === "1" ? "دوره رزرو شد" : "رزرو دوره"}</div>
    </>
  )
}

export {ReserveCourse}