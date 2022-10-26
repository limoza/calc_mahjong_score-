import React, { useEffect } from 'react'

export const Body = React.memo(({ modalOpen, children }) => {
  return (
    <div className={`${modalOpen.IsOpen && `fixed`} bg-gray-100`}>
      {children}
    </div>
  )
})
