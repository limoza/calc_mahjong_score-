import React from 'react'

export const TextButton = React.memo(
  ({ children, clickHandler, SetIsOpen, yakuNumber, yakuAlias }) => {
    return (
      <button
        className={'text-sm font-bold text-blue-600'}
        onClick={() => clickHandler(SetIsOpen, yakuNumber, yakuAlias)}
      >
        {children}
      </button>
    )
  },
)

export const CountButton = React.memo(
  ({ countType, handleClick, labelColor, disabled }) => {
    return (
      <button
        className={`${labelColor(
          disabled,
        )} ml-3 h-11 w-11 rounded border border-gray-300 text-sm drop-shadow-sm`}
        onClick={handleClick}
        disabled={disabled}
      >
        {countType}
      </button>
    )
  },
)

export const YakuButton = React.memo(
  ({
    yakuItem,
    useUpdateYakuCheckState,
    kuisagari,
    setYakuListState,
    labelColor,
  }) => {
    return (
      <label
        className={`${labelColor(
          yakuItem,
        )} block h-11 rounded border py-3 px-4 text-sm drop-shadow-sm`}
      >
        <input
          id={yakuItem.id}
          className='hidden'
          type='checkbox'
          disabled={yakuItem.IsDisabled}
          onClick={() => {
            useUpdateYakuCheckState(yakuItem, setYakuListState)
          }}
        />
        {yakuItem.content}
        {kuisagari(yakuItem.kuisagari) && (
          <span className={`ml-1 text-xs`}>(喰下り{yakuItem.kuisagari}翻)</span>
        )}
      </label>
    )
  },
)

export const RadioButton = React.memo(
  ({
    id,
    choice,
    IsChecked,
    value,
    SetIsChecked,
    statusUpdateCheck,
    useRecoilState,
    customHooks,
    index,
  }) => {
    const { useChangeRadioLabelColor, useUpdateAgariState } = customHooks
    const { setAgariState } = useRecoilState
    const setSpecialStyle = (index) => {
      return index === 0 ? 'rounded-l border-r-0' : 'rounded-r border-l-0'
    }
    return (
      <label
        className={`${useChangeRadioLabelColor(IsChecked)} ${setSpecialStyle(
          index,
        )} block h-11 border py-3 px-4 text-sm drop-shadow-sm`}
      >
        <input
          className='hidden'
          type='radio'
          name={id}
          onChange={(e) => {
            SetIsChecked(e.target.value)
            useUpdateAgariState(
              statusUpdateCheck === e.target.value,
              setAgariState,
              value,
            )
          }}
          checked={IsChecked}
          value={value}
        />
        {choice}
      </label>
    )
  },
)
