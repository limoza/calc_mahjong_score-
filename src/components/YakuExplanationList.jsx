import React from 'react'
import { yakus } from '@/constants/constants'
import { CardTitle } from '@/components/CardTitle'
import Image from 'next/image'

export const YakuExplanationList = React.forwardRef(
  ({ yakuNumber, yakuAlias }, ref) => {
    return (
      <>
        <CardTitle title={`${yakuAlias}の解説`} ref={ref} />
        <dl>
          {yakus
            .filter((yaku) => yaku.yakuNumber === yakuNumber)
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
                      alt={`${yaku.content}の上がりの形`}
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
      </>
    )
  },
)
