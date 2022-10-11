import React from 'react'

export const Card = React.memo(({ children }) => (
  <div className='mx-3 mt-4 rounded bg-white p-3'>{children}</div>
))
