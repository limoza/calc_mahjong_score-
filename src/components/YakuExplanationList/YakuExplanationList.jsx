import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { yakus } from '@/constants/constants'
import { yakuList } from '@/states/atoms/stateAtom'
import { Title } from '@/components/Title'
import Image from 'next/image'

export const YakuExplanationList = React.forwardRef(
  ({ yakuNumber, yakuAlias }, ref) => {
    const getYakuList = useRecoilValue(yakuList)
    return (
      <>
        <Title title={`${yakuAlias}の解説`} ref={ref} />
        <dl>
          {getYakuList
            .filter((yaku) => yaku.yakuNumber === yakuNumber)
            .map((yaku) => {
              const imagePath = () => {
                const imageName = yaku.explanationImage
                  ? yaku.explanationImage
                  : yaku.id
                return `/images/yaku_explanation/${imageName}.png`
              }

              return (
                <div
                  key={yaku.id}
                  className='mt-8 border-b border-dotted border-gray-300 pb-8'
                >
                  <dt className='flex items-center text-2xl font-bold text-green-700'>
                    <p className='mr-2'>{yaku.content}</p>
                    {yaku.disabledValues.nakiDisabled ? (
                      <p className='ml-1 flex items-center rounded-full bg-red-700 px-2 py-0.5 text-sm font-bold text-white'>
                        鳴き
                        <svg
                          className='h-4 w-4 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='3'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </p>
                    ) : (
                      <>
                        <p className='ml-1 flex items-center rounded-full bg-green-700 px-2 py-0.5 text-sm font-bold text-white'>
                          鳴き
                          <svg
                            className='ml-0.5 h-4 w-4 text-white'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='3'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            {' '}
                            <path stroke='none' d='M0 0h24v24H0z' />{' '}
                            <circle cx='12' cy='12' r='9' />
                          </svg>
                        </p>
                        {yaku.kuisagari === '0' || (
                          <p className='ml-1 rounded-full bg-green-700 px-2 py-0.5 text-sm font-bold text-white'>
                            喰下り
                            <span className='mr-0.5 ml-0.5'>
                              {yaku.kuisagari}
                            </span>
                            翻
                          </p>
                        )}
                      </>
                    )}
                  </dt>
                  <dd className='mt-3 '>
                    <Image
                      src={imagePath()}
                      objectFit={'contain'}
                      width={652}
                      height={75}
                      unoptimized={true}
                      alt={`${yaku.content}のあがりの形`}
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
