import React from 'react'
import style from './StartNewJourney.module.css'
import { Bottom } from '../StartNewJourneyItems/Bottom/Bottom'
import { Top } from '../StartNewJourneyItems/Top/Top'

const StartNewJourney = () => {
  return (
    <div className={style.startFromNewJourneyHolder}>
      <Top />
      <Bottom />
    </div>
  )
}

export {StartNewJourney}