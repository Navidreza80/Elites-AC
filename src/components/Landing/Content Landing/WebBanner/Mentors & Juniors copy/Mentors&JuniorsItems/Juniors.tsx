import React from 'react'
import style from './Juniors.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';

const Juniors = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.container}>
      <div className={style.juniors}></div>
      <div className={style.studentCount}  data-theme={identifier("dark","dark2","green","pink","blue","red")}> + {props.studentCount.studentCount} </div>
      <div className={style.title}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("ActiveStudentBanner")} </div>
    </div>
  )
}

export {Juniors}