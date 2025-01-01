import React from 'react'
import style from './BigDetail.module.css'
import { Title } from '../DetailTitle/Title'
import { Top } from '../DetailTop/Holder/Top'
import { Bottom } from '../DetailBottom/Holder/Bottom'
import { RateAndPrice } from '../Rate&Price/Rate&PriceHolder/Rate&Price'
import { Order } from '../DetailOrder/Order'


const BigDetail = ({dislike, userLikeId, isLoading, id, rate, comments, like, price, teacher, status, level, category, title, start, end}) => {
  return (
    <div className={style.holder}>
        <Title id={id} title={title} isLoading={isLoading}/>
        <Top isLoading={isLoading} status={status} teacher={teacher} level={level} category={category} />
        <Bottom isLoading={isLoading} like={like} dislike={dislike} start={start} end={end} />
        <RateAndPrice isLoading={isLoading} comments={comments} rate={rate} price={price} />
        <Order userLikeId={userLikeId} id={id} />
    </div>
  )
}

export {BigDetail}