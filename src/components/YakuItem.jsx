import React, { useEffect } from 'react'

export const YakuItem = React.memo(
  ({ yakuItem, handleClick, kuisagari, setYakuListState, labelColor }) => {
    return (
      <label className={`${labelColor(yakuItem)} py-1 px-2`}>
        <input
          id={yakuItem.id}
          className='hidden'
          type='checkbox'
          data-yaku-type={yakuItem.yakuType}
          disabled={yakuItem.IsDisabled}
          onClick={() => handleClick(yakuItem, setYakuListState)}
        />
        {yakuItem.content}
        {kuisagari(yakuItem.kuisagari) && (
          <span className={`ml-1 text-xs`}>(喰下り{yakuItem.kuisagari}翻)</span>
        )}
      </label>
    )
  },
)
