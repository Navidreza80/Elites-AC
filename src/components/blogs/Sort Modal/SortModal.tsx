import React from 'react'
import style from '../../../Style/blogList.module.css'
import { useTranslation } from 'react-i18next';


const SortModal = ({setSortModal}) => {
  const { t } = useTranslation();
  return (
    <div className={style.sortModal}>
        <div className={style.holderTitle}>
            <h1 className={style.sortingTitleModal}>{t("order")}</h1>
            <div className={style.closeBtn} onClick={() => {
                setSortModal(false)
            }}> {t("close")} </div>
        </div>
        <input type="radio" checked name="sort" id="New" className={style.inputSortModal} />
        <label htmlFor="New" className={style.sortButtonLabelModal} > {t("newest")} </label>

        <input type="radio" name="sort" id="Popular" className={style.inputSortModal} />
        <label htmlFor="Popular" className={style.sortButtonLabelModal} > {t("popular")} </label>
    </div>
  )
}

export {SortModal}