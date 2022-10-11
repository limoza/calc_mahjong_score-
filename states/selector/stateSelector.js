import { selector } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../atoms/stateAtom'
import {
  yakuNumberGroup,
  yakuEnglishNameGroup,
  score,
  yakuNumberSections,
} from '../../constants/constants'

export const yakuNumberSectionSelector = selector({
  key: 'yakuNumberSectionSelector',
  get: ({ get }) => {
    const getYakuList = get(yakuList)
    const filteredItems = []

    yakuNumberSections.map((yakuNumberSection) => {
      const filteredItem = getYakuList.filter(
        (getYakuItem) =>
          yakuNumberSection.yakuNumber === getYakuItem.yakuNumber,
      )
      filteredItems.push(filteredItem)
    })

    return filteredItems
  },
})

export const selectedYakuListSelector = selector({
  key: 'selectedYakuListSelector',
  get: ({ get }) => {
    const getYakuList = get(yakuList)
    const getNakiStatus = get(nakiStatus)
    const filteredItems = []

    getYakuList
      .filter((yakuItem) => yakuItem.IsChecked || yakuItem.value > 0)
      .map((yakuItem) => {
        const yakuNumber =
          yakuItem.id === 'dora'
            ? yakuItem.value
            : yakuItem.kuisagari !== '0' && getNakiStatus.status
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
    const constyakuNumberGroup = yakuNumberGroup
    const constYakuEnglishNameGroup = yakuEnglishNameGroup

    let yakuNumberIndex
    constyakuNumberGroup.map((yakuNumber, index) => {
      yakuNumber.indexOf(sumYakuNumber) !== -1 && (yakuNumberIndex = index)
    })

    return constYakuEnglishNameGroup[yakuNumberIndex]
      ? constYakuEnglishNameGroup[yakuNumberIndex]
      : false
  },
})

export const scoreSelector = selector({
  key: 'scoreSelector',
  get: ({ get }) => {
    const yakuName = get(yakuNameSelector)
    const sumYakuNumber = get(sumYakuNumberSelector)
    const constScore = score
    const getOyaStatus = get(oyaStatus)
    const getSelectedYakuList = get(selectedYakuListSelector)

    if (!sumYakuNumber || !yakuName)
      return {
        IsZero: !sumYakuNumber ? true : false,
        IsInRange: false,
      }

    const IsTsumo =
      getSelectedYakuList.filter(
        (yakuItem) => yakuItem.id === 'menzenchintsumo',
      ).length !== 0
        ? true
        : false

    const IsOya = getOyaStatus.status ? true : false
    const oyakoKey = IsOya ? 'parentAgari' : 'childrenAgari'

    const resultName = constScore[yakuName].name
    const resultScore = constScore[yakuName].payment[oyakoKey].score
    const resultRonPayment = constScore[yakuName].payment[oyakoKey].ronAgari
    const resultTsumoParentPayment =
      constScore[yakuName].payment[oyakoKey].tsumoAgari.parentPayment
    const resultTsumoChildrenPayment =
      constScore[yakuName].payment[oyakoKey].tsumoAgari.childrenPayment

    return {
      IsZero: false,
      IsInRange: true,
      resultName: resultName,
      resultScore: resultScore,
      IsTsumo: IsTsumo,
      IsOya: IsOya,
      resultRonPayment: resultRonPayment,
      resultTsumoParentPayment: resultTsumoParentPayment,
      resultTsumoChildrenPayment: resultTsumoChildrenPayment,
    }
  },
})

export const temboSelector = selector({
  key: 'temboSelector',
  get: ({ get }) => {
    const {
      IsInRange,
      resultRonPayment,
      resultTsumoParentPayment,
      resultTsumoChildrenPayment,
    } = get(scoreSelector)

    if (!IsInRange) return false

    const scores = [
      resultRonPayment,
      resultTsumoParentPayment,
      resultTsumoChildrenPayment,
    ]

    const changeType = (target) => {
      return target ? Number(target) : 0
    }
    const calcFive = (target) => {
      return Math.floor(target / 5)
    }
    const calcOne = (target, targetFive) => {
      return target - targetFive * 5
    }

    const results = []

    scores.map((score) => {
      const splitNumbers = String(score / 100)
        .split('')
        .reverse()

      const man = changeType(splitNumbers[2])
      const sen = changeType(splitNumbers[1])
      const hyaku = changeType(splitNumbers[0])

      const senFive = calcFive(sen)
      const hyakuFive = calcFive(hyaku)

      const senOne = calcOne(sen, senFive)
      const hyakuOne = calcOne(hyaku, hyakuFive)

      const numberSplit = {
        man: {
          one: man,
        },
        sen: {
          five: senFive,
          one: senOne,
        },
        hyaku: {
          five: hyakuFive,
          one: hyakuOne,
        },
      }

      results.push(numberSplit)
    })

    const resultRonPaymentTembo = results[0]
    const resultTsumoParentPaymentTembo = results[1]
    const resultTsumoChildrenPaymentTembo = results[2]

    return {
      resultRonPaymentTembo,
      resultTsumoParentPaymentTembo,
      resultTsumoChildrenPaymentTembo,
    }
  },
})

export const temboImageSelector = selector({
  key: 'temboImageSelector',
  get: ({ get }) => {
    const {
      resultRonPaymentTembo,
      resultTsumoParentPaymentTembo,
      resultTsumoChildrenPaymentTembo,
    } = get(temboSelector)

    const tembos = [
      resultRonPaymentTembo,
      resultTsumoParentPaymentTembo,
      resultTsumoChildrenPaymentTembo,
    ]

    const temboImage = []
    // tembos.map(tembo => {
    //   tembo[''].one === 1 ? '5manten'
    // })

    // const resultRonPaymentTembo = results[0]
    // const resultTsumoParentPaymentTembo = results[1]
    // const resultTsumoChildrenPaymentTembo = results[2]

    return {
      // resultRonPaymentTembo,
      // resultTsumoParentPaymentTembo,
      // resultTsumoChildrenPaymentTembo,
    }
  },
})
