import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Location = () => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.location}>
                <div className={styleInform.bigDiv}>
                    <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("addressInform")}</h1>
                    <Field name="homeAdderess" className={styleInform.Input} placeholder={t("enterAddress")} data-theme={identifier("dark","dark2","green","pink","blue","red")} />
                </div>
            </div>

        </>
    )
}

export { Location }