import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  sumYakuNumberSelector,
  selectedYakuListSelector,
  scoreSelector,
  temboImageSelector,
} from '@/states/selector/stateSelector'
import { Card } from '@/components/Card'
import { Title } from '@/components/Title'
import { errorText } from '@/constants/constants'

export const Result = ({ title }) => {
  const selectedYakuList = useRecoilValue(selectedYakuListSelector)
  const sumYakuNumber = useRecoilValue(sumYakuNumberSelector)
  const {
    IsZero,
    IsInRange,
    resultName,
    resultScore,
    IsTsumo,
    IsOya,
    resultRonPayment,
    resultTsumoParentPayment,
    resultTsumoChildrenPayment,
  } = useRecoilValue(scoreSelector)
  const {
    resultRonPaymentTemboImages,
    resultTsumoParentPaymentTemboImages,
    resultTsumoChildrenPaymentTemboImages,
  } = useRecoilValue(temboImageSelector)

  // console.log(resultRonPaymentTemboImages)
  // console.log(resultTsumoParentPaymentTemboImages)
  // console.log(resultTsumoChildrenPaymentTemboImages)

  return (
    <div className='sticky bottom-0 left-0 mt-5 border-t-2 border-solid border-red-700 bg-white p-3'>
      <button
        className='absolute right-2 -top-11 flex items-center rounded bg-green-700 py-1.5 px-2'
        type='button'
        onClick={() => window.location.reload()}
      >
        <svg
          className='h-6 w-6 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>

        <p className='ml-0.5 text-sm font-bold text-white'>選択をクリア</p>
      </button>
      <div className='flex items-center justify-between'>
        <Title title={title} />
        <div className='flex items-center justify-end'>
          <p className='rounded-full bg-red-700 px-3 indent-0.5 font-bold tracking-widest text-white'>
            {resultName}
          </p>
          <p className='ml-4 text-right text-2xl font-bold'>
            {!IsInRange && !IsZero ? (
              <span className='text-lg text-red-500'>{errorText.IsOver}</span>
            ) : IsTsumo ? (
              `${resultScore}点`
            ) : !IsTsumo && resultRonPayment ? (
              `${resultRonPayment}点`
            ) : (
              '0点'
            )}
          </p>
        </div>
      </div>

      {IsTsumo && (
        <div className='mt-2 flex justify-end text-right'>
          {!IsOya && <p>親払い: {resultTsumoParentPayment}点</p>}
          <p className='ml-4'>
            子払い: {resultTsumoChildrenPayment}点{IsOya && 'オール'}
          </p>
        </div>
      )}

      {selectedYakuList.length > 0 && (
        <details className='mt-4 rounded bg-neutral-50 text-sm'>
          <summary className='py-1 text-right'>選択した役を見る</summary>
          <ul>
            {selectedYakuList.map((SelectedItem) => {
              return (
                <li
                  key={SelectedItem.id}
                  className='flex justify-between border-b border-dashed border-neutral-300 p-2'
                >
                  <p>{SelectedItem.content}</p>
                  <p>{SelectedItem.yakuNumber}翻</p>
                </li>
              )
            })}
            {sumYakuNumber && (
              <li className='p-2 text-right font-bold'>{sumYakuNumber}翻</li>
            )}
          </ul>
        </details>
      )}
    </div>
  )
}
