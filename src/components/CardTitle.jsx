import React from 'react'

export const CardTitle = React.memo(({ title, className }) => {
  return (
    <h2 className={`text-lg font-bold leading-none ${className}`}>{title}</h2>
  )
})
