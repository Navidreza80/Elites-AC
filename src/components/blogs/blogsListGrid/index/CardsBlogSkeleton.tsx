import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import style from '../ItemsHolder.module.css'

const CardsBlogSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
          <div style={{width: '499px'}}>
              <Skeleton width={499} height={292} baseColor="#dbdbdb" highlightColor="#ffffff" />
              <Skeleton width={499} height={10} count={2} baseColor="#dbdbdb" highlightColor="#ffffff" />
          </div>
    ))
}

export {CardsBlogSkeleton}