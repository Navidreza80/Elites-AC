import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import style from './Skeleton.module.css'

const MyReserveCoursesSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
            <div key={i} className={style.holder}>
                <Skeleton width={80} height={42} baseColor="#dbdbdb" highlightColor="#ffffff" />
                <Skeleton width={100} height={10} baseColor="#dbdbdb" highlightColor="#ffffff" />
                <Skeleton width={100} height={10} baseColor="#dbdbdb" highlightColor="#ffffff" />
                <Skeleton width={100} height={10} baseColor="#dbdbdb" highlightColor="#ffffff" />
                <Skeleton width={100} height={10} baseColor="#dbdbdb" highlightColor="#ffffff" />
                <Skeleton width={100} height={10} baseColor="#dbdbdb" highlightColor="#ffffff" />
            </div>
    ))
}

export {MyReserveCoursesSkeleton}