import React, { useState } from 'react'
import style from './AllComments.module.css'
import { Comment } from '../Items/Comment'

import { AddComment } from './AddComment/AddComment';
import { PulseLoader } from 'react-spinners';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';

const AllComments = ({comments, isLoading, title}) => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}> {t("StAndTeComments")} </div>
        {isLoading && <PulseLoader />}
        {comments.slice(0,3).map((item, index) => {
          return (
            <Comment
              key={index}
              title={item.title}
              describe={item.describe}
              autor={item.autor}
              dissLikeCount={item.dissLikeCount}
              likeCount={item.likeCount}
              inserDate={item.inserDate}
              currentUserIsLike={item.currentUserIsLike}
              currentUserIsDissLike={item.currentUserIsDissLike}
              id={item.id}
              pictureAddress={item.pictureAddress}
            />
          )
        })}
        <AddComment title={title} comments={comments}/>
    </div>
  )
}

export {AllComments}