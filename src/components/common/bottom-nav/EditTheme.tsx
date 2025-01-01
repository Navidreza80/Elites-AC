import React, { useState } from "react";
import style from "./LangButton.module.css";
import { useGlobalState } from "../../../State/State";

  const EditTheme = () => { 
    const [isClicked, setisClicked] = useState(false)
    const [darkMode, setDarkMode] = useGlobalState('DarkMode');
    const [darkMode2, setDarkMode2] = useGlobalState('DarkMode2');
    const [greenMode, setGreenMode] = useGlobalState('GreenMode');
    const [pinkMode, setPinkMode] = useGlobalState('PinkMode');
    const [blueMode, setBlueMode] = useGlobalState('BlueMode');
    const [redMode, setRedMode] = useGlobalState('RedMode');
    

  return (
    <div className={style.pencil} onClick={() => setisClicked(!isClicked)}>
        {isClicked && <div className={style.holderPalette}>
            <div className={style.theme1} onClick={() => {
              setDarkMode(false)
              setDarkMode2(false)
              setRedMode(!redMode)
              setBlueMode(false)
              setGreenMode(false)
              setPinkMode(false)
            }}></div>
            <div className={style.theme2} onClick={() => {
              setDarkMode(false)
              setDarkMode2(false)
              setRedMode(false)
              setBlueMode(false)
              setGreenMode(!greenMode)
              setPinkMode(false)
            }}></div>
            <div className={style.theme3} onClick={() => {
              setDarkMode(false)
              setDarkMode2(!darkMode2)
              setRedMode(false)
              setBlueMode(false)
              setGreenMode(false)
              setPinkMode(false)
            }}></div>
            <div className={style.theme4} onClick={() => {
              setDarkMode(false)
              setDarkMode2(false)
              setRedMode(false)
              setBlueMode(!blueMode)
              setGreenMode(false)
              setPinkMode(false)
            }}></div>
            <div className={style.theme5} onClick={() => {
              setDarkMode(false)
              setDarkMode2(false)
              setRedMode(false)
              setBlueMode(false)
              setGreenMode(false)
              setPinkMode(!pinkMode)
            }}></div>
            <div className={style.theme6} onClick={() => {
              setDarkMode(!darkMode)
              setDarkMode2(false)
              setRedMode(false)
              setBlueMode(false)
              setGreenMode(false)
              setPinkMode(false)
            }}></div>
        </div>}
    </div>
  )
  }

export default EditTheme;