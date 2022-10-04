import { selector } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../atoms/stateAtom'
import { score } from '../../constants/constants'

export const selectedYakuListSelector = selector({
  key: 'selectedYakuListSelector',
  get: ({ get }) => {
    const getYakuStatus = get(yakuList)
    const getNakiStatus = get(nakiStatus)
    const filteredItems = []

    getYakuStatus
      .filter((yakuItem) => yakuItem.IsChecked)
      .map((yakuItem) => {
        const yakuNumber =
          yakuItem.kuisagari !== '0' && getNakiStatus.status
            ? yakuItem.kuisagari
            : yakuItem.yakuNumber
        filteredItems.push({
          id: yakuItem.id,
          content: yakuItem.content,
          yakuNumber: yakuNumber,
        })
      })

    return filteredItems
  },
})

export const sumYakuNumberSelector = selector({
  key: 'sumYakuNumberSelector',
  get: ({ get }) => {
    const getSelectedYakuList = get(selectedYakuListSelector)
    const filteredItems = [0]

    if (getSelectedYakuList.length === 0) return false

    getSelectedYakuList.map((yakuItem) => {
      filteredItems.push(Number(yakuItem.yakuNumber))
    })

    const sumYakuNumber = filteredItems.length
      ? filteredItems.reduce((perv, crrent) => perv + crrent)
      : [0]

    return sumYakuNumber
  },
})

export const yakuNameSelector = selector({
  key: 'yakuNameSelector',
  get: ({ get }) => {
    const sumYakuNumber = get(sumYakuNumberSelector)

    if (!sumYakuNumber) return false

    let yakuName
    if (sumYakuNumber === 1) {
      yakuName = 'iHan'
    } else if (sumYakuNumber === 2) {
      yakuName = 'ryanHan'
    } else if (sumYakuNumber === 3) {
      yakuName = 'sanHan'
    } else if (sumYakuNumber === 4 || sumYakuNumber === 5) {
      yakuName = 'mangan'
    } else if (sumYakuNumber === 6 || sumYakuNumber === 7) {
      yakuName = 'haneman'
    } else if (
      sumYakuNumber === 8 ||
      sumYakuNumber === 9 ||
      sumYakuNumber === 10
    ) {
      yakuName = 'baiman'
    } else if (sumYakuNumber === 11 || sumYakuNumber === 12) {
      yakuName = 'sanbaiman'
    } else if (sumYakuNumber === 13) {
      yakuName = 'yakuman'
    } else if (sumYakuNumber > 13) {
      yakuName = 'over'
    }

    return yakuName
  },
})

export const scoreSelector = selector({
  key: 'scoreSelector',
  get: ({ get }) => {
    // debugger
    const yakuName = get(yakuNameSelector)
    const constScore = score
    const getOyaStatus = get(oyaStatus)
    const getSelectedYakuList = get(selectedYakuListSelector)

    if (!yakuName) return false

    const agariKey =
      getSelectedYakuList.filter(
        (yakuItem) => yakuItem.id === 'menzenchintsumo',
      ).length !== 0
        ? 'tsumoAgari'
        : 'ronAgari'

    const oyakoKey = getOyaStatus.status ? 'parentAgari' : 'childrenAgari'

    console.log(`agariKey👉${agariKey}`)
    console.log(`oyakoKey👉${oyakoKey}`)

    const resultName = constScore[yakuName].name
    const resultScore = constScore[yakuName].payment[oyakoKey].score
    const resultPayment = constScore[yakuName].payment[oyakoKey][agariKey]

    console.log(`resultName👇`)
    console.log(resultName)
    console.log(`resultScore👇`)
    console.log(resultScore)
    console.log(`resultPayment👇`)
    console.log(resultPayment)

    return {
      resultName: resultName,
      resultScore: resultScore,
      resultPayment: resultPayment,
    }
  },
})
