import { CardBlogs } from '../cardsBlogs'
import style from './cardsBlogsListStyle.module.css'
import { getAllBlogsList } from '../../../../core/services/api/AllBlogsList'
import { useEffect, useState } from 'react'
import { FilterBlogs } from '../../../../core/services/api/getBlogsFilterList'
import { CardsBlogSkeleton } from './CardsBlogSkeleton'
import { getSortBlog } from '../../../../core/services/api/getSortBlog'

const ListCardBlogs = ({categoryId, applyFilter, searchValue, applySort, col, sortType}) => {
  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const allBlogsList = async () => {
    setisLoading(true)

    let allBlogs = await getAllBlogsList()

    let sortData = await getSortBlog(col, sortType)

    let allBlogsFiltered = await FilterBlogs(categoryId)

    if(applyFilter === true){
      setBlogsList(allBlogsFiltered.news)
      console.log(allBlogsFiltered.news)
    }
    else if(applyFilter === false && applySort === false){
      setBlogsList(allBlogs.news)
      setBlogsList(allBlogs.news.filter(doc => doc.title.includes(searchValue)))
    }
    else if(applySort === true){
      setBlogsList(sortData.news)
    }

    setisLoading(false)
  }

  useEffect(() => {
    allBlogsList()
  }, [])
  useEffect(() => {
    allBlogsList()
  }, [applyFilter])
  useEffect(() => {
    allBlogsList()
  }, [searchValue])
  useEffect(() => {
    allBlogsList()
  }, [applySort])
  useEffect(() => {
    allBlogsList()
  }, [sortType])
  useEffect(() => {
    allBlogsList()
  }, [col])


  return (
    <div className={style.holder}>
      {isLoading && <CardsBlogSkeleton cards={9} />}
        {blogsList.map((item, index) => {
        return (
          <CardBlogs 
            key={index}
            title={item.title}
            teacher={item.addUserFullName}
            view={item.currentView}
            id={item.id}
            image={item.currentImageAddressTumb}
            date={item.insertDate}
          />
        )
      })}
    </div>
  )
}

export {ListCardBlogs}