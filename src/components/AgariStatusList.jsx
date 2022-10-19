import React, { useCallback, useState } from 'react'
import { ItemSelectRadio } from './ItemSelectRadio'

import { useUpdateAgariState } from '../hooks/useUpdateAgariState'
import { useUpdateYakuDisabledState } from '../hooks/useUpdateYakuState'
import { useChangeRadioLabelColor } from '../hooks/useChangeLabelColor'

export const AgariStatusList = React.memo(
  ({
    items,
    setAgariState,
    disabledKeys,
    getStatuses,
    setYakuListState,
    defaultCheck = 1,
    statusUpdateCheck = 0,
  }) => {
    const [IsChecked, SetIsChecked] = useState(items.values[defaultCheck])
    console.log(items.status, 'agariList-' + items.id)

    // const updateCheckState = useCallback(
    //   (choice, disableTarget, setYakuListState) => {
    //     useUpdateYakuDisabledState(disableTarget, setYakuListState, choice)
    //   },
    //   [],
    // )

    return (
      <ul className='mt-1 flex flex-wrap'>
        {items.choices.map((choice, index) => {
          return (
            <li key={`${items.id}-${index}`}>
              <ItemSelectRadio
                id={items.id}
                choice={choice}
                disabledKeys={disabledKeys}
                disableTarget={disabledKeys[items.id]}
                getStatuses={getStatuses}
                value={items.values[index]}
                ShouldDisabled={items.ShouldDisabled[index]}
                statusUpdateCheck={items.values[statusUpdateCheck]}
                IsChecked={IsChecked === items.values[index]}
                SetIsChecked={SetIsChecked}
                useRecoilState={{
                  setAgariState,
                  setYakuListState,
                }}
                customHooks={{
                  useChangeRadioLabelColor,
                  useUpdateAgariState,
                  useUpdateYakuDisabledState,
                }}
              />
            </li>
          )
        })}
      </ul>
    )
  },
)
