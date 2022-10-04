import { useMemo, useCallback } from 'react'
import { YakuItem } from './YakuItem'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../../states/atoms/stateAtom'
import { setYakuCheckStatus } from '../../pages/index'
import { sumYakuNumber } from '../../states/selector/stateSelector'

export const YakuContainer = ({ yakuItems, title, description }) => {
  const setYakuStatus = useSetRecoilState(yakuList)
  const getNakiStatus = useRecoilValue(nakiStatus)

  const updateYakuCheckState = useCallback((yakuItem) => {
    // console.log('updateYakuCheckState')
    setYakuStatus((prev) => {
      const newList = prev.map((item) => {
        const IsTarget = item.id === yakuItem.id
        if (IsTarget) {
          // console.log(item.yakuType)
          const newVal = item.id === yakuItem.id && {
            ...item,
            IsChecked: !item.IsChecked,
          }
          return newVal
        }
        return item
      })
      return newList
    })
  }, [])

  const labelColor = (yakuItem) => {
    if (yakuItem.IsChecked) {
      return `bg-blue-300`
    } else if (getNakiStatus.status) {
      return yakuItem.IsDisabled ? `bg-gray-100 text-gray-200` : `bg-gray-300`
    } else {
      return `bg-gray-300`
    }
  }

  const calcKuisagari = (kuisagari) => {
    return kuisagari !== '0' && getNakiStatus.status ? kuisagari : ''
  }

  return (
    <Card>
      <CardTitle title={title} />
      <CardDescription description={description} />
      <ul className='mt-1 flex flex-wrap gap-2'>
        {yakuItems.map((yakuItem) => {
          return (
            <li key={yakuItem.id}>
              <YakuItem
                yakuItem={yakuItem}
                labelColor={labelColor}
                handleClick={() => updateYakuCheckState(yakuItem)}
                kuisagari={calcKuisagari}
              />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
