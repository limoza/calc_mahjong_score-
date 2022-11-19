import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  sumYakuNumberSelector,
  selectedYakuListSelector,
  scoreSelector,
  temboImageSelector,
} from '../../states/selector/stateSelector'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
import { errorText } from '../../constants/constants'

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
    <div className='sticky bottom-0 left-0 mt-5 border-t-2 border-solid border-red-700 bg-red-50 pb-3 '>
      <Card className='mt-2'>
        <CardTitle title={title} />
        {!IsInRange && IsZero && (
          <p className='text-right text-red-500'>{errorText.IsZero}</p>
        )}
        {!IsInRange && !IsZero && (
          <p className='text-right text-red-500'>{errorText.IsOver}</p>
        )}
        <div className='flex items-center justify-end'>
          <p className='rounded-full bg-red-700 px-3 indent-0.5 font-bold tracking-widest text-white'>
            {resultName}
          </p>
          <p className='ml-3 text-right text-2xl font-bold'>
            {/* {IsTsumo ? resultScore : ''}
            {!IsTsumo && resultRonPayment ? resultRonPayment : ''} */}
            {IsTsumo
              ? `${resultScore}点`
              : !IsTsumo && resultRonPayment
              ? `${resultScore}点`
              : ''}
          </p>
        </div>
        {IsTsumo && (
          <div className='mt-2 flex justify-end'>
            {!IsOya && (
              <div className='flex items-end justify-end'>
                <p className='items-end text-right leading-none'>親払い:</p>
                <p className='ml-2 items-end text-right text-lg leading-none'>
                  {resultTsumoParentPayment}点
                </p>
              </div>
            )}
            <div className='ml-5 flex items-end justify-end'>
              <p className='items-end text-right leading-none'>子払い:</p>
              <p className='ml-2 items-end text-right text-lg leading-none'>
                {resultTsumoChildrenPayment}点{IsOya && 'オール'}
              </p>
            </div>
          </div>
        )}
        {/* {!IsTsumo && resultRonPayment && (
          <div className='flex items-center justify-end'>
            <p className='rounded-full bg-red-700 px-3 font-bold tracking-widest text-white'>
              {resultName}
            </p>
            <p className='ml-3 text-right text-2xl font-bold'>
              {resultRonPayment}点
            </p>
          </div>
        )} */}
        {selectedYakuList.length > 0 && (
          <details className='mt-5'>
            <summary className=' text-sm'>選択した役を見る</summary>
            <ul className='rounded bg-neutral-50 text-sm'>
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
      </Card>
    </div>
  )
}
