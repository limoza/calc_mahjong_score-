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
        className='absolute top-0 right-0 h-screen w-screen bg-gray-900 opacity-80'
        onClick={() => SetIsOpen((prev) => !prev.IsOpen)}
      ></div>
      <div className='absolute inset-0 m-auto h-5/6 w-10/12 '>
        <div className='h-full w-full overflow-y-auto bg-white p-3'>
          <ul>
            {yakus
              .filter((yaku) => yaku.yakuNumber === modalOpen.yakuNumber)
              .map((yaku) => {
                return (
                  <li key={yaku.id} className='mt-5'>
                    <div>
                      <p>{yaku.content}</p>
                      <p>{yaku.explanation}</p>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
        <button
          className='absolute top-1 right-1 text-xl text-black'
          onClick={() => SetIsOpen((prev) => !prev.IsOpen)}
        >
          X
        </button>
      </div>
    </div>
  )
})
