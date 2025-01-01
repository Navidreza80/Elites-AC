import { Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../InformationPage/partInformation/Information.module.css";
import styleLink from "../Change Security/Items/EditSecurity.module.css";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { EditSecurityHolder } from "./Items/EditSecurityHolder";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";

const ChangeSecurity = () => {
  
    const { t } = useTranslation();

    return (
            <>
                <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("myProfile")}</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
                            <div className={styleInform.right}>
                                <NavLink to="/Student-Panel/Information" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("informationAccount")} </NavLink>
                                <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("images")} </NavLink>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("placeInform")} </NavLink>
                                <NavLink to="/Student-Panel/Link" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("links")} </NavLink> 
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("ChangePassword")} </NavLink> 
                                <div><h1 className={styleLink.selected}> {t("UserSettings")} </h1></div>
                            </div>
                        </div>
                        <EditSecurityHolder />
                    </div>
            </>
    )
}

export { ChangeSecurity }