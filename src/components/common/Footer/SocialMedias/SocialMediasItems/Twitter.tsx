import React from 'react'
import style from './Twitter.module.css'

import { identifier } from '../../../../../core/services/Functions/ThemeIdentifier';
const Twitter = () => {

  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path data-theme={identifier("darkPath","dark2Path","greenPath","pinkPath","bluePath","redPath")} d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
  )
}

export {Twitter}