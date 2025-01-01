import React from 'react'
import style from './OurGoalsHolder.module.css'
import { OurGoalsTitle } from '../OurGoalsTitle/OurGoalsTitle'
import { GridHolder } from '../OurGoalsGrid/GridHolder/GridHolder'
import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier'

const OurGoalsHolder = () => {
  return (
    <div className={style.container}>
      <svg style={{position: "absolute", bottom: "100px", width: "94.444444444%", height: "240px", zIndex: "-10"}} viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M1441 130C1441 130 1320.11 50.617 1235 57C1164.56 62.2828 1139.07 117.771 1069.5 130C930.294 154.468 867.301 2.16343 726.5 14.5C569.134 28.2879 539.616 215.944 382 226.5C204.741 238.371 -20.5 14.5 -20.5 14.5" stroke="#3772FF" stroke-width="2"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M1416.93 122.36C1416.93 122.36 1414.2 115.424 1415.05 114.086C1415.89 112.747 1423.32 112.203 1423.32 112.203" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M1422.85 126.088C1422.85 126.088 1420.13 119.152 1420.97 117.814C1421.81 116.476 1429.24 115.932 1429.24 115.932" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M1065.77 136.443C1065.77 136.443 1058.76 133.908 1058.31 132.392C1057.87 130.876 1062.37 124.936 1062.37 124.936" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M1072.48 134.457C1072.48 134.457 1065.48 131.922 1065.03 130.406C1064.58 128.89 1069.08 122.95 1069.08 122.95" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M720.135 20.807C720.135 20.807 713.127 18.2721 712.679 16.756C712.23 15.2398 716.73 9.30014 716.73 9.30014" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M726.847 18.8208C726.847 18.8208 719.84 16.2859 719.391 14.7698C718.942 13.2536 723.442 7.31394 723.442 7.31394" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M372.585 232.924C372.585 232.924 366.46 228.679 366.414 227.099C366.369 225.518 372.239 220.929 372.239 220.929" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M379.582 232.722C379.582 232.722 373.457 228.478 373.411 226.897C373.366 225.317 379.236 220.727 379.236 220.727" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M16.6134 56.1272C16.6134 56.1272 14.9894 48.8547 16.0275 47.6622C17.0657 46.4696 24.4925 47.0763 24.4925 47.0763" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M21.8931 60.7234C21.8931 60.7234 20.269 53.4509 21.3072 52.2584C22.3454 51.0658 29.7722 51.6725 29.7722 51.6725" stroke="#3772FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        <OurGoalsTitle />
        <GridHolder />
    </div>
  )
}

export {OurGoalsHolder}