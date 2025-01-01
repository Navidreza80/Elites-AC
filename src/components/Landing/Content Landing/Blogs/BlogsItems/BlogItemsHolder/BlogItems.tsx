import React from 'react'
import style from './BlogItems.module.css'
import { Image } from '../Items/ImageBlog/Image'
import { Title } from '../Items/TitleBlog/Title'
import { Bottom } from '../Items/BottomHolder/Bottom'

const BlogItems = ({image, id, title, pub, views, date}) => {
  return (
    <div className={style.holder}>
        <Image image={image} id={id} />
        <Title title={title} />
        <Bottom pub={pub} views={views} date={date} />
    </div>
  )
}

export {BlogItems}