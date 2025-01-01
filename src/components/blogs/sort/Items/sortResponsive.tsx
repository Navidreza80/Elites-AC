import React from 'react'
import styleBlogList from '../../../../Style/blogList.module.css'
import { SortModal } from "../../Sort Modal/SortModal.tsx";
import { useTranslation } from 'react-i18next';

const SortResBlogList = ({ setSortModal, sortModal }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styleBlogList.sortResponsive} onClick={() => {
        if (sortModal == false) {
          setSortModal(true)
        }
        else if (sortModal == true) {
          setSortModal(false)
        }
      }}>{t("order")}</div>
      {sortModal && <SortModal setSortModal={setSortModal} />}
    </>
  )
}

export { SortResBlogList }