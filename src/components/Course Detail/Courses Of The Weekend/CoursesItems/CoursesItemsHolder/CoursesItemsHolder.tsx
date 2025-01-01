import React from 'react'
import style from './ItemsHolder.module.css'
import { Image } from '../Items/image'
import { Title } from '../Items/title'
import { TeacherAndPriceHolder } from '../Items/Teacher&PriceHolder/TeacherAndPriceHolder'
import { LevelAndCategoryHolder } from '../Items/level&CategoryHolder/LevelAndCategoryHolder'

const CoursesItemsHolder = (props) => {
  return (
    <div className={style.holder}>
        <Image image={props.image} id={props.id} />
        <Title title={props.title} />
        <TeacherAndPriceHolder teacher={props.teacher} price={props.price} />
        <LevelAndCategoryHolder level={props.level} category={props.category} />
    </div>
  )
}

export {CoursesItemsHolder}