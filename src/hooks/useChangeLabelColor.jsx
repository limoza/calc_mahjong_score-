export const useChangeButtonLabelColor = (yakuItem) => {
  if (yakuItem.IsChecked) {
    return `bg-green-700 border-green-700 text-white`
  } else if (yakuItem.IsDisabled) {
    return `bg-gray-50 text-gray-400 border-gray-100`
  } else {
    return `bg-white border-gray-300`
  }
}

export const useChangeDoraButtonLabelColor = (disabled) => {
  if (disabled) {
    return `bg-gray-50 text-gray-400 border-gray-100`
  } else {
    return `bg-white border-gray-300`
  }
}

export const useChangeRadioLabelColor = (IsChecked) =>
  IsChecked
    ? `bg-green-700 border-green-700 text-white`
    : `bg-white border-gray-300`
