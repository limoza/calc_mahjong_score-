import React from 'react'
import { CountButton } from './common/Button'

export const DoraItem = React.memo(
  ({ yakuItem, handleClick, setYakuListState }) => {
    return (
      <>
        <div className='flex'>
          <p>ドラ:</p>
          <p>{yakuItem.value}</p>
          <CountButton
            countType='+'
            handleClick={() => handleClick(yakuItem, true, setYakuListState)}
          />
          <CountButton
            countType='-'
            handleClick={() => handleClick(yakuItem, false, setYakuListState)}
          />
        </div>
      </>
    )
  },
)
