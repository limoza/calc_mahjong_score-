import React from 'react'

export const CardTitle = React.memo((props) => {
  return <p className='text-lg font-bold'>{props.title}</p>
})
