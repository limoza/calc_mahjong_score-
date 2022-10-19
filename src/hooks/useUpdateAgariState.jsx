export const useUpdateAgariState = (getIsChecked, setAgariState) => {
  setAgariState((prev) => {
    // console.log(getIsChecked, 'getIsChecked')
    const newStateList = { ...prev }
    return {
      ...newStateList,
      status: getIsChecked,
    }
  })
}
