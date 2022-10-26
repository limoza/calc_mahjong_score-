import React, { useState, useCallback } from 'react'

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
  setYakuListState,
  disabledKeys,
  selectedValues,
) => {
  const disabledKeysArray = Object.values(disabledKeys)
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      item.id === 'haku' && console.log(item.yakuType())

      const IsIgnore = disabledKeysArray
        .map((disabledKey) => item.disabledValues[disabledKey])
        .every((elem) => !elem)

      if (IsIgnore) return item

      const IsOyaSelected = selectedValues.includes('oya')
      const IsKoSelected = selectedValues.includes('ko')
      const IsTsumoSelected = selectedValues.includes('tsumo')
      const IsRonSelected = selectedValues.includes('ron')
      const IsNakiSelected = selectedValues.includes('yes')

      const IsOyaDisabled =
        IsOyaSelected && item.disabledValues[disabledKeys.oyaDisabledKey]
      const IsKoDisabled =
        IsKoSelected && item.disabledValues[disabledKeys.koDisabledKey]
      const IsTsumoDisabled =
        IsTsumoSelected && item.disabledValues[disabledKeys.tsumoDisabledKey]
      const IsRonDisabled =
        IsRonSelected && item.disabledValues[disabledKeys.ronDisabledKey]
      const IsNakiDisabled =
        IsNakiSelected && item.disabledValues[disabledKeys.nakiDisabledKey]

      const IsTarget =
        IsOyaDisabled ||
        IsKoDisabled ||
        IsTsumoDisabled ||
        IsRonDisabled ||
        IsNakiDisabled

      const IsMenzenTsumo =
        item.id === 'menzenchintsumo' && IsTsumoSelected && IsNakiSelected

      if (IsTarget) {
        return {
          ...item,
          IsChecked: false,
          IsDisabled: true,
        }
      } else {
        return {
          ...item,
          IsChecked: IsMenzenTsumo ? true : item.IsChecked,
          IsDisabled: false,
        }
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
