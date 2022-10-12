import React, { useCallback } from 'react'
import { YakuItem } from './YakuItem'
import { DoraItem } from './DoraItem'
import { useRecoilValue } from 'recoil'
import { nakiStatus } from '../../states/atoms/stateAtom'
import {
  useUpdateYakuCheckState,
  useUpdateDoraState,
} from '../hooks/useUpdateYakuState'
import { useChangeButtonLabelColor } from '../hooks/useChangeLabelColor'

export const YakuContainer = React.memo(({ yakuItems, setYakuListState }) => {
  // 親からとってこよ...
  const getNakiStatus = useRecoilValue(nakiStatus)

  const calcKuisagari = useCallback(
    (kuisagari) => {
      return kuisagari !== '0' && getNakiStatus.status ? true : false
    },
    [getNakiStatus.status],
  )

  return (
    <ul className='mt-1 flex flex-wrap gap-2'>
      {yakuItems.map((yakuItem) => {
        return (
          <li key={yakuItem.id}>
            {yakuItem.id === 'dora' ? (
              <DoraItem
                yakuItem={yakuItem}
                handleClick={useUpdateDoraState}
                setYakuListState={setYakuListState}
              />
            ) : (
              <YakuItem
                yakuItem={yakuItem}
                handleClick={useUpdateYakuCheckState}
                kuisagari={calcKuisagari}
                setYakuListState={setYakuListState}
                labelColor={useChangeButtonLabelColor}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
})
