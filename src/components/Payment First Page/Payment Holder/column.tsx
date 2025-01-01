// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getCourseById } from '../../../core/services/api/courseById'
import { dateConvertor } from '../../../core/services/Functions/DateMiladi'
import { Factor } from './Factor'
import style from './Payment.module.css'
import { useTranslation } from 'react-i18next'

// ** Table columns 

export const columnPayment = [
  {
    name: 'دوره',
    minWidth: '100px',
    cell: row => {
      const [course, setCourse] = useState({})
      const courseDetail = async () => {
        let res = await getCourseById(row.courseId)
        setCourse(res)
      }
      useEffect(() => {
        courseDetail()
      }, [])
      const { t } = useTranslation();
      return (
        <div className={style.FactorHolder}>
          <NavLink className={style.FactorNavLink} to={"/Course-Detail/" +course.courseId}>
            <img className={style.FactorImage} width={80} height={80} src={row.imageAdress && row.imageAdress.slice(0, 4) != "https" ? row.imageAdress : "https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg"} />
            <h6 className={style.h6}>{course.title}</h6>
          </NavLink>
        </div>
      )
    }
  },
  {
    name: 'مبلغ',
    minWidth: '100px',
    cell: row => {

      return (
        <div className={style.FactorHolder}>
          <div>
            <h6 className={style.h6}>{row.paid}تومان</h6>
            <h6 className={style.h6Res}>{(dateConvertor(row.insertDate))}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'تاریخ',
    minWidth: '100px',
    cell: row => {

      return (
        <div className={style.FactorHolder}>
          <div>
            <h6 className={style.h6}>{(dateConvertor(row.insertDate))}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'عملیات',
    minWidth: '100px',
    cell: row => {
      const [course, setCourse] = useState({})
      const courseDetail = async () => {
        let res = await getCourseById(row.courseId)
        setCourse(res)
      }
      useEffect(() => {
        courseDetail()
      }, [])
      return (
        <div className={style.FactorHolder}>
          <div>
            <Factor peymentDate={row.peymentDate} paymentId={row.paymentId} course={course} />
          </div>
        </div>
      )
    }
  },
]