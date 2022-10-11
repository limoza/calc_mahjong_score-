import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  sumYakuNumberSelector,
  selectedYakuListSelector,
  scoreSelector,
  temboSelector,
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
    resultRonPaymentTembo,
    resultTsumoParentPaymentTembo,
    resultTsumoChildrenPaymentTembo,
  } = useRecoilValue(temboSelector)

  console.log(resultRonPaymentTembo)
  console.log(resultTsumoParentPaymentTembo)
  console.log(resultTsumoChildrenPaymentTembo)

  return (
    <Card>
      <CardTitle title={title} />
      <ul className='bg-gray-200'>
        {selectedYakuList.map((SelectedItem) => {
          return (
            <li key={SelectedItem.id} className='flex justify-between'>
              <p>{SelectedItem.content}</p>
              <p>{SelectedItem.yakuNumber}飜</p>
            </li>
          )
        })}
      </ul>
      {sumYakuNumber && <p className='bg-red-200'>合計: {sumYakuNumber}飜</p>}
      {!IsInRange && IsZero && <p className='bg-red-400'>{errorText.IsZero}</p>}
      {!IsInRange && !IsZero && (
        <p className='bg-red-400'>{errorText.IsOver}</p>
      )}
      {resultName && <p className='bg-red-400'>結果: {resultName}</p>}
      {IsTsumo && (
        <>
          <p>{resultScore}点</p>
          {!IsOya && <p>親払い: {resultTsumoParentPayment}点</p>}
          <p>
            子払い: {resultTsumoChildrenPayment}点{IsOya && 'オール'}
          </p>
        </>
      )}
      {!IsTsumo && resultRonPayment && <p>{resultRonPayment}点</p>}
    </Card>
  )
}
