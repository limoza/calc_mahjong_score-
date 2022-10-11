import React, { useCallback } from 'react'

export const useUpdateYakuCheckState = (yakuItem, setYakuListState) => {
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      const IsTarget = item.id === yakuItem.id
      if (!IsTarget) return item
      return {
        ...item,
        IsChecked: !item.IsChecked,
      }
    })
    return newYakuList
  })
}

export const useUpdateYakuDisabledState = (
  value,
  disableTarget,
  setYakuListState,
) => {
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      const IsTarget = item[disableTarget]
      if (!IsTarget) return item
      return {
        ...item,
        IsChecked: value === 1 ? false : value === 2 ? item.IsChecked : false,
        IsDisabled: value === 1 ? true : value === 2 ? false : false,
      }
    })
    return newYakuList
  })
}

export const useUpdateDoraState = (yakuItem, IsUp, setYakuListState) => {
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      const IsTarget = item.id === yakuItem.id
      if (!IsTarget) return item
      const value = item.value
      if (IsUp && value < 13) {
        ++value
      } else if (!IsUp && value !== 0) {
        --value
      }

      return {
        ...item,
        value: value,
      }
    })
    return newYakuList
  })
}
