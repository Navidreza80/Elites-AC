import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { TeacherAndViewAndDateHolder } from './index/Teacher&Date&View/TeacherAndDateAndViewHolder'

const CardBlogs = (props) => {
  return (
    <div className={style.holder}>
        <Image image={props.image} id={props.id} />
        <Title title={props.title} />
        <TeacherAndViewAndDateHolder teacher={props.teacher} view={props.view} date={props.date} />
    </div>
  )
}

export {CardBlogs}