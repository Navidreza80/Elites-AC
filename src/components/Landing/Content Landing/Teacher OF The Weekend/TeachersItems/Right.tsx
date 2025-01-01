import React from 'react'
import style from './TeachersItems.module.css'
import { Title } from './Title'
import { Paragraph } from './Paragraph'
import { Button } from './Button'

const Right = () => {
  return (
    <div className={style.holder}>
        <Title />
        <Paragraph />
        <Button />
    </div>
  )
}

export {Right}