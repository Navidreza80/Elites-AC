import React, { useEffect, useState } from 'react'
import style from './BlogsDetail.module.css'
import { Main } from '../BlogsDetailItems/Main/Main'
import { Description } from '../BlogsDetailItems/Description/Description'
import { AllComments } from '../BlogsDetailItems/Comments/Holder/AllComments'
import { Blogs } from '../Blogs/BlogsHolder/Blogs'

import { useParams } from 'react-router-dom'
import { getBlogById } from '../../../core/services/api/BlogById'
import { getAllBlogsList } from '../../../core/services/api/AllBlogsList'
import { getRelatedBlog } from '../../../core/services/api/getRelatedBlog'
import { identifier } from '../../../core/services/Functions/ThemeIdentifier'
import { useGlobalState } from '../../../State/State'

const BlogsDetail = () => {

  const [isFavouriteBlog, setisCurrentUserFavorite] = useGlobalState('isFavouriteBlog');
  const [isLoading, setisLoading] = useState(true)
  const [blogDetail, setBlogDetail] = useState([])
  const [comments, setComments] = useState([])
  const [related, setrelated] = useState([])
  const {id} = useParams();

  const getBlogDetail = async () => {
    const Details = await getBlogById(id)
    setBlogDetail(Details.detailsNewsDto)
    setComments(Details.commentDtos)
    setisCurrentUserFavorite(Details?.detailsNewsDto.isCurrentUserFavorite)
    
    let relatedBlogs = await getRelatedBlog(Details?.detailsNewsDto.newsCatregoryId)
    setrelated(relatedBlogs)
    setisLoading(false)
  }
  useEffect(() => {
    getBlogDetail()
  }, [])

  useEffect(() => {
    getBlogDetail()
  }, [isFavouriteBlog])

  return (
    <div className={style.body} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
          <div className={style.holder}>
        <Main 
          category={blogDetail?.newsCatregoryName}
          title={blogDetail?.title}
          image={blogDetail?.currentImageAddressTumb}
          teacher={blogDetail?.addUserFullName}
          views={blogDetail?.currentView}
          likes={blogDetail?.currentLikeCount}
          dislikes={blogDetail?.currentDissLikeCount}
          rate={blogDetail?.currentRate}
          comment={blogDetail?.commentsCount}
          insertDate={blogDetail?.insertDate}
          currentUserIsDissLike={blogDetail?.currentUserIsDissLike}
          currentUserIsLike={blogDetail?.currentUserIsLike}
          id={blogDetail?.id}
          isLoading={isLoading}
        />
        <Description id={blogDetail?.id} rate={blogDetail?.currentUserRateNumber} description={blogDetail?.describe} isLoading={isLoading} />
        <AllComments title={blogDetail?.title} comments={comments} isLoading={isLoading} />
        <Blogs related={related}/>
    </div>
    </div>
  )
}

export {BlogsDetail}