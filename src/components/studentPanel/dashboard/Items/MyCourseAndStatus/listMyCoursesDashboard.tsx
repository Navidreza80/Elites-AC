import style from "./../../../../../Style/studentPanel.module.css";

import { ListCardBlogs } from '../../../studentCurse-Blog/My Courses/Courses Grid/index/CoursesCardsList';
import { TitleHeaderMyCourseList } from './TitleHeaderMyCourseList';
import { HeaderList } from './HeaderList';
import { useEffect, useState } from "react";
import { getMyCourse } from "../../../../../core/services/api/getMyCourse";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const ListMyCoursesDashboard = () => {

  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const myCourses = async () => {
    let res = await getMyCourse()
    setdata(res.listOfMyCourses)
    setisLoading(false)
  }
  useEffect(() => {
    myCourses()
  }, [])
  return (

    <div className={style.listMyCoursesDashboard} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <TitleHeaderMyCourseList />
      <HeaderList />
      <ListCardBlogs isLoading={isLoading} data={data} />
    </div>
  )
}

export { ListMyCoursesDashboard }