import { Field, Formik } from "formik";
import styleInform from "./../../InformationPage/partInformation/Information.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Linkedin = () => {
  
    const { t } = useTranslation();

    return (
        <div className={styleInform.location}>
            <div className={styleInform.bigDiv}>
                <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("Linkedin")}</h1>
                <Field name="linkdinProfile" className={styleInform.Input} placeholder={t("enterLinkLinkedin")} data-theme={identifier("dark","dark2","green","pink","blue","red")} />
            </div>
        </div>
    )
}

export { Linkedin }