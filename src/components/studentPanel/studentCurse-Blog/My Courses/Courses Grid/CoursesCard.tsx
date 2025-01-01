import style from './ItemsHolder.module.css'
import { Image } from './index/Items/Image'
import { Title } from './index/Items/Title'
import { Teacher } from './index/Teacher&Date&View/Teacher'
import { Date } from './index/Teacher&Date&View/Date'
import { Level } from './index/Teacher&Date&View/Level'

import { NavLink } from 'react-router-dom'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'
const CardBlogs = (props) => {

  return (
    <div className={style.holder}>
        <Image image={props.image} />
        <Title title={props.title} />
        <Teacher teacher={props.teacher} />
        <Date date={props.date} />
        <Date date={props.date} />
        <Level level={props.level}/>
        <NavLink to={"/Course-Detail/" + props.id} className={style.View} data-theme={identifier("view","view2","view3","view4","view5","view6")}></NavLink>
    </div>
  )
}

export {CardBlogs}