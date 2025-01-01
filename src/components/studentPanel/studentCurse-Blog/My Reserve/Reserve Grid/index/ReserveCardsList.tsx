import { ReserveCards } from '../ReserveCards'
import style from './ReserveCardsListStyle.module.css'
import { MyReserveCoursesSkeleton } from './Skeleton'

const ReserveCardsList = ({userReserveCoursesObj, isLoading}) => {

  return (
    <div className={style.holder}>
        {isLoading && <MyReserveCoursesSkeleton cards={8} />}
        {userReserveCoursesObj.map((item, index) => {
        return (
          <ReserveCards
            key={index}
            id={item.courseId}
            accept={item.accept}
            reserveId={item.reserveId}
          />
        )
      })}
    </div>
  )
}

export {ReserveCardsList}