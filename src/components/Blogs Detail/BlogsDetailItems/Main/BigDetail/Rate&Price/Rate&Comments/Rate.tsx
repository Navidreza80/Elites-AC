import React from 'react'
import style from './style.module.css'

import { Rate } from "antd";
import { ClipLoader } from 'react-spinners';
import { StarFilled } from '@ant-design/icons';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const Ratee = ({rate, isLoading}) => {

  return (
    <>
  <Rate character={<StarFilled style={{fontSize: "25px"}} /> } defaultValue={rate} disabled/>
      {isLoading ? <ClipLoader /> : <div className={style.number} data-theme={identifier("dark","dark2","green","pink","blue","red")}>({rate})</div>}
    </>

  )
}

export {Ratee}