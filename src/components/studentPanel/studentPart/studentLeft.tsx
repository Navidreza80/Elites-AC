import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { NavLink } from "react-router-dom";
import { DarkOrLightMode } from "./DarkOrLightMode";

import profile from "../../../assets/Images/userName.png"
import { getProfile } from "../../../core/services/api/getProfileInfo";
import { useEffect, useState } from "react";
import { removeItem } from "../../../core/services/storage/storage.services";
import { useTranslation } from "react-i18next";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../State/State";
const StudentGhabLeft = () => {
  
    const { t } = useTranslation();
    const [user, setUser] = useState([])
    const [isLogin, setIsLogin] = useGlobalState('isLogin');
    const [sthChanged, setsthChanged] = useGlobalState('sthChangedStu')
    const getUserInfo = async () => {
        const userInfo = await getProfile();
        setUser(userInfo)
    }
    useEffect(() => {
        getUserInfo()
    }, [])
    useEffect(() => {
        getUserInfo()
    }, [sthChanged])

    return (
        <Formik>
            <div className={style.header}>
                <div className={style.accountHolder}>
                    <input id="hamburgerMenu" type="checkBox" className={style.checkBox} />
                    <label htmlFor="hamburgerMenu" className={style.hamburgerMenu}>
                        <div className={style.right2}>
                            <div className={style.close}></div>
                            <div className={style.logoBahr}> </div>
                            <div className={style.bottom}>
                                <div className={style.menu}>
                                    <div>
                                        <div className={style.home}> </div>
                                        <NavLink to='/' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("MainPage")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.Dashboard}> </div>
                                        <NavLink to='/Student-Panel/dashboard' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Dashboard")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyPeriod}> </div>
                                        <NavLink to='/Student-Panel/My-Courses' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("myCourse")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.MyReservation}> </div>
                                        <NavLink to='/Student-Panel/My-Reserve' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("MyReservation")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.favoritePeriod}> </div>
                                        <NavLink to="/Student-Panel/Fav-Courses" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("FavoriteCourses")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.BlogMenu}> </div>
                                        <NavLink to="/Student-Panel/Fav-Blogs" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("FavoriteBlogs")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.profile}> </div>
                                        <NavLink to='/Information' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Profile")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.pay}> </div>
                                        <NavLink to="/Shopping-Basket" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Payments")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.profile}> </div>
                                        <NavLink to='/Student-Panel/Information' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Profile")}</NavLink>
                                    </div>
                                    <div>
                                        <div className={style.jobs}> </div>
                                        <NavLink to='/Student-Panel/my-jobs' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("jobs")}</NavLink>
                                    </div>
                                    <div className={style.logout}>
                                        <div className={style.exit}> </div>
                                        <NavLink to="/" className="DannaM" onClick={() => {
                                            removeItem("token")
                                            setIsLogin(false)
                                        }}> {t("SignOut")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                    <img src={user.currentPictureAddress} className={style.userProfile} />
                    <div className={style.userHolder}>
                        <p className={style.userName} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{user.fName} {user.lName}</p>
                        <p className={style.userLevel} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("collegian")} </p>
                    </div>
                </div>
                <div className={style.navigate}>
                    <NavLink to="/" className={style.titleHeader} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("MainPage")} </NavLink>
                    <p className={style.titleHeader} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("Report")} </p>
                    <p className={style.titleHeader} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("contactUs")}</p>
                </div>
                <div className={style.notifAndDarkHolder}>
                    <div className={style.notif}>
                    </div>
                    <DarkOrLightMode />
                </div>
            </div>
        </Formik>
    )
}
export { StudentGhabLeft }