import style from "./link.module.css";

import { useTranslation } from "react-i18next";
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";

const Button = () => {
  
    const { t } = useTranslation();

    return (
        <div>
            <button className={style.button} type="submit" onClick={(e) => e.preventDefault()}> {t("ChangePassword")}</button>
        </div>
    )
}

export { Button }