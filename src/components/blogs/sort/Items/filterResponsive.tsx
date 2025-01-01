import React from 'react'
import styleBlogList from '../../../../Style/blogList.module.css'
import { FilterModal } from "../../Filter Modal/FilterModal.tsx";
import { useTranslation } from 'react-i18next';
import { Filter } from '../../Filter Modal/filter.tsx';

const FilterResBlogList = ({ setFilterModal, filterModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styleBlogList.filterResponsive} onClick={() => {
        if (filterModal == false) {
          setFilterModal(true)
        }
        else if (filterModal == true) {
          setFilterModal(false)
        }
      }}>{t("filter")}</div>
      {filterModal && <Filter setFilterModal={setFilterModal} />}
    </>
  )
}

export { FilterResBlogList }