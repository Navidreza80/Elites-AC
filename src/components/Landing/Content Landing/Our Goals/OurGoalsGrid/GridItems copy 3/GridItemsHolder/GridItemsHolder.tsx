import React from 'react'
import style from './GridItemsHolder.module.css'
import { GridItemsTitle } from '../GridItemsTitle/GridItemsTitle'
import { Description } from '../GridItemsDescription/Description'
import { Image } from '../GridItemsImage/Image'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier'
const GridItemsHolderFour = () => {


  return (
    <div className={style.holder} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <GridItemsTitle />
      <Description />
      <Image />
    </div>
  )
}

export {GridItemsHolderFour}