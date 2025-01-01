import { FavCoursesCards } from '../FavCoursesCards'
import style from './FavCoursesCardsListStyle.module.css'
import figmaCourse from '../../../../../../assets/Images/figmaBlog.png'
import JSBlog from '../../../../../../assets/Images/jsBlog.png'
import {FavCoursesSkeleton} from '../FavCoursesSkeleton'

const FavCoursesCardsList = ({userFavcoursesObj, isLoading}) => {

  return (
    <div className={style.holder}>
      {isLoading && <FavCoursesSkeleton cards={8} />}
        {userFavcoursesObj.map((item, index) => {
        return (
          <FavCoursesCards
            key={index}
            title={item.courseTitle}
            type={item.typeName}
            teacher={item.teacheName}
            date={item.lastUpdate}
            image={item.tumbImageAddress}
            level={item.typeName}
            id={item.courseId}
          />
        )
      })}
    </div>
  )
}

export {FavCoursesCardsList}