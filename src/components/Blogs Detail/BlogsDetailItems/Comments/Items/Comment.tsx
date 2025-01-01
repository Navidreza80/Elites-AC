import React from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'

const Comment = ({describe, pictureAddress, title, autor, dissLikeCount, likeCount, inserDate, currentUserIsLike, currentUserIsDissLike, id}) => {

  return (
    <div className={style.comments} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <Title title={title} />
        <Content describe={describe} />
        <Footer pictureAddress={pictureAddress} id={id} autor={autor} dissLikeCount={dissLikeCount} likeCount={likeCount} inserDate={inserDate} currentUserIsLike={currentUserIsLike} currentUserIsDissLike={currentUserIsDissLike}/>
    </div>
  )
}

export {Comment}