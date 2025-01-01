import React, { useEffect } from 'react'
import style from './Main.module.css'
import { BigImage } from './BigImage/BigImage'
import { BigDetail } from './BigDetail/BigDetailHolder/BigDetail'

const Main = ({dislike, userLikeId, isLoading, id, image, rate, comments, like, price, teacher, status, level, category, title, start, end}) => {
  
  return (
    <div className={style.main}>
        <BigDetail 
          userLikeId={userLikeId}
          isLoading={isLoading}
          dislike={dislike}
          like={like}
          rate={rate}
          comments={comments}
          price={price}
          teacher={teacher}
          status={status}
          level={level}
          category={category}
          title={title}
          start={start}
          end={end}
          id={id}
        />
        <BigImage image={image} />
    </div>
  )
}

export {Main}