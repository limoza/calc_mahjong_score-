import React from 'react'
import { CountButton } from './common/Button'

export const DoraItem = React.memo(
  ({ yakuItem, handleClick, setYakuListState, labelColor }) => {
    return (
      <>
        <div className='flex'>
          <p>ドラ:</p>
          <p>{yakuItem.value}</p>
          <CountButton
            countType='+'
            yakuItem={yakuItem}
            handleClick={() => handleClick(yakuItem, true, setYakuListState)}
            labelColor={labelColor}
          />
          <CountButton
            countType='-'
            yakuItem={yakuItem}
            handleClick={() => handleClick(yakuItem, false, setYakuListState)}
            labelColor={labelColor}
          />
        </div>
      </>
    )
  },
)
