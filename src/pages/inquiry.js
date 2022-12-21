import React from 'react'
import { Header } from '@/components/Header'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'

const Inquiry = React.memo(() => {
  return (
    <>
      <main className={`m-auto h-[94vh] max-w-md bg-gray-100 text-gray-900`}>
        <Header />
        <Card>
          <h1 className='text-2xl font-bold'>お問合せ</h1>
          <p className='mt-3 text-sm leading-relaxed'>
            サイトに関するお問合せは
            <a
              className='font-bold text-blue-600'
              href='https://docs.google.com/forms/d/e/1FAIpQLSc65vpUE_QGgESLi-yWujCjPIQVv7AJKllWD-Dz3Aw1gDfzgQ/viewform?usp=sf_link'
              target='_blank'
            >
              Googleフォーム
            </a>
            よりお気軽にお問い合わせください。
          </p>
        </Card>
      </main>
      <Footer />
    </>
  )
})

export default Inquiry
