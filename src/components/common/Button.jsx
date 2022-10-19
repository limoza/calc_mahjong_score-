import React from 'react'

export const Button = React.memo(
  ({ children, clickHandler, SetIsOpen, yakuNumber }) => {
    return (
      <button
        className={'bg-yellow-400 p-1'}
        onClick={() => clickHandler(SetIsOpen, yakuNumber)}
      >
        {children}
      </button>
    )
  },
)

export const CountButton = React.memo(({ countType, handleClick }) => {
  return (
    <button className='bg-green-400 py-1 px-2' onClick={handleClick}>
      {countType}
    </button>
  )
})
