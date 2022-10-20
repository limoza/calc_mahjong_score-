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
  }) => {
    const { useChangeRadioLabelColor, useUpdateAgariState } = customHooks
    const { setAgariState } = useRecoilState
    return (
      <label className={`${useChangeRadioLabelColor(IsChecked)} py-1 px-2`}>
        <input
          className='hidden'
          type='radio'
          name={id}
          onChange={(e) => {
            SetIsChecked(e.target.value)
            useUpdateAgariState(
              statusUpdateCheck === e.target.value,
              setAgariState,
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
