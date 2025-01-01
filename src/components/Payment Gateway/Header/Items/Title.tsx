import React from 'react'
import style from './Items.module.css'

const Title = () => {
  return (
    <div className={style.titleHolder}>
      <div className={style.title}>پرداخت اینترنتی به پرداخت ملت</div>
      <span className={style.Link}>www.Behpardakht.com </span>
    </div>
  )
}

export {Title}