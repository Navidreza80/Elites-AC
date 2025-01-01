import React, { useEffect, useState } from 'react'
import style from './Items.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProfile } from '../../../../core/services/api/getProfileInfo'

const ContentLeft = ({price}) => {
  const {t} = useTranslation();
  const [user, setUser] = useState([])
  const getUserInfo = async () => {
      const userInfo = await getProfile();
      setUser(userInfo)
  }
  useEffect(() => {
      getUserInfo()
  }, [])
  return (
    <div className={style.contentLeft}>
      <div className={style.title}>
        <h1 >اطلاعات پذیرنده</h1>
      </div>
      <div className={style.img}>
        <img src='https://bpm.shaparak.ir/pgwchannel/img/ipg-defaltlogo.png' />
      </div>
      <div className={style.information}>
        <div>
          <h1> :نام پذیرنده</h1>
          <h2>{user.fName} {user.lName}</h2>
        </div>
        <div>
          <h1> :شماره پذیرنده</h1>
          <h2>35624343</h2>
        </div>
        <div>
          <h1> :شماره ترمینال</h1>
          <h2>67681024</h2>
        </div>
        <div>
          <h1> :آدرس وبسایت</h1>
          <NavLink to='/'>www.ReactElite.com</NavLink>
        </div>
      </div>
      <div className={style.price}>
        <h1>:مبلغ قابل پرداخت</h1>
        <h2>{price}  {t("toman")} </h2>
      </div>
    </div>
  )
}

export { ContentLeft }