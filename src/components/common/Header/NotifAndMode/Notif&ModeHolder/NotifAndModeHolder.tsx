import React from 'react'
import style from '../../../../../Style/NotifAndMode.module.css'
import { Notification } from '../Notif&ModeItems/Notification'
import { DarkOrLightMode } from '../Notif&ModeItems/DarkOrLightMode'
import { MiniBasket } from '../Notif&ModeItems/miniBasket'
import { Menu } from '../Notif&ModeItems/Menu'
import  SearchModal  from '../Notif&ModeItems/search/searchModal/searchModal'
import { User } from '../Notif&ModeItems/User'
import { useGlobalState } from '../../../../../State/State'


const NotifAndModeHolder = () => {
  const [isLogin, setIsLogin] = useGlobalState('isLogin');
  return (
    <div className={style.container}>
      
      <Notification />
      <Menu />
      <SearchModal />
      {isLogin === true && <User />}
    </div>
  )
}

export {NotifAndModeHolder}