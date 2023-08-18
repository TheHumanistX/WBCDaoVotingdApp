import React from 'react'
import { useDao } from '../context'

const ViewProposals = () => {
  const { test } = useDao()
  console.log('test: ', test)

  return (
    <div>
      
    </div>
  )
}

export default ViewProposals
