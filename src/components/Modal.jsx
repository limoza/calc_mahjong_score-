import React, { useCallback } from 'react'
import { YakuExplanationList } from '@/components/YakuExplanationList'

export const Modal = React.memo(({ modalOpen, SetIsOpen }) => {
  const ref = React.createRef()
  const scrollTop = useCallback(() => {
    ref.current.scrollIntoView()
  }, [ref])

  return (
    <div
      className={
        modalOpen.IsOpen ? 'fixed z-10 h-full w-full' : 'relative hidden'
      }
    >
      <div
        className='fixed inset-0 z-20 h-full w-full bg-gray-900 opacity-60'
        onClick={() => {
          SetIsOpen((prev) => !prev.IsOpen)
          scrollTop()
        }}
      ></div>
      <div className='absolute inset-0 z-30 m-auto h-[calc(100%_-_1.5rem)] w-[calc(100%_-_1.5rem)]'>
        <div className='m-auto h-full w-full max-w-5xl overflow-y-auto rounded bg-white p-5'>
          <YakuExplanationList
            yakuNumber={modalOpen.yakuNumber}
            yakuAlias={modalOpen.yakuAlias}
            ref={ref}
          />
        </div>
        <button
          className='
            absolute top-0 right-0 block h-11 w-11 rounded-full bg-gray-50 bg-opacity-70
            before:absolute before:inset-0 before:m-auto before:block before:h-0 before:w-6 before:rotate-45 before:rounded before:border-t-2 before:border-gray-600 before:content-[""]
            after:absolute after:inset-0 after:m-auto after:block after:h-0 after:w-6 after:-rotate-45 after:rounded after:border-t-2 after:border-gray-600 after:content-[""]
          '
          onClick={() => {
            scrollTop()
            SetIsOpen((prev) => !prev.IsOpen)
          }}
        ></button>
      </div>
    </div>
  )
})
