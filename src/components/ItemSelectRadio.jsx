export const ItemSelectRadio = ({
  id,
  value,
  choice,
  labelColor,
  handleClick,
}) => {
  return (
    <label className={`${labelColor} py-1 px-2`}>
      <input
        className='hidden'
        type='radio'
        value={value}
        name={id}
        onClick={() => handleClick()}
      />
      {choice}
    </label>
  )
}
