import ChangeLang from './LangButton'
import { DarkOrLightMode } from '../Header/NotifAndMode/Notif&ModeItems/DarkOrLightMode'
import DarkAndLangButton from './DarkAndChangeButton'
import style from "./LangButton.module.css";
import { useState } from 'react';
import EditTheme from './EditTheme';

const LangAndMode = () => {
  const [isClicked, setisClicked] = useState(false)
  return (
    <div className={style.holder}>
      <div className={style.holder2}>
        <DarkAndLangButton setisClicked={setisClicked} isClicked={isClicked}/>
        {isClicked &&
          <>
            <EditTheme />
            <ChangeLang />
          </>
        }
      </div>
    </div>
  )
};
export default LangAndMode;