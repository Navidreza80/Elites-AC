import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'

import { Level } from './index/Items/level&CategoryHolder/Level'
import { Type } from './index/Teacher&Date&View/type'
import { NavLink } from 'react-router-dom'
import { postReserveCourse } from '../../../../../core/services/api/postAddCourseReserve'
import toast, { Toaster } from 'react-hot-toast'
import { getCourseById } from '../../../../../core/services/api/courseById'
import { useEffect, useState } from 'react'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
import { deleteCourseFavourite } from '../../../../../core/services/api/deleteCourseFavourite'
const FavCoursesCards = (props) => {

  const [courseDetail, setCourseDetail] = useState({})
  const [courseReserve, setcourseReserve] = useState(false)

  const reserveCourse = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await postReserveCourse(props.id)
    if(res.success === true) {
      toast.remove("1");
      toast.success("عملیات با موفقیت انجام شد")
      setcourseReserve(true)
    }
    else {
      toast.remove("1");
      toast.error("خطا در انجام عملیات")
  }
  }

  const getCourseDetail = async () => {
    const Details = await getCourseById(props.id)
    setCourseDetail(Details)
    console.log(Details)
    if(Details.isCourseReseve === "1"){
      setcourseReserve(true)
    }
    else if(Details.isCourseReseve === "0"){
      setcourseReserve(false)
    }
  }

  const onDelete = async () => {
    toast.loading('درحال پردازش', {
      id: "1"
  })
    let res = await deleteCourseFavourite(courseDetail?.userFavoriteId)
    console.log(res)
    if(res.success == true){
      toast.remove("1");
      toast.success('دوره از لیست علاقه مندی حذف شد')
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
        <Image image={props.image} />
        <Title title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Type type={props.type} />
        <Level level={props.level}/>
        <div className={style.closeAndViewHolder}>
          <NavLink to={"/Course-Detail/" + props.id} className={style.View} data-theme={identifier("view","view2","view3","view4","view5","view6")}></NavLink>
          {courseReserve === false ? <span className={style.Book} onClick={() => reserveCourse()}></span> : <span className={style.isReserved}></span>}
          <span className={style.Close} onClick={() => onDelete()}></span>
        </div>
    </div>
  )
}

export {FavCoursesCards}