import React, { useCallback } from 'react'
import { YakuButton } from '@/components/common/Button'
import { DoraItem } from '@/components/DoraItem'
import {
  useUpdateYakuCheckState,
  useUpdateDoraState,
} from '@/hooks/useUpdateYakuState'
import {
  useChangeButtonLabelColor,
  useChangeDoraButtonLabelColor,
} from '@/hooks/useChangeLabelColor'

export const YakuList = React.memo(
  ({ yakuItems, setYakuListState, nakiStatus }) => {
    const calcKuisagari = useCallback(
      (kuisagari) => {
        return kuisagari !== '0' && nakiStatus.status ? true : false
      },
      [nakiStatus.status],
    )

    return (
      <ul className='mt-5 flex flex-wrap gap-3'>
        {yakuItems.map((yakuItem) => {
          const IsDora = yakuItem.id === 'dora'
          return (
            <li key={yakuItem.id} className={IsDora ? 'w-full' : ''}>
              {IsDora ? (
                <DoraItem
                  yakuItem={yakuItem}
                  handleClick={useUpdateDoraState}
                  setYakuListState={setYakuListState}
                  labelColor={useChangeDoraButtonLabelColor}
                />
              ) : (
                <YakuButton
                  yakuItem={yakuItem}
                  useUpdateYakuCheckState={useUpdateYakuCheckState}
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
  },
)
