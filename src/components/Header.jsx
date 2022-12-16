import React, { useState } from 'react'
import { SiteTitle } from '@/components/SiteTitle'
import Link from 'next/link'

export const Header = React.memo(({}) => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='flex items-center justify-between bg-green-700 px-2'>
      <SiteTitle />
      <div className='p-2.5' onClick={() => setIsMenuOpen((prev) => !prev)}>
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
        } absolute top-12 right-0 z-10 w-full bg-neutral-50 drop-shadow`}
      >
        <ul className='border-b border-green-700'>
          <li className='border-b border-dashed border-neutral-300'>
            <Link href='/'>
              <a className='block py-3 px-4'>かんたん麻雀点数計算</a>
            </Link>
          </li>
          <li className='border-b border-dashed border-neutral-300'>
            <Link href='/yaku_explanation'>
              <a className='block py-3 px-4'>画像で解説！麻雀の役一覧</a>
            </Link>
          </li>
          <li className='border-b border-dashed border-neutral-300'>
            <Link href='/privacy_policy'>
              <a className='block py-3 px-4'>プライバシーポリシー</a>
            </Link>
          </li>
          <li>
            <Link href='/inquiry'>
              <a className='block py-3 px-4'>お問合せ</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
})
