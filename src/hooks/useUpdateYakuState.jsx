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
  IsYakumanSelected,
  // selectedYakuType,
) => {
  const disabledKeysArray = Object.values(disabledKeys)
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      if (IsYakumanSelected === item.id) {
        return {
          ...item,
          IsChecked: item.IsChecked,
          IsDisabled: false,
        }
      } else if (IsYakumanSelected) {
        return {
          ...item,
          IsChecked: false,
          IsDisabled: true,
          value: 0,
        }
      }
      // const IsIgnore = disabledKeysArray
      //   .map((disabledKey) => item.disabledValues[disabledKey])
      //   .every((elem) => !elem)

      // if (IsIgnore) return item

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

      // const IsShuntsuDisabled =
      //   selectedYakuType.IsShuntsuSelected &&
      //   item.disabledValues[disabledKeys.shuntsuDisabledKey]
      // const IsToitsuDisabled =
      //   selectedYakuType.IsToitsuSelected &&
      //   item.disabledValues[disabledKeys.toitsuDisabledKey]
      // const IsKotsuDisabled =
      //   selectedYakuType.IsKotsuSelected &&
      //   item.disabledValues[disabledKeys.kotsuDisabledKey]
      // const IsKantsuDisabled =
      //   selectedYakuType.IsKantsuSelected &&
      //   item.disabledValues[disabledKeys.kantsuDisabledKey]
      // const IsJihaiDisabled =
      //   selectedYakuType.IsJihaiSelected &&
      //   item.disabledValues[disabledKeys.jihaiDisabledKey]

      const IsTarget =
        IsOyaDisabled ||
        IsKoDisabled ||
        IsTsumoDisabled ||
        IsRonDisabled ||
        IsNakiDisabled

      // const IsTarget =
      //   IsOyaDisabled ||
      //   IsKoDisabled ||
      //   IsTsumoDisabled ||
      //   IsRonDisabled ||
      //   IsNakiDisabled ||
      //   IsShuntsuDisabled ||
      //   IsToitsuDisabled ||
      //   IsKotsuDisabled ||
      //   IsKantsuDisabled ||
      //   IsJihaiDisabled

      const IsMenzenTsumo =
        item.id === 'menzenchintsumo' && IsTsumoSelected && !IsNakiSelected

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
