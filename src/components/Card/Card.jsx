import React, { useMemo } from 'react'

export const Card = React.memo(({ children, className }) => (
  <div
    className={`mx-2 mt-5 max-w-5xl rounded bg-white p-5 drop-shadow ${className}`}
  >
    {children}
  </div>
))
