import React from 'react'
import style from './Main.module.css'
import { BigImage } from './BigImage/BigImage'
import { BigDetail } from './BigDetail/BigDetailHolder/BigDetail'
import { Category } from './BigDetail/DetailTop/TopItems/Category'

const Main = ({isLoading, id, image, teacher, views, likes, dislikes, rate, title, category, comment, insertDate, currentUserIsDissLike, currentUserIsLike}) => {
  return (
    <div className={style.main}>

        <BigDetail 
          category={category}
          title={title}
          teacher={teacher}
          views={views}
          likes={likes}
          dislikes={dislikes}
          rate={rate}
          comment={comment}
          insertDate={insertDate}
          currentUserIsLike={currentUserIsLike}
          currentUserIsDissLike={currentUserIsDissLike}
          isLoading={isLoading}
          id={id}
        />
        <BigImage image={image} />

    </div>
  )
}

export {Main}