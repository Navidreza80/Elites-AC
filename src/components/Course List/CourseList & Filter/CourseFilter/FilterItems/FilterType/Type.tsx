import React, { useEffect, useState } from 'react'
import style from './Type.module.css'

import { useTranslation } from "react-i18next";
import { getCourseType } from '../../../../../../core/services/api/getCourseType';
import { identifier } from '../../../../../../core/services/Functions/ThemeIdentifier';
const Type = ({setcourseType}) => {
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState(false)
  const [types, setTypes] = useState([])

  const getAllTypes = async () => {
    let res = await getCourseType()
    setTypes(res)
  }

  useEffect(() => {
    getAllTypes()
  }, [])
  
  return (
    <>
          <div className={style.holderIconAndTitle}>
          <div className={style.type}></div>
          <div className={style.titleTeacher} data-theme={identifier("teacher","teacher2","teacher3","teacher4","teacher5","teacher6")}> {t("CourseType")} </div>
          </div>
        <div className={style.teacher1} data-theme={identifier("dark","dark2","green","pink","blue","red")}>{t("ChooseCourseType")}
          <div className={isClicked ? style.arrowUp : style.arrowDown} onClick={() => setIsClicked(!isClicked)}></div>
          {isClicked && <div className={style.filterTeacher}>
            {types.map((item, index) => {
              return (  
                <>
                  <input type="radio" id={String(index)} name='teachers' className={style.input} 
                  onChange={() => {
                    setcourseType(String(item.id));
                  }}
                  />
                  <label htmlFor={String(index)} className={style.teacher}>{item.typeName}</label>
                </>
              )
            })}
          </div>}
        </div>
    </>
  )
}

export {Type}