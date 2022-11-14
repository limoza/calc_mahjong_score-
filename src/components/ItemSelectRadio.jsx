import React from 'react'

export const ItemSelectRadio = React.memo(
  ({
    id,
    choice,
    IsChecked,
    value,
    SetIsChecked,
    statusUpdateCheck,
    useRecoilState,
    customHooks,
    index,
  }) => {
    const { useChangeRadioLabelColor, useUpdateAgariState } = customHooks
    const { setAgariState } = useRecoilState
    const setSpecialStyle = (index) => {
      return index === 0 ? 'rounded-l border-r-0' : 'rounded-r border-l-0'
    }
    return (
      <label
        className={`${useChangeRadioLabelColor(IsChecked)} ${setSpecialStyle(
          index,
        )} block border py-2 px-4 text-sm drop-shadow-sm`}
      >
        <input
          className='hidden'
          type='radio'
          name={id}
          onChange={(e) => {
            SetIsChecked(e.target.value)
            useUpdateAgariState(
              statusUpdateCheck === e.target.value,
              setAgariState,
              value,
            )
          }}
          checked={IsChecked}
          value={value}
        />
        {choice}
      </label>
    )
  },
)
