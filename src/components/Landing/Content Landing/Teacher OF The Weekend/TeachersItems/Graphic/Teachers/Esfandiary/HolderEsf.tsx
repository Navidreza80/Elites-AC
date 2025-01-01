import React from 'react'
import style from './Teachers.module.css'
import { NameEsf } from './NameEsf'
import { ProfileEsf } from './ProfileEsf'
import { RankEsf } from './RankEsf'


const HolderEsf = () => {
  return (
    <div className={style.holder}>
      <ProfileEsf />
      <RankEsf />
      <NameEsf/>
    </div>
  )
}

export {HolderEsf}