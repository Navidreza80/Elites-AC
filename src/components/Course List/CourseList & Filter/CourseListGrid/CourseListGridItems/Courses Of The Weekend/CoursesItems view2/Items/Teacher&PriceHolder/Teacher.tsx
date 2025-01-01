import { useTranslation } from 'react-i18next';
import style from './style.module.css'

import { identifier } from '../../../../../../../../../core/services/Functions/ThemeIdentifier';
const Teacher = (props) => {

  const {t} = useTranslation();
  return (
    <div className={style.teacher} >{t("lecturer")}:  {props.teacher}</div>
  )
}

export {Teacher}