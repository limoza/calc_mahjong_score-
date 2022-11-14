import React from 'react'
import { yakus } from '../../../../constants/constants'

export const Modal = React.memo(({ modalOpen, SetIsOpen }) => {
  return (
    <div
      className={
        modalOpen.IsOpen ? 'absolute  h-screen w-screen' : 'relative hidden'
      }
    >
      <div
        className='absolute top-0 right-0 z-10 h-screen w-screen bg-gray-900 opacity-60'
        onClick={() => SetIsOpen((prev) => !prev.IsOpen)}
      ></div>
      <div className='absolute inset-0 z-20 m-auto h-5/6 w-10/12'>
        <div className='h-full w-full overflow-y-auto rounded bg-white p-5 drop-shadow-md'>
          <dl>
            {yakus
              .filter((yaku) => yaku.yakuNumber === modalOpen.yakuNumber)
              .map((yaku) => {
                return (
                  <div key={yaku.id} className='mt-5'>
                    <dt className='text-lg font-bold'>{yaku.content}</dt>
                    <dd className='mt-2'>画像が入ります</dd>
                    <dd className='mt-2'>{yaku.explanation}</dd>
                  </div>
                )
              })}
          </dl>
        </div>
        <button
          className='
            absolute top-0 right-0 block h-11 w-11
            before:absolute before:inset-0 before:m-auto before:block before:h-0 before:w-6 before:rotate-45 before:rounded before:border-t-2 before:border-gray-600 before:content-[""]
            after:absolute after:inset-0 after:m-auto after:block after:h-0 after:w-6 after:-rotate-45 after:rounded after:border-t-2 after:border-gray-600 after:content-[""]
          '
          onClick={() => SetIsOpen((prev) => !prev.IsOpen)}
        ></button>
      </div>
    </div>
  )
})
