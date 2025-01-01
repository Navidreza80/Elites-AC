import React from 'react'
import style from './Teachers.module.css'
import { NameBahr } from './NameBahr'
import { ProfileBahr } from './ProfileBahr'
import { RankBahr } from './RankBahr'

const HolderBahr = () => {
  return (
    <div className={style.holder}>
      <ProfileBahr />
      <RankBahr />
      <NameBahr />
    </div>
  )
}

export {HolderBahr}