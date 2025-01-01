import React, { useEffect, useState } from 'react'
import {  Formik  } from "formik";
import style from "./../../../Style/studentPanel.module.css";
import { Payment } from '../../Payment First Page/Payment Holder/Payment';

import { identifier } from '../../../core/services/Functions/ThemeIdentifier';
const StudentPayment = () => {
  
  return (
    <Formik>
      {(form) => (
        <div className={style.page} data-theme={identifier("darkSmall","dark2Small","greenSmall","pinkSmall","blueSmall","redSmall")}>
          <Payment/>
        </div>
      )}
    </Formik>
  )
}

export {StudentPayment}