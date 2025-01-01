import styleBlogList from '../../../../Style/blogList.module.css'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier.ts';

const NewInputBlogs = ({isClicked1, setisClicked1, setisClicked2, setapplySort, setSortType, setCol}) => {

  const { t } = useTranslation();
  return (
    <>
      <div className={isClicked1 ? styleBlogList.selectedC : styleBlogList.categories} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} onClick={() => {
        setisClicked1(true)
        setisClicked2(false)
        setapplySort(true)
        setSortType("DESC")
        setCol("insertDate")
      }}>
        {t("newest")}
      </div>
    </>
  )
}

export { NewInputBlogs }