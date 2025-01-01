import React from 'react'
import style from './ProgrammingLanguageItems.module.css'
import { Css } from '../Icons/css.tsx'
import { Html } from '../Icons/html.tsx'
import { Js } from '../Icons/js.tsx'
import { ReactIcon } from '../Icons/react.tsx'
import { Figma } from '../Icons/figma.tsx'

const ProgrammingLanguagesItems = () => {
  return (
    <div className={style.container}>
      <Html />
      <Css />
      <Js />
      <ReactIcon />
      <Figma />
    </div>
  )
}

export {ProgrammingLanguagesItems}