import React from 'react'
import cl from './AllPageHelper.module.css'

const AllPageHelper = ({deActiveTrackSearch}: any) => {
  return (
    <div onClick={deActiveTrackSearch} className={cl.AllPageHelper}>
      
    </div>
  )
}

export default AllPageHelper
