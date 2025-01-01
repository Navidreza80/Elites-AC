import { Field, Formik, Form } from "formik";
import styleInform from "./Information.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const GenderAndBirthdey = ({setisMale, isMale, form}) => {
    const { t } = useTranslation();
  



    return (

        <>
            <div className={styleInform.genderAndBirthdey}>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("birthday")}</h1>
                    <Field name="birthDay" className={styleInform.Input} placeholder={t("enterBirthday")} data-theme={identifier("dark","dark2","green","pink","blue","red")} />
                </div>
                <div className={styleInform.smallDiv}>
                    <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("gender")}</h1>
                    <div className={styleInform.inputGender}>
                        <div>
                            <Field type="radio" id="manInput" name="gender2" className={styleInform.GenderInput} onChange={() => {
                                setisMale(true)
                            }} />
                            <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("man")}</h1>
                        </div>
                        <div>
                            <Field type="radio" id="womanInput" name="gender2" className={styleInform.GenderInput} onChange={() => {
                                setisMale(false)
                            }} />
                            <h1 data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("woman")}</h1>
                        </div>
                        <button onClick={() => {
                            if (isMale === true) {
                                form.values.gender2 = true;
                            }
                            else if (isMale === false) {
                                form.values.gender2 = false;
                            }
                        }}> {t("select")}</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export { GenderAndBirthdey }