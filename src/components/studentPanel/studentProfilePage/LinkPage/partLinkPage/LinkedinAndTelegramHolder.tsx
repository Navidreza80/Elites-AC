import styleInform from "./../../InformationPage/partInformation/Information.module.css";
import style from '../../../../../Style/studentPanel.module.css'

import { Telegram } from "./telegram";
import { Linkedin } from "./linkedin";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const LinksHolder = () => {
  

    return (
    <div className={styleInform.left}>
        <Linkedin />
        <Telegram />
        <button type="submit" className={style.button}> ثبت </button>
    </div>

    )
}

export { LinksHolder }