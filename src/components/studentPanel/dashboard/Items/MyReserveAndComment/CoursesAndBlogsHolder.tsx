import style from "./../../../../../Style/studentPanel.module.css";
import s from './modal.module.css'

import {CommentMain} from './CommentMain'
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../../../State/State";

const CoursesAndBlogsHolder = ({courseCommentt}) => {

  const [userInfoObj, setUserInfoObj] = useGlobalState('userInfoObj');
  const { t } = useTranslation();

  return (

    <div className={style.CoursesAndBlogsHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
      <div className={style.CoursesAndBlogsLine}></div>
      <h1 className={style.CoursesAndBlogsSt} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}>{t("BlogsAndCourses")} </h1>
      <div className={style.CoursesAndBlogsLine}></div>
      <div data-theme={identifier("dark","dark2","green","pink","blue","red")} className={s.holderCommentsD}>
      {courseCommentt.map((item, index) => {
        return(
          <CommentMain
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
    </div>
  )
}

export { CoursesAndBlogsHolder }