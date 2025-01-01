import React from 'react'
import { Title } from './Title'
import { Content } from './Content'
import { Footer } from './Footer'

const HolderItems = ({title, currentUserEmotion, id, describe, pictureAddress, author, disslikeCount, likeCount, insertDate, commentId}) => {
  return (
    <>
        <Title title={title} />
        <Content describe={describe} />
        <Footer currentUserEmotion={currentUserEmotion} id={id} commentId={commentId} insertDate={insertDate} disslikeCount={disslikeCount} likeCount={likeCount} author={author} pictureAddress={pictureAddress} />
    </>
  )
}

export {HolderItems}