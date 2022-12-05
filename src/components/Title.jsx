import React from 'react'

export const Title = React.forwardRef(({ title, className }, ref) => {
  return (
    <h2
      className={`text-lg font-bold leading-none ${className}`}
      ref={ref && ref}
    >
      {title}
    </h2>
  )
})
