import React from 'react'

export const CardTitle = React.memo(({ title }) => {
  return <p className='text-lg font-bold'>{title}</p>
})
