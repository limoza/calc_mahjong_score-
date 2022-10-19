export const Body = ({ modalOpen, children }) => {
  return (
    <div className={`${modalOpen.IsOpen && `fixed`} bg-gray-100`}>
      {children}
    </div>
  )
}
