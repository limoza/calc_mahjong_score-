import React, { useCallback } from 'react'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import {
//   yakuList,
//   nakiStatus,
//   oyaStatus,
//   ronTsumoStatus,
// } from '../../states/atoms/stateAtom'

export const useUpdateYakuCheckState = (yakuItem, setYakuListState) => {
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      const IsTarget = item.id === yakuItem.id
      if (!IsTarget) return item
      return {
        ...item,
        IsChecked: !item.IsChecked,
      }
    })
    return newYakuList
  })
}

export const useUpdateYakuDisabledState = (
  disableTarget,
  setYakuListState,
  ShouldDisabled,
  disabledKeys,
  getStatuses,
) => {
  // const getNakiStatus = useRecoilValue(nakiStatus)
  // const getOyaStatus = useRecoilValue(oyaStatus)
  // const getRonTsumoStatus = useRecoilValue(ronTsumoStatus)
  setYakuListState((prev) => {
    console.log(disabledKeys)
    // const nakiStatusAA = getStatuses.nakiStatus
    // const oyaStatusAA = getStatuses.oyaStatus
    // const ronTsumoStatusAA = getStatuses.ronTsumoStatus
    // console.log(nakiStatusAA, 'doya')
    // console.log(oyaStatusAA, 'doya')
    // console.log(ronTsumoStatusAA, 'doya')
    const newYakuList = prev.map((item) => {
      /*
      二重でdisabledかける時
      先にロンが選ばれている
        鳴き
          true: ロンdisのitemを無視してnakiDisをtrue
          false: ロンdisのitemを無視してnakiDisをfalse
      */
      const IsTarget = item[disableTarget]
      if (ShouldDisabled) {
        //制御する場合
        return {
          ...item,
          IsChecked: IsTarget ? false : item.IsChecked,
          IsDisabled: IsTarget ? true : false,
        }
      } else {
        //制御解除の場合
        //既にIsDisabledを無視じゃだめ...
        //あー、解除していいか
        //なんのDisabledが効いているかみなきゃ？
        //ロン、鳴きtrueから鳴きfalseにする
        // ロンtrueは無視して、鳴きtrueだけ解除
        // ろんの状態持ってきてIsTarget2に入れるイメージ
        // まず今他のdisabled系のstatusみなな？

        // const IsTarget2 =
        //一つタイミング遅れてくるんだよな

        /*
        disabledが一つ
        泣きなのかろんツモなのかどの制御でdisabledになってるかわからない
        👉でもstatus持ってこればわかるよね
        ちゃんとリアルタイムにstate取れたとして...
        const rontsumoMushi = rontumoがtrueならdisabledKey.rontsumoがtrueは無視
         */

        return {
          ...item,
          IsChecked: item.IsChecked,
          IsDisabled: false,
        }
      }
    })
    return newYakuList
  })
}

export const useUpdateDoraState = (yakuItem, IsUp, setYakuListState) => {
  setYakuListState((prev) => {
    const newYakuList = prev.map((item) => {
      const IsTarget = item.id === yakuItem.id
      if (!IsTarget) return item
      const value = item.value
      if (IsUp && value < 13) {
        ++value
      } else if (!IsUp && value !== 0) {
        --value
      }

      return {
        ...item,
        value: value,
      }
    })
    return newYakuList
  })
}
