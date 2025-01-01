import React from 'react'
import style from './Holder.module.css'
import { ServicesItemsHolder } from '../OurServicesItems/ServicesItemsHolder/ServicesItemsHolder'
import { ServicesTitle } from '../OurServicesItems/ServicesItemsHolder/ServicesTitle'
import azmoon from '../../../../../assets/Images/azmoon.png'
import work from '../../../../../assets/Images/work.png'
import moshavere from '../../../../../assets/Images/moshavere.png'
import madrak from '../../../../../assets/Images/madrak.png'
import { useTranslation } from 'react-i18next';

const ServicesHolder = () => {

  const { t } = useTranslation();
  let data = [
    {title: t("ourServicesTitle1"), desc: t("ourServicesDesc1"), image: azmoon},
    {title: t("ourServicesTitle2"), desc: t("ourServicesDesc2"), image: madrak},
    {title: t("ourServicesTitle3"), desc: t("ourServicesDesc3"), image: work},
    {title: t("ourServicesTitle4"), desc: t("ourServicesDesc4"), image: moshavere}
  ]

  return (
    <div className={style.holder} id='OurService'>
      <ServicesTitle />
      {data.map((item, index) => {
        return (
          <ServicesItemsHolder 
            key={index}
            title={item.title}
            desc={item.desc}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export {ServicesHolder}