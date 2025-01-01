// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './style.module.css'
import { EditOutlined } from '@ant-design/icons'

// ** Table columns 

export const columnJobs = [
  {
    name: 'عنوان شغل',
    minWidth: '100px',
    cell: row => {

      return (
            <h6 className={style.h6}>{row.jobTitle}</h6>
      )
    }
  },
  
  {
    name: 'توضیحات',
    minWidth: '100px',
    cell: row => {

      return (
            <h6 className={style.h6}>{row.aboutJob}</h6>
      )
    }
  },
  {
    name: 'مشغول به کار',
    minWidth: '100px',
    cell: row => {
      const i = (row) => {
        if(row.inWork == true){
          return "هستم"
        }
        else if(row.inWork == false){
          return "نیستم"
        }
      }
      return (
            <h6 className={style.h6}>{i(row)}</h6>
      )
    }
  },
  {
    name: 'عملیات',
    minWidth: '100px',
    cell: row => {
      return (
            <h6 className={style.inRow}>
              <EditOutlined />  
            </h6>
      )
    }
  },
]