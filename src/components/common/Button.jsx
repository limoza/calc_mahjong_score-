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

export const CountButton = React.memo(
  ({ countType, handleClick, yakuItem, labelColor }) => {
    return (
      <button
        className={`${labelColor(yakuItem)} ml-3 py-1 px-3`}
        onClick={handleClick}
        disabled={yakuItem.IsDisabled}
      >
        {countType}
      </button>
    )
  },
)
