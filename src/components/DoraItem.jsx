import React from 'react'

export const DoraItem = React.memo(
  ({ yakuItem, handleClick, setYakuListState }) => {
    return (
      <>
        <div>
          <p>ドラ:</p>
          <p>{yakuItem.value}</p>
          <button
            className='bg-green-400 py-1 px-2'
            onClick={() => handleClick(yakuItem, true, setYakuListState)}
          >
            +
          </button>
          <button
            className='bg-green-400 py-1 px-2'
            onClick={() => handleClick(yakuItem, false, setYakuListState)}
          >
            -
          </button>
        </div>
      </>
    )
  },
)
