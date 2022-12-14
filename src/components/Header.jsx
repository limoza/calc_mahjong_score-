import React, { useState } from 'react'
import { SiteTitle } from '@/components/SiteTitle'

export const Header = React.memo(({}) => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='flex items-center justify-between bg-green-700 p-2.5'>
      <SiteTitle />
      <div onClick={() => setIsMenuOpen((prev) => !prev)}>
        {IsMenuOpen ? (
          <svg
            className='m-auto h-6 w-6 text-white'
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
        ) : (
          <svg
            className='h-6 w-6 text-white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {' '}
            <line x1='3' y1='12' x2='21' y2='12' />{' '}
            <line x1='3' y1='6' x2='21' y2='6' />{' '}
            <line x1='3' y1='18' x2='21' y2='18' />
          </svg>
        )}
      </div>
      <div
        className={`${
          IsMenuOpen ? 'block' : 'hidden'
        } absolute top-12 right-0 z-10 min-w-[13rem] bg-neutral-50 drop-shadow`}
      >
        <ul className=''>
          <li className='border-b border-dashed border-neutral-300 p-2 text-right'>
            役解説
          </li>
          <li>お問合せ</li>
        </ul>
      </div>
    </div>
  )
})
