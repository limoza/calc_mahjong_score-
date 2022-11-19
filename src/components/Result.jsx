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
        <div className='flex items-center justify-between'>
          <CardTitle title={title} />
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
      </Card>
    </div>
  )
}
