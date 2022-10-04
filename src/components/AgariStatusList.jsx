import { useRecoilValue, useSetRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../../states/atoms/stateAtom'

import { ItemSelectRadio } from './ItemSelectRadio'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'

export const AgariStatusList = ({
  items,
  questionType,
  setStatus,
  disable,
}) => {
  const setYakuStatus = useSetRecoilState(yakuList)

  const updateCheckState = (value, disable) => {
    if (value === 1) {
      setStatus((prev) => {
        const newStatusList = { ...prev }
        return { ...newStatusList, status: true }
      })
      setYakuStatus((prev) => {
        let newList = prev.map((item) => {
          const newVal = item[disable] && {
            ...item,
            IsChecked: false,
            IsDisabled: true,
          }
          return newVal || item
        })
        return newList
      })
    } else if (value === 2) {
      setStatus((prev) => {
        const newStatusList = { ...prev }
        return { ...newStatusList, status: false }
      })
      setYakuStatus((prev) => {
        let newList = prev.map((item) => {
          const newVal = item[disable] && {
            ...item,
            IsDisabled: false,
          }
          return newVal || item
        })
        return newList
      })
    }
  }

  const labelColor = (value, status) => {
    if ((value === 1 && status) || (value === 2 && !status)) {
      return `bg-blue-300`
    } else {
      return `bg-gray-300`
    }
  }

  return (
    <Card>
      <CardTitle title={questionType.title} />
      <CardDescription description={questionType.description} />
      <ul className='mt-1 flex flex-wrap'>
        {questionType.values.map((value, index) => {
          return (
            <li key={`${questionType.id}-${index}`}>
              <ItemSelectRadio
                id={items.id}
                value={value}
                choice={questionType.choices[index]}
                setStatus={setStatus}
                labelColor={labelColor(value, items.status)}
                handleClick={() => updateCheckState(value, disable)}
              />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
