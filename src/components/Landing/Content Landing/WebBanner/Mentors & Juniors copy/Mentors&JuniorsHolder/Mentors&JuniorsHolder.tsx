import React from 'react'
import style from './Mentors&JuniorsHolder.module.css'
import { Juniors } from '../Mentors&JuniorsItems/Juniors'
import { Mentors } from '../Mentors&JuniorsItems/Mentors'

const MentorsAndJuniorsHolderRes = (props) => {
  return (
    <>
        <div className={style.container}>
          <Juniors studentCount={props.MAndJRes} />
          <Mentors teacherCount={props.MAndJRes}  />
        </div>
    </>
  )
}

export {MentorsAndJuniorsHolderRes};