import React from 'react'
import style from '../../../Style/blogList.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../core/services/Functions/ThemeIdentifier.ts';

const TitleHeaderBlogs = () => {
  const { t } = useTranslation();


  return (
    <div className={style.titleBlogs}>
      <h1 className={style.h1} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("headerTitleBlogsList")}</h1>
      <p className={style.p} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("headerDescBlogsList1")}   <br />{t("headerDescBlogsList2")}</p>
    </div>
  )
}

export {TitleHeaderBlogs}