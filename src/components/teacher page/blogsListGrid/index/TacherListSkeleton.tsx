import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TacherListSkeleton = ({cards}) => {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
          <div style={{width: '400px', position: "relative"}}>
              <Skeleton width={400} height={139} baseColor="#dbdbdb" highlightColor="#ffffff" />
              <Skeleton width={116} height={116} baseColor="#838584" highlightColor="#ffffff" style={{borderRadius: "100%", position: "absolute", top: "13px", right: "10px"}} />
              <Skeleton width={250} height={10} baseColor="#838584" highlightColor="#ffffff" style={{position: "absolute", top: "15px", right: "150px"}} />
              <Skeleton width={250} height={10} baseColor="#838584" highlightColor="#ffffff" style={{position: "absolute", top: "35px", right: "150px"}} />
              <Skeleton width={250} height={10} baseColor="#838584" highlightColor="#ffffff" style={{position: "absolute", top: "55px", right: "150px"}} />
          </div>
    ))
}

export {TacherListSkeleton}