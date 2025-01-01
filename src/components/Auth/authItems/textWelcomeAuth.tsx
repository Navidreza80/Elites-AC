import React from 'react'
import  styleLogin  from "./../Auth.module.css";
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { identifier } from '../../../core/services/Functions/ThemeIdentifier';

const TextWelcomeAuth = () => {
    const { t } = useTranslation();
  
    return (
        <div className={styleLogin.textWelcome}>
            <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="text-black text-right font-DannaBold text-3xl w-full">{t("headerTitleCoursesList")}</h1>
            <h1 data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")} className="mt-2 text-base items-right font-DannaDemiBold w-full text-right">{t("authDesc")}</h1>
        </div>
    )
}

export {TextWelcomeAuth}