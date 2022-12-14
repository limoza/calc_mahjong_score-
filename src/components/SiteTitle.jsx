import React from 'react'
import { LogoWhite } from '@/components/Logo'

export const SiteTitle = React.memo(() => (
  <div className='flex items-center'>
    <LogoWhite />
    <h1 className='text-lg font-bold tracking-wide text-white'>
      かんたん麻雀点数計算
    </h1>
  </div>
))
