import React, { useCallback } from 'react'
import { yakus } from '../../../../constants/constants'
import Image from 'next/image'

export const Modal = React.memo(({ modalOpen, SetIsOpen }) => {
  const ref = React.createRef()
  const scrollTop = useCallback(() => {
    ref.current.scrollIntoView()
  }, [ref])

  return (
    <div
      className={
        modalOpen.IsOpen ? 'fixed z-10 h-full w-full' : 'relative hidden'
      }
    >
      <div
        className='fixed inset-0 z-20 h-full w-full bg-gray-900 opacity-60'
        onClick={() => {
          SetIsOpen((prev) => !prev.IsOpen)
          scrollTop()
        }}
      ></div>
      <div className='absolute inset-0 z-30 m-auto h-[calc(100%_-_1.5rem)] w-[calc(100%_-_1.5rem)]'>
        <div className='m-auto h-full w-full max-w-5xl overflow-y-auto rounded bg-white p-5'>
          <div ref={ref}></div>
          <dl>
            {yakus
              .filter((yaku) => yaku.yakuNumber === modalOpen.yakuNumber)
              .map((yaku) => {
                const imagePath = () => {
                  const imageName = yaku.explanationImage
                    ? yaku.explanationImage
                    : yaku.id
                  return `/images/${imageName}.png`
                }

                return (
                  <div
                    key={yaku.id}
                    className='mt-8 border-b border-dotted border-gray-300 pb-8'
                  >
                    <dt className='text-2xl font-bold text-green-700'>
                      {yaku.content}
                    </dt>
                    <dd className='mt-3 [&>span]:!relative '>
                      <Image
                        className='!relative !h-full !w-full'
                        src={imagePath()}
                        layout='fill'
                        objectFit='contain'
                        alt={yaku.content}
                      />
                    </dd>
                    <dd className='mt-3'>
                      <p
                        className=''
                        dangerouslySetInnerHTML={{
                          __html: yaku.explanationText,
                        }}
                      ></p>
                      {yaku.annotationTexts.length > 0 && (
                        <div className='mt-3 rounded bg-gray-50 px-3 py-2'>
                          {yaku.annotationTexts.map((annotationText, index) => {
                            return (
                              <p
                                key={`${yaku.id}-${index}`}
                                className={`flex items-start before:mr-1.5 before:mt-1 before:block before:rounded-full before:bg-red-600 before:px-1.5 before:text-center before:text-xs before:font-bold before:text-white before:content-["!"] ${
                                  index > 0 ? 'mt-0.5' : ''
                                }`}
                                dangerouslySetInnerHTML={{
                                  __html: annotationText,
                                }}
                              ></p>
                            )
                          })}
                        </div>
                      )}
                    </dd>
                  </div>
                )
              })}
          </dl>
        </div>
        <button
          className='
            absolute top-0 right-0 block h-11 w-11 rounded-full bg-gray-50 bg-opacity-70
            before:absolute before:inset-0 before:m-auto before:block before:h-0 before:w-6 before:rotate-45 before:rounded before:border-t-2 before:border-gray-600 before:content-[""]
            after:absolute after:inset-0 after:m-auto after:block after:h-0 after:w-6 after:-rotate-45 after:rounded after:border-t-2 after:border-gray-600 after:content-[""]
          '
          onClick={() => {
            scrollTop()
            SetIsOpen((prev) => !prev.IsOpen)
          }}
        ></button>
      </div>
    </div>
  )
})
