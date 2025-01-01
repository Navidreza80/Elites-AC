import React from 'react'
import style from './style.module.css'
import { Comments } from './Comments'
import { Ratee } from './Rate'

const RateAndCommentsHolder = ({rate, comments, isLoading}) => {
  return (
    <div className={style.holder}>
        <Comments isLoading={isLoading} comments={comments} />
        <Ratee isLoading={isLoading} rate={rate} />
    </div>
  )
}

export {RateAndCommentsHolder}