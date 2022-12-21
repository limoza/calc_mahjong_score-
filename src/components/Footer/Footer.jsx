import React from 'react'

export const Footer = React.memo(() => (
  <footer className='m-auto max-w-md bg-gray-100 pt-5'>
    <p className='flex items-center justify-center bg-green-700 py-1 text-center text-white'>
      <svg
        className='mr-1 h-4 w-4 text-white'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {' '}
        <path stroke='none' d='M0 0h24v24H0z' />{' '}
        <circle cx='12' cy='12' r='9' /> <path d='M14.5 9a3.5 4 0 1 0 0 6' />
      </svg>{' '}
      2022 MaScor
    </p>
  </footer>
))
