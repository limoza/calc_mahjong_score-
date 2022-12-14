import { selector } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '@/states/atoms/stateAtom'
import {
  yakuNumberGroup,
  yakuEnglishNameGroup,
  score,
  yakuNumberSections,
} from '@/constants/constants'

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
          disabledValues: yakuItem.disabledValues,
          yakuType: yakuItem.yakuType,
        })
      })

    return filteredItems
  },
})

export const selectedYakuTypeSelector = selector({
  key: 'selectedYakuTypeSelector',
  get: ({ get }) => {
    const getSelectedYakuList = get(selectedYakuListSelector)
    if (getSelectedYakuList.length === 0) return false

    const selectedYakuType = []
    getSelectedYakuList.map((yakuItem) => {
      yakuItem.yakuType().map((yakuType) => {
        return selectedYakuType.push(yakuType)
      })
    })
    const uniqueTypeSet = new Set(selectedYakuType)
    const uniqueTypeArray = Array.from(uniqueTypeSet)
    const uniqueTypes = {
      IsShuntsuSelected: uniqueTypeArray.includes('shuntsu'),
      IsToitsuSelected: uniqueTypeArray.includes('toitsu'),
      IsKotsuSelected: uniqueTypeArray.includes('kotsu'),
      IsKantsuSelected: uniqueTypeArray.includes('kantsu'),
      IsJihaiSelected: uniqueTypeArray.includes('jihai'),
    }
    return uniqueTypes
  },
})

export const IsSelectedYakumanSelector = selector({
  key: 'IsSelectedYakumanSelector',
  get: ({ get }) => {
    const getSelectedYakuList = get(selectedYakuListSelector)

    const selectedYakuman = getSelectedYakuList.find(
      (yakuItem) => Number(yakuItem.yakuNumber) >= '13',
    )

    const IsSelectedYakuman = selectedYakuman ? selectedYakuman.id : false

    return IsSelectedYakuman
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
      ? filteredItems.reduce((perv, current) => perv + current)
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

    if (!resultRonPaymentTembo) return false

    const tembosImage = []

    tembos.map((tembo) => {
      const temboImage = []
      tembo.man.one && temboImage.push(`man1.png`)
      tembo.sen.five && temboImage.push(`sen5.png`)
      tembo.sen.one && temboImage.push(`sen${tembo.sen.one}.png`)
      tembo.hyaku.five && temboImage.push(`hyaku5.png`)
      tembo.hyaku.one && temboImage.push(`hyaku${tembo.hyaku.one}.png`)
      tembosImage.push(temboImage)
    })

    const resultRonPaymentTemboImages = tembosImage[0]
    const resultTsumoParentPaymentTemboImages = tembosImage[1]
    const resultTsumoChildrenPaymentTemboImages = tembosImage[2]

    return {
      resultRonPaymentTemboImages,
      resultTsumoParentPaymentTemboImages,
      resultTsumoChildrenPaymentTemboImages,
    }
  },
})
