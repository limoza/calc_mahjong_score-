import React from 'react'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import {
//   yakuList,
//   nakiStatus,
//   oyaStatus,
//   ronTsumoStatus,
// } from '../../states/atoms/stateAtom'

export const ItemSelectRadio = React.memo(
  ({
    id,
    ShouldDisabled,
    choice,
    disabledKeys,
    disableTarget,
    getStatuses,
    IsChecked,
    value,
    SetIsChecked,
    statusUpdateCheck,
    useRecoilState,
    customHooks,
  }) => {
    // const getNakiStatusAA = useRecoilValue(nakiStatus)
    // const getOyaStatusAA = useRecoilValue(oyaStatus)
    // const getRonTsumoStatusAA = useRecoilValue(ronTsumoStatus)
    // console.log(IsChecked)
    const {
      useChangeRadioLabelColor,
      useUpdateAgariState,
      useUpdateYakuDisabledState,
    } = customHooks
    const { setAgariState, setYakuListState } = useRecoilState
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
            // console.log(getNakiStatusAA)
            // console.log(getOyaStatusAA)
            // console.log(getRonTsumoStatusAA)
            useUpdateYakuDisabledState(
              disableTarget,
              setYakuListState,
              ShouldDisabled,
              disabledKeys,
              getStatuses,
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
