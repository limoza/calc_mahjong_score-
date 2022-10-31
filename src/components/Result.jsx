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
    <div className='sticky bottom-0 left-0 mt-4 border-t-2 border-solid border-blue-400 bg-blue-50 pb-3 '>
      <Card>
        <CardTitle title={title} />
        <ul className='rounded bg-gray-50 px-1 text-base text-gray-900'>
          {selectedYakuList.map((SelectedItem) => {
            return (
              <li
                key={SelectedItem.id}
                className='flex justify-between border-b border-dashed border-gray-300 py-1'
              >
                <p>{SelectedItem.content}</p>
                <p>{SelectedItem.yakuNumber}翻</p>
              </li>
            )
          })}
          {sumYakuNumber && (
            <li className='py-1 text-right text-base font-bold text-gray-900'>
              {sumYakuNumber}翻
            </li>
          )}
        </ul>
        {!IsInRange && IsZero && (
          <p className='bg-red-400'>{errorText.IsZero}</p>
        )}
        {!IsInRange && !IsZero && (
          <p className='bg-red-400'>{errorText.IsOver}</p>
        )}
        {IsTsumo && (
          <>
            <div className='flex justify-end'>
              <p className='mt-1 mr-1 text-right text-xl font-bold text-red-700'>
                {resultName}
              </p>
              <p className='ml-3 text-right text-2xl font-bold'>
                {resultScore}点
              </p>
            </div>
            {!IsOya && (
              <p className='text-right text-lg'>
                親払い: {resultTsumoParentPayment}点
              </p>
            )}
            <p className='text-right text-lg'>
              子払い: {resultTsumoChildrenPayment}点{IsOya && 'オール'}
            </p>
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
