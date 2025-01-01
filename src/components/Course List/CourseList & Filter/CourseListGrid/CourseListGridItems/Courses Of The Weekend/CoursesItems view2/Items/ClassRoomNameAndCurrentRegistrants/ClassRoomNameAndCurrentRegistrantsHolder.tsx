import React from 'react'
import style from './style.module.css'
import { ClassRoomName } from './ClassRoomName'
import { CurrentRegistrants } from './currentRegistrants'

const ClassRoomNameAndCurrentRegistrants = ({classRoomName,currentRegistrants}) => {
  return (
    <div className={style.holder}>
        <ClassRoomName classRoomName={classRoomName} />
        <CurrentRegistrants currentRegistrants={currentRegistrants}  />
    </div>
  )
}

export {ClassRoomNameAndCurrentRegistrants}