import React from 'react'
import style from './Description.module.css'

import { Rate } from 'antd';
import { StarFilled} from '@ant-design/icons';
import { SyncLoader } from 'react-spinners';
import { postBlogRate } from '../../../../core/services/api/postBlogRate';
import { identifier } from '../../../../core/services/Functions/ThemeIdentifier';
import { MainDesc } from './MainDesc';
import { useTranslation } from 'react-i18next';
const Description = ({description, isLoading, rate, id}) => {
  const { t } = useTranslation();
  return (
    <div className={style.containerDesc}>
        <div className={style.title} data-theme={identifier("dark","dark2","green","pink","blue","red")}> {t("CoursesDesc")} </div>
        <MainDesc description={description} isLoading={isLoading} />
        <div className={style.copyLink}>{t("CopyLinkPage")}</div>
        <Rate style={{margin: "0 10px 0 10px"}} character={<StarFilled style={{fontSize: "30px"}} /> } defaultValue={rate} disabled={rate != 0 ? true : false} onChange={(value) => postBlogRate(id, value) }/>
        <div className={style.yourRate}> {t("Rate")} </div>
    </div>

  )
}

export {Description}