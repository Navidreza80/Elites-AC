import React, { useState } from 'react'
import style from '../AllComments.module.css'
import { AddCommentModal } from '../AddCommentModal/AddCommentModal'
import { useTranslation } from 'react-i18next'

const AddComment = ({comments, title}) => {
  const [openModal, setOpenModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
        <div className={style.addComment}  onClick={showModal}>
            <div className={style.add}></div>
            <div className={style.bigText}> {t("YourComments")} </div>
            <div className={style.smallText} > {t("ClickForComment")} </div>
        </div>
        <AddCommentModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} title={title} comments={comments} />
    </>
  )
}

export {AddComment}