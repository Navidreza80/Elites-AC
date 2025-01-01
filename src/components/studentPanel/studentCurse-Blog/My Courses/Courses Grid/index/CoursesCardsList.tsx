import { CardBlogs } from '../CoursesCard'
import style from './cardsBlogsListStyle.module.css'
import { MyCoursesSkeleton } from './Skeleton'

const ListCardBlogs = ({data, isLoading}) => {

  return (
    <div className={style.holder}>
        {isLoading && <MyCoursesSkeleton cards={8} />}
        {data.map((item, index) => {
        return (
          <CardBlogs
            key={index} 
            title={item.courseTitle}
            teacher={item.fullName}
            date={item.lastUpdate}
            image={item.tumbImageAddress}
            level={item.levelName}
            id={item.courseId}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}