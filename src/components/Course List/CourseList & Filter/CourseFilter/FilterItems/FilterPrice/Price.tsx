import React, { useEffect, useState } from 'react'
import style from './Price.module.css'
import MultiRangeSlider from "multi-range-slider-react";
import { Sort } from '../../../../../../core/services/api/Sort';

import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
import { useTranslation } from 'react-i18next';
const Price = ({maxValue, minValue, set_minValue, set_maxValue, maxValueBining, minValueBining}) => {
  const { t } = useTranslation();

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <>
      <div className={style.holderIconAndTitle}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.41828 19.8103 2 18.8796 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z" stroke="#272727" stroke-width="1.5"/>
          <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" stroke="#272727" stroke-width="1.5"/>
          <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M5.5 13V13.009" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M18.5 10.9922V11.0012" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} className={style.titlePrice} > {t("cost")}</div>
      </div>
      <div className={style.valueHolder}>
        <div className={style.value} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")}>{maxValue}</div>
        <div className={style.fromTo} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}> {t("to")}</div>
        <div className={style.value} data-theme={identifier("darkNoBG","dark2NoBG","greenNoBG","pinkNoBG","blueNoBG","redNoBG")} style={{marginLeft: "10px"}}>{minValue}</div>
        <div className={style.fromTo} data-theme={identifier("darkNoBGDisc","dark2NoBGDisc","greenNoBGDisc","pinkNoBGDisc","blueNoBGDisc","redNoBGDisc")}> {t("from")}</div>
      </div>
      <MultiRangeSlider
      ruler='false'
      style={{border: "none", boxShadow: "none", padding: "15px 10px"}}
			min={1000}
			max={100000000}
      thumbLeftColor='#3772FF'
      thumbRightColor='#3772FF'
      barInnerColor='#F1F1F1'
      barLeftColor='#F1F1F1'
      barRightColor='#F1F1F1'
      label='false'
			step={100000}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      className={style.priceInput}
		/>
    </>

  )
}

export {Price}