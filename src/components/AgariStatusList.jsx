import React, { useCallback } from 'react'
import { ItemSelectRadio } from './ItemSelectRadio'

import { useUpdateAgariState } from '../hooks/useUpdateAgariState'
import { useUpdateYakuDisabledState } from '../hooks/useUpdateYakuState'
import { useChangeRadioLabelColor } from '../hooks/useChangeLabelColor'

export const AgariStatusList = React.memo(
  ({ items, questionType, setAgariState, disableTarget, setYakuListState }) => {
    const updateCheckState = useCallback(
      (value, disableTarget, setYakuListState) => {
        useUpdateAgariState(value, setAgariState)
        useUpdateYakuDisabledState(value, disableTarget, setYakuListState)
      },
      [],
    )

    return (
      <ul className='mt-1 flex flex-wrap'>
        {questionType.values.map((value, index) => {
          return (
            <li key={`${questionType.id}-${index}`}>
              <ItemSelectRadio
                items={items}
                value={value}
                choice={questionType.choices[index]}
                labelColor={useChangeRadioLabelColor}
                disableTarget={disableTarget}
                setYakuListState={setYakuListState}
                handleClick={updateCheckState}
              />
            </li>
          )
        })}
      </ul>
    )
  },
)
