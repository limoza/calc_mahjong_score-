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
          '
          onClick={() => {
            scrollTop()
            SetIsOpen((prev) => !prev.IsOpen)
          }}
        >
          <svg
            className='m-auto h-8 w-8 text-gray-600'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {' '}
            <line x1='18' y1='6' x2='6' y2='18' />{' '}
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>
      </div>
    </div>
  )
})
