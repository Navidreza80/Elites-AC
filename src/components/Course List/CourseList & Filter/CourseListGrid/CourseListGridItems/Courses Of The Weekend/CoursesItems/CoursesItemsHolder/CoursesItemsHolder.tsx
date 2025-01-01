import React from 'react'
import style from './ItemsHolder.module.css'
import { Image } from '../Items/image'
import { Title } from '../Items/title'
import { TeacherAndPriceHolder } from '../Items/Teacher&PriceHolder/TeacherAndPriceHolder'
import { LevelAndCategoryHolder } from '../Items/level&CategoryHolder/LevelAndCategoryHolder'

const CoursesItemsHolder = ({image, id, title, teacher, price, level, category}) => {
  return (
    <div className={style.holder}>
        <Image id={id} image={image} />
          <Title title={title} />
          <TeacherAndPriceHolder teacher={teacher} price={price} />
        <LevelAndCategoryHolder level={level} category={category} />
    </div>
  )
}

export {CoursesItemsHolder}