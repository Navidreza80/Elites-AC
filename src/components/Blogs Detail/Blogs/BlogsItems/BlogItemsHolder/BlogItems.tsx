import React from 'react'
import style from './BlogItems.module.css'
import { Image } from '../Items/ImageBlog/Image'
import { Title } from '../Items/TitleBlog/Title'
import { Bottom } from '../Items/BottomHolder/Bottom'

const BlogItems = (props) => {
  return (
    <div className={style.holder}>
        <Image image={props.image} id={props.id} />
        <Title title={props.title} />
        <Bottom pub={props.pub} date={props.date} views={props.views} />
    </div>
  )
}

export {BlogItems}