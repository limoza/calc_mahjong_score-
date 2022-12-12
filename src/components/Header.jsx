import React from 'react'
import { SiteTitle } from '@/components/SiteTitle'

export const Header = React.memo(({}) => {
  return (
    <div className='flex items-center justify-between bg-green-700 p-2.5 text-white'>
      <SiteTitle />
      <div>
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
      </div>
    </div>
  )
})
