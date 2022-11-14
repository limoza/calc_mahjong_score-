import React, { useEffect } from 'react'

export const YakuItem = React.memo(
  ({
    yakuItem,
    useUpdateYakuCheckState,
    kuisagari,
    setYakuListState,
    labelColor,
  }) => {
    return (
      <label
        className={`${labelColor(
          yakuItem,
        )} block rounded border py-2 px-4 text-sm drop-shadow-sm`}
      >
        <input
          id={yakuItem.id}
          className='hidden'
          type='checkbox'
          disabled={yakuItem.IsDisabled}
          onClick={() => {
            useUpdateYakuCheckState(yakuItem, setYakuListState)
          }}
        />
        {yakuItem.content}
        {kuisagari(yakuItem.kuisagari) && (
          <span className={`ml-1 text-xs`}>(喰下り{yakuItem.kuisagari}翻)</span>
        )}
      </label>
    )
  },
)
