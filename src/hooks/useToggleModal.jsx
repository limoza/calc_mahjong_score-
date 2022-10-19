export const useToggleModal = (SetIsOpen, yakuNumber) => {
  SetIsOpen((prev) => {
    return { IsOpen: !prev.IsOpen, yakuNumber: yakuNumber }
  })
}
