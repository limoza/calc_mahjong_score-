export const useToggleModal = (SetIsOpen, yakuNumber, yakuAlias) => {
  SetIsOpen((prev) => {
    return { IsOpen: !prev.IsOpen, yakuNumber: yakuNumber, yakuAlias }
  })
}
