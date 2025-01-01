import React from 'react'
import style from './style.module.css'
import { Dislike } from './dislike'
import { Like } from './like'

const DislikeAndLikeHolder = ({dissLikeCount,like}) => {
  return (
    <div className={style.holder}>
        <Dislike dissLikeCount={dissLikeCount} />
        <Like like={like}  />
    </div>
  )
}

export {DislikeAndLikeHolder}