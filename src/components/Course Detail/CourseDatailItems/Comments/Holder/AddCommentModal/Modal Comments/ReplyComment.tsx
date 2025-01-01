import React from 'react'
import style from './ReplyComments.module.css'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'

const ReplyComment = ({title, pictureAddress, describe, author, dissLikeCount, likeCount, insertDate}) => {
    return (
        <div className={style.mainHolder}>
            <div className={style.isReply}></div>
            <div className={style.holder}>
            <div className={style.header}>
                <div className={style.holderUser}>
                    <div className={style.holderUsername}>
                        <div className={style.userName}> {author} </div>
                        <div className={style.insertDate}> {dateConvertor(insertDate)} </div>
                    </div>
                    <img className={style.userAvatar} src={pictureAddress} />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.commentTitle}> {title} </div>
                <div className={style.commentDesc}> {describe} </div>
            </div>
        </div>
        </div>
    )
}

export {ReplyComment}