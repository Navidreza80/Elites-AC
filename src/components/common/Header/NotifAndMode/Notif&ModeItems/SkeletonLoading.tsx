import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import style from '../ItemsHolder.module.css'

const CardsCourseSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
          <div style={{width: '400px', direction: "rtl"}}>
              <Skeleton width={100} height={70} baseColor="#dbdbdb" highlightColor="#ffffff" />
              <Skeleton width={100} height={10} count={2} baseColor="#dbdbdb" highlightColor="#ffffff" />
          </div>
    ))
}

export {CardsCourseSkeleton}