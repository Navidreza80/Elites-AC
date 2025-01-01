import React from 'react'
import style from './style.module.css'
import { Price } from './Price'
import { Teacher } from './Teacher'

const TeacherAndPriceHolder = ({teacher, price}) => {
  return (
    <div className={style.holder}>
        <Price price={price} />
        <Teacher teacher={teacher} />
    </div>
  )
}

export {TeacherAndPriceHolder}