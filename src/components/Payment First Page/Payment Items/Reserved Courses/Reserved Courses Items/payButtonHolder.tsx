import React, { useEffect, useState } from 'react'
import style from './Items.module.css'

import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { PayButton } from './payButton';
import { getCourseById } from '../../../../../core/services/api/courseById';
import { allCourseList } from '../../../../../core/services/api/AllCourseList';

const PayButtonHolder = ({id}) => {

  return (
    <PayButton id={id}/>
  )

}

export { PayButtonHolder }