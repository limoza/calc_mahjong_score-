import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { nakiStatus, ronTsumoStatus } from '../../states/atoms/stateAtom'

export const useChangeButtonLabelColor = (yakuItem) => {
  const getNakiStatus = useRecoilValue(nakiStatus)
  const getRonTsumoStatus = useRecoilValue(ronTsumoStatus)
  if (yakuItem.IsChecked) {
    return `bg-blue-300`
  } else if (yakuItem.IsDisabled) {
    return `bg-gray-100 text-gray-200`
  } else {
    return `bg-gray-300`
  }
  // } else if (getRonTsumoStatus.status && yakuItem.IsDisabled) {
  //   return `bg-gray-100 text-gray-200`
  // } else if (getNakiStatus.status && yakuItem.IsDisabled) {
  //   return `bg-gray-100 text-gray-200`
  // } else if (getRonTsumoStatus.status && !yakuItem.IsDisabled) {
  //   return `bg-gray-300`
  // } else if (getNakiStatus.status && !yakuItem.IsDisabled) {
  //   return `bg-gray-300`
  // } else {
  //   return `bg-gray-300`
  // }
}

export const useChangeRadioLabelColor = (IsChecked) =>
  IsChecked ? `bg-blue-300` : `bg-gray-300`
