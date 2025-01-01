import styleFilter from "./filter.module.css";
import { CategoryFilter } from "./category/categoryFilter.tsx";
import { DateFilter } from "./date/dateFilter.tsx";
import { SearchFilter } from "./search/searchFilter.tsx";

import { useTranslation } from 'react-i18next';
import { identifier } from "../../../core/services/Functions/ThemeIdentifier.ts";

const Filter = ({setCategoryId, setApplyFilter, categoryId, applyFilter, setSearchValue, categoryList}) => {

  const { t } = useTranslation();
  return (
    <div className={styleFilter.filter} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
        <h1 className={styleFilter.filterTitle} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}> {t("filter")}</h1>
        <SearchFilter setSearchValue={setSearchValue} />
        <CategoryFilter categoryList={categoryList} setCategoryId={setCategoryId} categoryId={categoryId} />
        <span className={applyFilter ? styleFilter.applyFilter2 : styleFilter.applyFilter} onClick={() => {
          setApplyFilter(true);
        }}> {t("applyFilter")} </span>
        <span className={styleFilter.deleteFilter} onClick={() => {
          setApplyFilter(false);
          setCategoryId("")
        }}> {t("deleteFilter")} </span>
    </div>
  )
}



export { Filter }