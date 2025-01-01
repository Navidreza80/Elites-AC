import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Ratee } from './Rate'

const RateAndCommentsHolder = ({rate, comment, isLoading}) => {
  return (
    <div className={style.holder}>
        <Comments comment={comment} isLoading={isLoading}/>
        <Ratee isLoading={isLoading} rate={rate} />
    </div>
  )
}

export {RateAndCommentsHolder}