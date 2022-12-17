import React from 'react'
import { existsGaId, GA_ID } from '@/lib/gtag'

export const GA = () => (
  <>
    {existsGaId && (
      <>
        <Script
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy='afterInteractive'
        />
        <Script id='ga' defer strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_ID}');
          `}
        </Script>
      </>
    )}
  </>
)
