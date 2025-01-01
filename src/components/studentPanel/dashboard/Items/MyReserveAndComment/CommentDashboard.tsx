import style from "./../../../../../Style/studentPanel.module.css";

import { CoursesAndBlogsHolder } from './CoursesAndBlogsHolder';
import { TitleHeaderMyCommentList } from './TitleHeaderMyCommentList';
import { getMyCourseComment } from "../../../../../core/services/api/getMyCourseComments";
import { useEffect, useState } from "react";
import { getMyNewsComment } from "../../../../../core/services/api/getMyNewsComments";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const CommentDashboard = () => {

  const [courseCommentt, setcourseCommentt] = useState([])
  const [newsComment, setnewsComment] = useState([])
  const [data, setdata] = useState([])

  const courseComment = async () => {
    let res = await getMyCourseComment()
    setcourseCommentt(res.myCommentsDtos)

    let res2 = await getMyNewsComment()
    setnewsComment(res2.myNewsCommetDtos)

    setdata(res.myCommentsDtos)
  }

  useEffect(() => {
    courseComment()
  }, [])

  return (
    <div className={style.commentDashboard} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <TitleHeaderMyCommentList data={data} courseCommentt={courseCommentt} newsComment={newsComment} setdata={setdata} />
      <CoursesAndBlogsHolder courseCommentt={courseCommentt} />
    </div>
  )
}

export { CommentDashboard }