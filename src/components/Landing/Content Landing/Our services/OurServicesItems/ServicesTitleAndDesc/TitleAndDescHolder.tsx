import React from 'react'
import { Title } from './title'
import { Description } from './description'
import style from '../style.module.css'

const TitleAndDescHolder = (props) => {
  return (
    <div className={style.holder}>
        <Title title={props.title} />
        <Description desc={props.desc} />
    </div>
  )
}

export {TitleAndDescHolder}