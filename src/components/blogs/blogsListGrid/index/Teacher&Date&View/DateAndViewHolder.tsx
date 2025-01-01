import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Date } from './Date'
import { View } from './view'


const ViewAndDateHolder = ({view, date}) => {
  const [dateMiladi, setDateMiladi] = useState("")
  const dateConvertor = () => {
    var miladi = date
    var miladi2 = miladi.slice(0, 10)
    var year = miladi2.slice(0, 4)
    var month = miladi2.slice(5,7)
    if(month == 1){
      month = "ژانویه"
    }
    else if(month == 2){
      month = "فوریه"
    }
    else if(month == 3){
      month = "مارس"
    }
    else if(month == 4){
      month = "آوریل"
    }
    else if(month == 5){
      month = "می"
    }
    else if(month == 6){
      month = "ژوئن"
    }
    else if(month == 7){
      month = "جولای"
    }
    else if(month == 8){
      month = "آگوست"
    }
    else if(month == 9){
      month = "سپتامبر"
    }
    else if(month == 10){
      month = "اکتبر"
    }
    else if(month == 11){
      month = "نوامبر"
    }
    else if(month == 12){
      month = "دسامبر"
    }
    var day = miladi2.slice(8,10)
    var dateMiladii = `${day} ${month} ${year}`
    setDateMiladi(dateMiladii)
  }
  useEffect(() => {
    dateConvertor()
  }, [])

  return (
    <div className={style.ViewAndDateHolder}>
        <View view={view} />
        <Date dateMiladi={dateMiladi} />
    </div>
  )
}

export {ViewAndDateHolder}