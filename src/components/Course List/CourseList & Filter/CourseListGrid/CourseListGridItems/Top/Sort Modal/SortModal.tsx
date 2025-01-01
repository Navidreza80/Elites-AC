import React from 'react'
import style from './Top.module.css'
import { TopItems } from './TopItems'

import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
const SortModal = ({setSortModal,applySort, setapplySort, setSortType, setCol,}) => {

  return (
    <div className={style.container}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>
      <TopItems setSortType={setSortType} setCol={setCol} setapplySort={setapplySort} applySort={applySort} setSortModal={setSortModal} />
    </div>
  )
}

export {SortModal}