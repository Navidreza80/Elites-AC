import React from 'react'
import style from './OurGoalsTitle.module.css'

import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const OurGoalsTitle = () => {
    const {t} = useTranslation();
  
    return (
        <div className={style.holderTitle}>
            <div className={style.title}  data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("ourGoalsLandingTitle")}</div>
        </div>

    )
}

export {OurGoalsTitle}