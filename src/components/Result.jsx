import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  sumYakuNumberSelector,
  selectedYakuListSelector,
  yakuNameSelector,
  scoreSelector,
} from '../../states/selector/stateSelector'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'

export const Result = ({ title, description }) => {
  const selectedYakuList = useRecoilValue(selectedYakuListSelector)
  const sumYakuNumber = useRecoilValue(sumYakuNumberSelector)
  const yakuName = useRecoilValue(yakuNameSelector)
  const score = useRecoilValue(scoreSelector)

  return (
    <Card>
      <CardTitle title={title} />
      <CardDescription description={description} />
      <ul>
        {selectedYakuList.length === 0
          ? '役を選択してください'
          : selectedYakuList.map((SelectedItem) => {
              return (
                <li key={SelectedItem.id} className='flex'>
                  <p>{SelectedItem.content}</p>
                  <p>{SelectedItem.yakuNumber}飜</p>
                </li>
              )
            })}
      </ul>
      <p>{sumYakuNumber ? `合計: ${sumYakuNumber}飜` : ''}</p>
      <p>{yakuName ? `結果: ${yakuName}` : ''}</p>
      <p>{score}</p>
    </Card>
  )
}
