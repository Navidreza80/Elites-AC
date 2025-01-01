import { FavBlogsCards } from '../FavBlogsCards'
import style from './FavBlogsCardsListStyle.module.css'
import { MyFavBlogsSkeleton } from './Skeleton'

const FavBlogsCardsList = ({isLoading, userFavBlogsObj}) => {

  return (
    <div className={style.holder}>
        {isLoading && <MyFavBlogsSkeleton cards={8} />}
        {userFavBlogsObj.map((item, index) => {
        return (
          <FavBlogsCards
            key={index}
            title={item.title}
            teacher={item.currentView}
            date={item.updateDate}
            image={item.currentImageAddressTumb}
            level={item.currentRate}
            id={item.newsId}
          />
        )
      })}
    </div>
  )
}

export {FavBlogsCardsList}