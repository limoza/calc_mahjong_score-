import { useRecoilValue, useSetRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../../states/atoms/stateAtom'

// export const setYakuCheckStatus = (id) => {
//   const setYakuStatus = useSetRecoilState(yakuList)
//   setYakuStatus((prev) => {
//     let newList = prev.map((item) => {
//       const newVal = item.id === id && {
//         ...item,
//         IsChecked: !item.IsChecked,
//       }
//       return newVal || item
//     })
//     return newList
//   })
// }

export const setClearYakuCheckStatus = () => {
  const setYakuStatus = useSetRecoilState(yakuList)
  setYakuStatus((prev) => {
    let newList = prev.map((item) => {
      const newVal = {
        ...item,
        IsChecked: false,
      }
      return newVal
    })
    return newList
  })
}
