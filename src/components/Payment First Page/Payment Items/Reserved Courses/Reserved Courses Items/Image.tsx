import React from 'react'
import style from './Items.module.css'
import figmaCourse from '../../../../../assets/Images/FigmaCourse.png'

const Image = ({Image}) => {
  return (
    <>
        <img src={Image && Image.slice(0, 5) === "https" ? Image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} className={style.image} />
    </>
  )
}

export {Image}