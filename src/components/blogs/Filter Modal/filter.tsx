import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier.ts";

const Filter = ({setFilterModal}) => {

  const { t } = useTranslation();
  return (
    <div className={styleFilter.filter} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <h1 className={styleFilter.filterTitle} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("filter")}</h1>
        <SearchFilter  />
        <CategoryFilter />
        <span className={styleFilter.applyFilter} onClick={() => {
        }}> {t("applyFilter")} </span>
        <span className={styleFilter.deleteFilter} onClick={() => {
        }}> {t("deleteFilter")} </span>
    </div>
  )
}



export { Filter }