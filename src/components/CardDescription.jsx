import React from 'react'

export const CardDescription = React.memo((props) => {
  return <p className='text-sm'>{props.description}</p>
})
