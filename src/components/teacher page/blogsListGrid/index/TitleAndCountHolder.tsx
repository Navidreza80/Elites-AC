import style from './Title&courseHolder.module.css'
import { Title } from './Items/Title'
import { CourseCounts } from './courseCounts'
import { NewsCounts } from './newsCounts'
import { NavLink } from "react-router-dom";
import { LinkedinProf } from './LinkedinProf';

const TitleAndCountHolder = (props) => {
  return (
    
    <div className={style.holder}>
        <Title title={props.title} />
        <CourseCounts count={props.count} />
        <NewsCounts countN={props.countN} />
        <LinkedinProf LinkedinProf={props.LinkedinProf} />
    </div>
  )
}

export {TitleAndCountHolder}