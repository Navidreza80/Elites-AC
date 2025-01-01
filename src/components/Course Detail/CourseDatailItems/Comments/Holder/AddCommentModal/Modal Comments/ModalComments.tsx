import React, { useEffect, useState } from 'react'
import style from './ModalComments.module.css'
import { MainComment } from './MainComment'
import { getReplyComment } from '../../../../../../../core/services/api/getReplyCommentsBlog'
import { ReplyComment } from './ReplyComment'
import toast from 'react-hot-toast'
import { likeComment } from '../../../../../../../core/services/api/postCommentBlogLike'
import { getCourseReplyComment } from '../../../../../../../core/services/api/getReplyCourseComment'

const ModalComments = ({title, currentUserEmotion, courseId, describe, author, dissLikeCount, pictureAddress, likeCount, insertDate, id}) => {

    const [repliesObj, setRepliesObj] = useState([])

    const getReplyCall = async (id) => {
      let res = await getCourseReplyComment(courseId, id)
      setRepliesObj(res)
    }

    useEffect(() => {
        getReplyCall(id)
    }, [])

    return (
        <>
        <div className={style.holderReplyAndComment}>
            <MainComment
            currentUserEmotion={currentUserEmotion}
            title={title}
            describe={describe}
            author={author}
            dissLikeCount={dissLikeCount}
            likeCount={likeCount}
            insertDate={insertDate}
            id={id}
            pictureAddress={pictureAddress}
            />
            {repliesObj.map((item, index) => {
                return(
                    <ReplyComment
                        key={index}
                        title={item.title}
                        describe={item.describe}
                        author={item.author}
                        dissLikeCount={item.dissLikeCount}
                        likeCount={item.likeCount}
                        insertDate={item.insertDate}
                        pictureAddress={item.pictureAddress}
                    />
                )
            })}
        </div>
        </>
    )
}

export {ModalComments}