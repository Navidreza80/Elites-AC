import style from "./../../../../../Style/studentPanel.module.css";
import s from './modal.module.css'

import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { Modal } from "antd";
import { Comment } from "./comment";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../../../State/State";
const TitleHeaderMyCommentList = ({courseCommentt, newsComment, setdata, data}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBlog, setisBlog] = useState(false)
  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const { t } = useTranslation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={style.titleHeaderMyCourseList}>
        <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("YourComments")}</h1>
        <div  onClick={showModal}>{t("ButtonViewAll")} </div>
        <Modal data-theme={identifier("dark","dark2","green","pink","blue","red")} closeIcon={null} footer={null} width={851} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={s.titleHolder}>
            <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={s.close}> {t("close")} </div>
            <div className={s.blogOrCourse}>
              <div className={isBlog === false ? s.courses : s.selected} onClick={() => {
                setisBlog(true)
                setdata(newsComment)
                }}> {t("blogs")} </div>
              <div className={isBlog === true ? s.courses : s.selected} onClick={() => {
                setisBlog(false)
                setdata(courseCommentt)
                }}> {t("courses")} </div>
            </div>
            <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={s.title}> {t("YourComments")} </div>
          </div>
          <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={s.holderComments}>
          {data.map((item, index) => {
            return(
              <Comment
                id={item.commentId}
                courseId={item.courseId}
                avatar={userInfoObj.currentPictureAddress}
                userName={userInfoObj.fName}
                date={item.insertDate}
                title={item.title}
                description={item.describe}
                likeCount={item.likeCount}
                disLikeCount={item.dislikeCount}
              />
            )
          })}
          </div>
        </Modal>
      </div>
      </>
  )
}

export {  TitleHeaderMyCommentList }