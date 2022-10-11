import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { nakiStatus } from '../../states/atoms/stateAtom'

export const useChangeButtonLabelColor = (yakuItem) => {
  const getNakiStatus = useRecoilValue(nakiStatus)
  if (yakuItem.IsChecked) {
    return `bg-blue-300`
  } else if (getNakiStatus.status && yakuItem.IsDisabled) {
    return `bg-gray-100 text-gray-200`
  } else if (getNakiStatus.status && !yakuItem.IsDisabled) {
    return `bg-gray-300`
  } else {
    return `bg-gray-300`
  }
}

export const useChangeRadioLabelColor = (value, status) => {
  if ((value === 1 && status) || (value === 2 && !status)) {
    return `bg-blue-300`
  } else {
    return `bg-gray-300`
  }
}
