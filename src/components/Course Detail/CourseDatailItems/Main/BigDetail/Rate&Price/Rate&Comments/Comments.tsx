import React from 'react'
import style from './style.module.css'
import { HolderComments } from './holderComments'

const Comments = ({comments, isLoading}) => {
  return (
    <>
      <HolderComments comments={comments} isLoading={isLoading} />
    </>
  )
}

export {Comments}