export const useUpdateAgariState = (value, setAgariState) => {
  setAgariState((prev) => {
    const newStateList = { ...prev }
    return {
      ...newStateList,
      status: value === 1 ? true : value === 2 ? false : false,
    }
  })
}
