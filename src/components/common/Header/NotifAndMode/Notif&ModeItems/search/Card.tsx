import React, { useState } from 'react'
import style from './SeachModal.module.css'
import { NavLink } from 'react-router-dom'

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const CardModal = ({ id, title, desc, image, NavLinkTitle, NavTitle }) => {
  const {t}=useTranslation();
    return (
        <div className={style.Card} data-theme={identifier("dark","dark2","green","pink","blue","red")}>
            <div className={style.CardBody}>
                <img src={image && image.slice(0,5) == "https" && image !== null ? image : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} />
                <div>
                    <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={style.CardTitle}>{title}</div>
                    <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={style.CardDesc}>{desc}</div>
                </div>
            </div>
            <NavLink to={NavLinkTitle + id} className={style.CardBottom}>{t("ViewDetail")} {NavTitle}</NavLink>
        </div>
    )
}

export { CardModal }