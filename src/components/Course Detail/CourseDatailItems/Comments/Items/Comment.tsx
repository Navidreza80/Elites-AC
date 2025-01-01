import React, { useEffect } from 'react'
import style from './style.module.css'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
import { HolderItems } from './HolderItems'
const Comment = ({title, currentUserEmotion, id, describe, pictureAddress, author, disslikeCount, likeCount, insertDate, commentId}) => {

  
  return (
    <div className={style.comments} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
      <HolderItems title={title} currentUserEmotion={currentUserEmotion} id={id} describe={describe} pictureAddress={pictureAddress} author={author} disslikeCount={disslikeCount} likeCount={likeCount} insertDate={insertDate} commentId={commentId} />
    </div>
  )
}

export {Comment}