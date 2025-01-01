import { ErrorMessage, Field, Formik } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import styleLink from "./../../LinkPage/partLinkPage/link.module.css";
import { Form, NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const LastPassword = () => {
  
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("CurrentPassword")}</h1>
                <Field name="oldPassword" className={styleInform.Input} placeholder={t("enterCurrentPassword")} data-theme={identifier("dark","dark2","green","pink","blue","red")} />
                <ErrorMessage name="oldPassword" component={"p"} className="error" />
            </div>
        </div>

    )
}

export { LastPassword }