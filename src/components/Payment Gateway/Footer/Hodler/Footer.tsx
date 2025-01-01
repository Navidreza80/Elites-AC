import React from 'react'
import style from './Footer.module.css'
import { Bottom } from '../Items/Bottom'
import { Top } from '../Items/Top'
import { FooterFixed } from '../Items/FooterFixed'
const Footer = () => {
  return (
    <div className={style.footer}>
      <Top />
      <Bottom />
      <FooterFixed />
    </div>
  )
}

export { Footer }