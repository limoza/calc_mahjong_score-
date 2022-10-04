import { useRecoilValue, useSetRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../../states/atoms/stateAtom'

export const setYakuCheckStatus = (id) => {
  const setYakuStatus = useSetRecoilState(yakuList)
  console.log('run')
  setYakuStatus((prev) => {
    let newList = prev.map((item) => {
      const newVal = item.id === id && {
        ...item,
        IsChecked: !item.IsChecked,
      }
      return newVal || item
    })
    return newList
  })
}
