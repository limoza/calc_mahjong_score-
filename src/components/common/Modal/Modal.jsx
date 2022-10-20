import React from 'react'
import { yakuExplanations } from '../../../../constants/constants'

export const Modal = React.memo(({ modalOpen, SetIsOpen }) => {
  // console.log(modalOpen.IsOpen)
  // console.log(modalOpen.modalOpen.IsOpen)
  // return 'aa'
  return (
    <div className={modalOpen.IsOpen || 'relative hidden'}>
      <div className='absolute h-screen w-screen bg-gray-900 bg-opacity-80 p-5'>
        {/* <div className='bg-white'>{modalOpen.yakuNumber}</div> */}
        <div className='bg-white'>
          <ul>
            {yakuExplanations.map((yakuExplanation) => {
              // return (
              //   <li>
              //     <div>{yakuExplanation.content}</div>
              //     <div>{yakuExplanation.explanation}</div>
              //   </li>
              // )
            })}
          </ul>
        </div>
        <button
          className='absolute top-1 right-1 text-xl text-white'
          onClick={() => SetIsOpen((prev) => !prev.IsOpen)}
        >
          X
        </button>
      </div>
    </div>
  )
})
