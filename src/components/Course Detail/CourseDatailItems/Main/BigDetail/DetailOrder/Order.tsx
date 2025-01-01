import React, { useState } from 'react'
import style from './style.module.css'
import { ReserveCourse } from './ReserveCourse'
import { AddToFavourite } from './AddToFavourite'
import { Like } from './Like'
import { DisLike } from './DisLike'

const Order = ({id, userLikeId}) => {
  return (
    <div className={style.holder}>
        <DisLike id={id}/>
        <Like userLikeId={userLikeId} id={id}/>
        <AddToFavourite id={id}/>
        <ReserveCourse id={id}/>
    </div>
  )
}

export {Order}