import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { nakiStatus, ronTsumoStatus } from '../../states/atoms/stateAtom'

export const useChangeButtonLabelColor = (yakuItem) => {
  const getNakiStatus = useRecoilValue(nakiStatus)
  const getRonTsumoStatus = useRecoilValue(ronTsumoStatus)
  if (yakuItem.IsChecked) {
    return `bg-green-700 border-green-700 text-white`
  } else if (yakuItem.IsDisabled) {
    return `bg-gray-50 text-gray-400 border-gray-100`
  } else {
    return `bg-white border-gray-300`
  }
}

export const useChangeRadioLabelColor = (IsChecked) =>
  IsChecked
    ? `bg-green-700 border-green-700 text-white`
    : `bg-white border-gray-300`
