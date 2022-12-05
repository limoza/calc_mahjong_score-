import React from 'react'

export const Button = React.memo(
  ({ children, clickHandler, SetIsOpen, yakuNumber, yakuAlias }) => {
    return (
      <button
        className={'text-sm font-bold text-blue-600'}
        onClick={() => clickHandler(SetIsOpen, yakuNumber, yakuAlias)}
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
        className={`${labelColor(
          yakuItem,
        )} ml-3 h-11 w-11 rounded border border-gray-300 text-sm drop-shadow-sm`}
        onClick={handleClick}
        disabled={yakuItem.IsDisabled}
      >
        {countType}
      </button>
    )
  },
)
