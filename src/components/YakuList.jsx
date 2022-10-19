import React, { useCallback } from 'react'
import { YakuItem } from './YakuItem'
import { DoraItem } from './DoraItem'
import {
  useUpdateYakuCheckState,
  useUpdateDoraState,
} from '../hooks/useUpdateYakuState'
import { useChangeButtonLabelColor } from '../hooks/useChangeLabelColor'

export const YakuContainer = React.memo(
  ({ yakuItems, setYakuListState, nakiStatus }) => {
    const calcKuisagari = useCallback(
      (kuisagari) => {
        return kuisagari !== '0' && nakiStatus.status ? true : false
      },
      [nakiStatus.status],
    )

    // useEffect(() => {
    //   useChangeButtonLabelColor(yakuItems)
    // }, [yakuItems])

    return (
      <ul className='mt-1 flex flex-wrap gap-3'>
        {yakuItems.map((yakuItem) => {
          return (
            <>
              {yakuItem.id === 'dora' ? (
                <li key={yakuItem.id} className='w-full'>
                  <DoraItem
                    yakuItem={yakuItem}
                    handleClick={useUpdateDoraState}
                    setYakuListState={setYakuListState}
                  />
                </li>
              ) : (
                <li key={yakuItem.id}>
                  <YakuItem
                    yakuItem={yakuItem}
                    handleClick={useUpdateYakuCheckState}
                    kuisagari={calcKuisagari}
                    setYakuListState={setYakuListState}
                    labelColor={useChangeButtonLabelColor}
                  />
                </li>
              )}
            </>
          )
        })}
      </ul>
    )
  },
)
