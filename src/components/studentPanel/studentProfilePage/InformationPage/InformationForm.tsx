import { Field, Formik, Form } from "formik";
import style from "./../../../../Style/studentPanel.module.css";
import styleInform from "./partInformation/Information.module.css";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { putUserInfoEdit } from "../../../../core/services/api/putUserInfoEdit";
import { getProfile } from "../../../../core/services/api/getProfileInfo";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next';
import { Name } from './partInformation/name';
import { AboutMe } from './partInformation/aboutMe';
import { NumberAndCode } from './partInformation/numberAndCode';
import { GenderAndBirthdey } from './partInformation/GenderAndBirthdey';
import { Email } from './partInformation/Email';
import { Location } from './partInformation/location';
import { identifier } from "../../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../../State/State";


const InformationForm = () => {
    const { t } = useTranslation();
  
    const [isMale, setisMale] = useState(true)
    const [sthChanged, setsthChanged] = useGlobalState('sthChangedStu')
    const [user, setUser] = useState()

    const updateProfileInfo = async (values) => {
        toast.loading('درحال پردازش', {
            id: "1"
        })
        let userr = await putUserInfoEdit(values)
        if (userr.success === true) {
            toast.remove("1");
            toast.success("عملیات با موفقیت انجام شد")
            setsthChanged(!sthChanged)
        }
        else {
            toast.remove("1");
            toast.error("خطا در انجام عملیات")
        }
    }
    const getUserInfo = async () => {
        const userInfo = await getProfile()
        setUser(userInfo)
    }
    useEffect(() => {
        getUserInfo()
    }, [])




    return user && (
        <Formik
            initialValues={{
                lName: user.lName,
                fName: user.fName,
                userAbout: user.userAbout,
                homeAdderess: user.homeAdderess,
                nationalCode: user.nationalCode,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                birthDay: user.birthDay,
                email: user.email,
            }}
            onSubmit={(values) => {
                updateProfileInfo(values)
                console.log("hgghg")
            }}>
            {(form) => (
                <>
                    <Toaster />
                    <div className={style.titleHolder}>
                        <h1 className={style.title} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("myProfile")}</h1>
                    </div>
                    <div className={styleInform.page2}>
                        <div className={styleInform.rightHolder} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>
                            <div className={styleInform.right}>
                                <div><h1 className={styleInform.selected}> {t("informationAccount")}</h1></div>
                                <NavLink to="/Student-Panel/Image" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("images")} </NavLink>
                                <NavLink to="/Student-Panel/Location" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("placeInform")} </NavLink>
                                <NavLink to="/Student-Panel/Link" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("links")} </NavLink>
                                <NavLink to="/Student-Panel/changePassword" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("ChangePassword")} </NavLink>
                                <NavLink to="/Student-Panel/change-security" className={styleInform.pages} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("UserSettings")}  </NavLink> 
                            </div>
                        </div>
                        <Form className={styleInform.left}>
                            <Name />
                            <AboutMe />
                            <NumberAndCode />
                            <GenderAndBirthdey setisMale={setisMale} isMale={isMale} form={form}/>
                            <Email />
                            <Location />
                            <button type="submit">{t("applyChanges")}</button>
                        </Form>
                    </div>
                </>
            )}
        </Formik>
    )
}

export { InformationForm }