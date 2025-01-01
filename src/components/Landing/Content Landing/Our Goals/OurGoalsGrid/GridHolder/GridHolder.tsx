import React from 'react'
import style from './GridHolder.module.css'
import { GridItemsHolder } from '../GridItems/GridItemsHolder/GridItemsHolder'
import estedad from "../../../../../../assets/Images/estedad.png"
import rahnamaiee from "../../../../../../assets/Images/rahnamaiee.png"
import amoozesh from "../../../../../../assets/Images/amoozesh.png"
import kar from "../../../../../../assets/Images/kar.png"
import { GridItemsHolderTwo } from '../GridItems copy/GridItemsHolder/GridItemsHolder'
import { GridItemsHolderThree } from '../GridItems copy 2/GridItemsHolder/GridItemsHolder'
import { GridItemsHolderFour } from '../GridItems copy 3/GridItemsHolder/GridItemsHolder'

const GridHolder = () => {
  let data = [
    {tile : "آماده سازی برای بازار کار", description: "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها", image: kar},
    {tile : "آموزش‌های تخصصی", description: "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...", image: amoozesh},
    {tile : "راهنمایی و ایجاد انگیزه", description: "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش", image: rahnamaiee},
    {tile : "استعدادیابی", description: "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...", image: estedad}
  ]
  return (
    <div className={style.container}>
          <>
            <GridItemsHolder />
            <GridItemsHolderTwo />
            <GridItemsHolderThree />
            <GridItemsHolderFour />
          </>
    </div>
  )
}

export {GridHolder}