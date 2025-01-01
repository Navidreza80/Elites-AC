import React, { useState } from 'react'
import style from '../../../Style/DarkOrLightMode.module.css'

import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
import { useGlobalState } from '../../../State/State';
const DarkOrLightMode = () => {

  const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');

  return (
    <>
        <input type='checkbox' id="check" className={style.inputToggle} onChange={() => {
          setDarkMode2(!darkMode2)
        }}/>
        <label htmlFor='check' className={style.DarkOrLight2} data-theme={identifier("darkOrLight","dark2OrLight")}></label>
    </>
  )
}

export {DarkOrLightMode}