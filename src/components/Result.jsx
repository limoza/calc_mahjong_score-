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
    <div className='sticky bottom-0 left-0 mt-5 border-t-2 border-solid border-green-400 bg-green-50 pb-3 '>
      <Card>
        <CardTitle title={title} />
        <ul className='mt-5 rounded bg-neutral-50 text-sm'>
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
        {!IsInRange && IsZero && (
          <p className='text-right text-red-500'>{errorText.IsZero}</p>
        )}
        {!IsInRange && !IsZero && (
          <p className='text-right text-red-500'>{errorText.IsOver}</p>
        )}
        {IsTsumo && (
          <>
            <div className='mt-3 flex justify-end'>
              <p className='mt-1 text-right text-xl font-bold text-red-700'>
                {resultName}
              </p>
              <p className='ml-3 text-right text-2xl font-bold'>
                {resultScore}点
              </p>
            </div>
            {!IsOya && (
              <div className='mt-2 flex items-end justify-end'>
                <p className='mt-1 items-end text-right text-lg leading-none'>
                  親払い:
                </p>
                <p className='ml-3 items-end text-right text-xl leading-none'>
                  {resultTsumoParentPayment}点
                </p>
              </div>
            )}
            <div className='mt-2 flex items-end justify-end'>
              <p className='mt-1 items-end text-right text-lg leading-none'>
                子払い:
              </p>
              <p className='ml-3 items-end text-right text-xl leading-none'>
                {resultTsumoChildrenPayment}点{IsOya && 'オール'}
              </p>
            </div>
          </>
        )}
        {!IsTsumo && resultRonPayment && (
          <div className='flex justify-end'>
            <p className='mt-1 mr-1 text-right text-xl font-bold text-red-700'>
              {resultName}
            </p>
            <p className='ml-3 text-right text-2xl font-bold'>
              {resultRonPayment}点
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}
