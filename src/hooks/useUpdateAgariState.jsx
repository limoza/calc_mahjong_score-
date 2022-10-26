export const useUpdateAgariState = (getIsChecked, setAgariState, value) => {
  setAgariState((prev) => {
    const newStateList = { ...prev }
    return {
      ...newStateList,
      status: getIsChecked,
      selectedValue: value,
    }
  })
}
