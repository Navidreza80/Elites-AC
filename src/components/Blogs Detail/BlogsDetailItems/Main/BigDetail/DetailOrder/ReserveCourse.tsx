import React, { useState } from 'react'
import style from './style.module.css'

const ReserveCourse = ({id}) => {
  const [value, setValue] = useState(`localhost:5173/Blogs-Detail/${id}`)
  const copyBlogPage = () => {
    navigator.clipboard.writeText(value)
  }
  return (
    <div className={style.reserve} onClick={() => copyBlogPage()}>کپی کردن لینک صفحه</div>
  )
}

export {ReserveCourse}