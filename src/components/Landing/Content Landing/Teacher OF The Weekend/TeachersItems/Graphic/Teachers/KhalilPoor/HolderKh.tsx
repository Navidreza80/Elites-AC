import React from 'react'
import style from './Teachers.module.css'
import { NameKh } from './NameKh'
import { ProfileKh } from './ProfileKh'
import { RankKh } from './RankKh'



const HolderKh = () => {
  return (
    <div className={style.holder}>
      <ProfileKh />
      <RankKh />
      <NameKh />
    </div>
  )
}

export {HolderKh}