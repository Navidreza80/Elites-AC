import React from 'react'
import style from './Mentors&JuniorsHolder.module.css'
import { Juniors } from '../Mentors&JuniorsItems/Juniors'
import { Mentors } from '../Mentors&JuniorsItems/Mentors'

const MentorsAndJuniorsHolder = (props) => {
  return (
    <>
        <div className={style.container}>
          <Juniors studentCount={props.MAndJ} />
          <Mentors teacherCount={props.MAndJ} />
        </div>
    </>
  )
}

export {MentorsAndJuniorsHolder};