import React from 'react'
import style from './Graphic.module.css'
import { HolderBahr } from './Teachers/Bahrololoom/HolderBahr'
import { HolderEsf } from './Teachers/Esfandiary/HolderEsf'
import { HolderKh } from './Teachers/KhalilPoor/HolderKh'

const Graphic = () => {
  return (
    <div className={style.holder}>
        <HolderBahr />
        <HolderEsf />
        <HolderKh />
    </div>
  )
}

export {Graphic}