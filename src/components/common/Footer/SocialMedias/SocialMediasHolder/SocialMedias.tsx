import React from 'react'
import style from '../../../../../Style/SocialMedias.module.css'
import { SocialMediasItemsHolder } from '../SocialMediasItemsHolder/SocialMediasItemsHolder'

const SocialMedias = () => {
  return (
    <>
        <div className={style.SocialMediasHolder}>
          <SocialMediasItemsHolder />
        </div>
    </>
  )
}

export {SocialMedias};