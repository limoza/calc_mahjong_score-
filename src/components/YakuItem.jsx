import React, { useMemo, useCallback } from 'react'

export const YakuItem = React.memo((props) => {
  const { yakuItem, labelColor, handleClick, kuisagari } = props

  // console.log(`rendar👉${yakuItem.id}`)

  const kuisagariYaku = kuisagari(yakuItem.kuisagari)

  return (
    <label className={`${labelColor(yakuItem)} py-1 px-2`}>
      <input
        id={yakuItem.id}
        className='hidden'
        type='checkbox'
        data-yaku-type={yakuItem.yakuType}
        disabled={yakuItem.IsDisabled}
        onClick={() => handleClick()}
      />
      {yakuItem.content}
      {kuisagariYaku && (
        <span className={`ml-1 text-xs`}>(喰下り{kuisagariYaku}翻)</span>
      )}
    </label>
  )
})
