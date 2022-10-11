import React from 'react'

export const ItemSelectRadio = React.memo(
  ({
    items,
    value,
    choice,
    labelColor,
    disableTarget,
    setYakuListState,
    handleClick,
  }) => {
    return (
      <label className={`${labelColor(value, items.status)} py-1 px-2`}>
        <input
          className='hidden'
          type='radio'
          value={value}
          name={items.id}
          onClick={() => handleClick(value, disableTarget, setYakuListState)}
        />
        {choice}
      </label>
    )
  },
)
