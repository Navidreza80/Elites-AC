import style from './Bottom.module.css'
import { Likes } from '../BottomItems/Likes'
import { DisLikes } from '../BottomItems/DisLikes'
import { DateEnd } from '../BottomItems/DateEnd'
import { DateStart } from '../BottomItems/DateStart'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'

const Bottom = ({dislike, like, end, start, isLoading}) => {

  return (
    <div className={style.bottom} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <DisLikes isLoading={isLoading} dislike={dislike}  />
      <Likes isLoading={isLoading} like={like} />
      <DateEnd isLoading={isLoading} end={end} />
      <DateStart isLoading={isLoading} start={start} />
    </div>
  )
}

export { Bottom}