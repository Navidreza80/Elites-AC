import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import { useEffect, useState } from "react";
import { getTeacher } from '../../../../core/services/api/TeachersList'
import {TacherListSkeleton} from './TacherListSkeleton';

const ListCardBlogs = ({teacherList, isLoading}) => {

  return (
    <div className={style.holder}>
        {isLoading && <TacherListSkeleton cards={8} />}
        {teacherList.map((item, index) => {
        return (
          <CardBlogs 
            key={index}
            title={item.fullName}
            image={item.pictureAddress}
            count={item.courseCounts}
            countN={item.newsCount}
            LinkedinProf={item.linkdinProfileLink}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}