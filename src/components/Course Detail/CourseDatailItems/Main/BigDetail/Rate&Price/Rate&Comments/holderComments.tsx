import React from 'react'
import { useTranslation } from 'react-i18next';
import { identifier } from '../../../../../../../core/services/Functions/ThemeIdentifier';
import style from './style.module.css'
import { ClipLoader } from 'react-spinners';


const HolderComments = ({comments, isLoading}) => {
    const { t } = useTranslation();
  return (
    <>
    {isLoading ? <ClipLoader /> :<div className={style.comments}> {t("comment")} ({comments})  + </div>}
    </>
  )
}

export {HolderComments}