import React, { useMemo } from 'react'

export const Card = React.memo(({ children }) => (
  <div className='mx-2 mt-5 rounded bg-white p-5 drop-shadow'>{children}</div>
))
