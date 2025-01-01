import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Status } from './index/Teacher&Date&View/Status'

import { useEffect, useState } from 'react'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { deleteCourseReserve } from '../../../../../core/services/api/deleteCourseReserve'
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const ReserveCards = (props) => {

  const [courseDetail, setCourseDetail] = useState({})
  const [accept, setAccept] = useState("")

  const getCourseDetail = async () => {
    const Details = await getCourseById(props.id)
    setCourseDetail(Details)
    console.log()
  }

  const deleteCourseReserveCall = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let s = await deleteCourseReserve(props.reserveId)
    console.log(s)
    if(s.success === true){
      toast.remove("1");
      toast.success("عملیات با موفقیت انجام شد")
    }
    else {
      toast.remove("1");
      toast.error("خطا در انجام عملیات")
  }
  }

  useEffect(() => {
    getCourseDetail()
  }, [])
  return (
    <div className={style.holder}>
      <Toaster />
        <Image image={courseDetail.imageAddress} />
        <Title title={courseDetail.title} />
        <Teacher teacher={courseDetail.teacherName} />
        <Date date={courseDetail.startTime} />
        <Date date={courseDetail.endTime} />
        <Status status={courseDetail.isCourseUser}/>
        <div className={style.closeAndViewHolder}>
          <NavLink to={"/Course-Detail/" + props.id} className={style.View} data-theme={identifier("view","view2","view3","view4","view5","view6")}></NavLink>
          <span className={style.Close} onClick={() => deleteCourseReserveCall()} ></span>
        </div>
    </div>
  )
}

export {ReserveCards}