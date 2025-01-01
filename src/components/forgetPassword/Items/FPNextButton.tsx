import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styleLogin from "../../../Style/list.module.css";

import { identifier } from "../../../core/services/Functions/ThemeIdentifier";
const FPNextButton = () => {
  const { t } = useTranslation();

  return (
    <div data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")} className={styleLogin.LoginAccount}>
      <button data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className="h-full w-full text-white bg-blue-600 text-lg leading-4 font-lg font-DannaBold uppercase tracking-wider cursor-pointer rounded-full overflow-hidden" type="submit">{t("sendLink")}</button>
    </div>
  )
}

export { FPNextButton }