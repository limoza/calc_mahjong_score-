export const useUpdateAgariState = (getIsChecked, setAgariState) => {
  setAgariState((prev) => {
    const newStateList = { ...prev }
    return {
      ...newStateList,
      status: getIsChecked,
    }
  })
}
