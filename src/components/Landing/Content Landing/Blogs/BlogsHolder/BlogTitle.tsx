import React from 'react'
import style from './Blogs.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';

const BlogTitle = () => {
  const{t}= useTranslation();

  return (
    <div className={style.holderTitle}>
        <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("blogTitleLanding")}</div>
    </div>
  )
}

export default BlogTitle