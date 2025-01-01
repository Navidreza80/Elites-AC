import {Field} from "formik";
import styleFilter from "../../../../blogs/filter/filter.module.css";
import style from "../Title&courseHolder.module.css";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../../../core/services/Functions/ThemeIdentifier";
const SearchFilter = ({setSearchValue}) => {

  const { t } = useTranslation();

  return (
    <div className={style.filterDetail}>
      <input className={styleFilter.filterInput} name="password" placeholder={t("TeacherSearch")} data-theme={identifier("dark","dark2","green","pink","blue","red")} onChange={(e) => {
          setSearchValue(e.target.value)
        }}/>
      <div className={style.searchBox}></div>
    </div>
)
}
export{SearchFilter}