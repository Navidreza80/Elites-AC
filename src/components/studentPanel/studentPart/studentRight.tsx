import { Formik } from "formik";
import style from "./../../../Style/studentPanel.module.css"
import { NavLink } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { removeItem } from "../../../core/services/storage/storage.services";
import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
import { useGlobalState } from "../../../State/State";
const StudentGhabRight = () => {
    const { t } = useTranslation();
  
    const [isLogin, setIsLogin] = useGlobalState('isLogin');

    return (
        <Formik>
            <div className={style.right}>
                <div className={style.logoBahr}> </div>
                <div className={style.bottom}>
                    <div className={style.menu}>
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
                            <NavLink to='/Student-Panel/Information' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Profile")}</NavLink>
                        </div>
                        <div>
                            <div className={style.jobs}> </div>
                            <NavLink to='/Student-Panel/my-jobs' data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{t("jobs")}</NavLink>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M7 6.67008C5.93408 6.67008 4.91969 6.55077 4 6.33549C3.04003 6.11078 2 6.80207 2 7.80855V18.8175C2 19.6259 2 20.0301 2.19412 20.4469C2.30483 20.6846 2.55696 21.008 2.75898 21.1714C3.11319 21.4578 3.4088 21.527 4 21.6654C4.91969 21.8807 5.93408 22 7 22C8.91707 22 10.6675 21.6141 12 20.978C13.3325 20.342 15.0829 19.956 17 19.956C18.0659 19.956 19.0803 20.0753 20 20.2906C20.96 20.5153 22 19.824 22 18.8175V7.80855C22 7.00018 22 6.596 21.8059 6.17918C21.6952 5.94146 21.443 5.61808 21.241 5.45472C20 4.43869 18 5.4422 18 5.4422" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" />
                                <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z" stroke="#FCFCFC" stroke-width="1.5" />
                                <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M5.5 14.5V14.509" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M18.5 12.4922V12.5012" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M12 2C12.7002 2 14.0085 3.9943 14.5 4.5M12 2V8" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <NavLink to="/Student-Panel/Shopping-Basket" data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("Payments")}</NavLink>
                        </div>
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
        </Formik>
    )
}
export { StudentGhabRight }