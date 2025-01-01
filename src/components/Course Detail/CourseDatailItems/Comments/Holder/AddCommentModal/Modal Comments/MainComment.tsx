import React, { useEffect, useState } from 'react'
import style from './ModalComments.module.css'
import { likeComment } from '../../../../../../../core/services/api/postCommentBlogLike'
import toast, { Toaster } from 'react-hot-toast'
import { postCourseCommentLike } from '../../../../../../../core/services/api/postCoureCommentLike'
import { postCourseCommentDisLike } from '../../../../../../../core/services/api/postCourseCommentDisLike'
import { Field, Formik, Form } from 'formik'
import { postCourseReplyComment } from '../../../../../../../core/services/api/postCourseReplyComment'
import { dateConvertor } from '../../../../../../../core/services/Functions/DateMiladi'
import { useGlobalState } from '../../../../../../../State/State'
import { useTranslation } from 'react-i18next'


const MainComment = ({title, currentUserEmotion, pictureAddress, describe, author, dissLikeCount, likeCount, insertDate, id}) => {
    const [replyComment, setreplyComment] = useState(false)
    const [isReplying, setIsReplying] = useGlobalState('isReplying');
    const [commentId, setCommentId] = useGlobalState('courseCommentId');
    const { t } = useTranslation();

    return (
    <>
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
        <div className={style.footer}>
            <div className={currentUserEmotion == "LIKED" ? style.liked : style.like} onClick={async () => {
                                    toast.loading('درحال پردازش', {
                                        id: "1"
                                    })
            let res = await postCourseCommentLike(id)
            if(res.success === true){
                toast.remove("1");
            toast.success('کامنت لایک شد')
            }
            else {
                toast.remove("1");
                toast.error("خطا در انجام عملیات")
            }
            }}></div>
            <div className={style.likeCount}> {likeCount} </div>
            <div className={currentUserEmotion == "DISSLIKED" ? style.disliked : style.dislike} onClick={async () => {
                                    toast.loading('درحال پردازش', {
                                        id: "1"
                                    })
            let res = await postCourseCommentDisLike(id)
            if(res.success === true){
                toast.remove("1");
            toast.success('کامنت دیس لایک شد')
            }
            else {
                toast.remove("1");
                toast.error("خطا در انجام عملیات")
            }
            }}></div>
            <div  className={style.dislikeCount}> {dissLikeCount} </div>
            <div  className={style.reply} onClick={() => {
                setIsReplying(!isReplying)
                setCommentId(id)
                }}> {t("answer")} </div>
        </div>
    </div>
    </>
  )
}

export {MainComment}