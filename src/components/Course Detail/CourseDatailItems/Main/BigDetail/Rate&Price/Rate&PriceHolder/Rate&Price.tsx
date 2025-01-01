import React from 'react'
import style from './Rate&Price.module.css'
import { Price } from '../Price/Price'
import { RateAndCommentsHolder } from '../Rate&Comments/RateAndCommentsHolder'

const RateAndPrice = ({comments, rate, price, isLoading}) => {
  return (
    <div className={style.holder}>
        <Price price={price} isLoading={isLoading} />
        <RateAndCommentsHolder rate={rate} comments={comments} isLoading={isLoading} />
    </div>
  )
}

export {RateAndPrice}