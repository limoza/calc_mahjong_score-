import React, { useState, useEffect, useMemo, useCallback } from 'react'

import { Body } from '../src/components/Body'
import { KeyVisual } from '../src/components/KeyVisual'
import { YakuContainer } from '../src/components/YakuList'
import { AgariStatusList } from '../src/components/AgariStatusList'
import { Card } from '../src/components/Card'
import { CardTitle } from '../src/components/CardTitle'
import { CardTitleButton } from '../src/components/CardTitleButton'
import { Result } from '../src/components/Result'
import { Modal } from '../src/components/common/Modal/Modal'

import { useRecoilValue, useRecoilState } from 'recoil'
import {
  yakuList,
  nakiStatus,
  oyaStatus,
  ronTsumoStatus,
} from '../states/atoms/stateAtom'
import {
  QuestionList,
  disabledKeys,
  yakuNumberSections,
} from '../constants/constants'

import {
  yakuNumberSectionSelector,
  selectedYakuTypeSelector,
  IsSelectedYakumanSelector,
} from './../states/selector/stateSelector'
import { useUpdateYakuDisabledState } from '../src/hooks/useUpdateYakuState'

const Home = React.memo(() => {
  const getNakiStatus = useRecoilValue(nakiStatus)
  const getOyaStatus = useRecoilValue(oyaStatus)
  const getRonTsumoStatus = useRecoilValue(ronTsumoStatus)

  const selectedValues = [
    getOyaStatus.selectedValue,
    getRonTsumoStatus.selectedValue,
    getNakiStatus.selectedValue,
  ]

  const [, setYakuListState] = useRecoilState(yakuList)
  const [, setNakiState] = useRecoilState(nakiStatus)
  const [, setOyaState] = useRecoilState(oyaStatus)
  const [, setRonTsumoStatus] = useRecoilState(ronTsumoStatus)

  const filteredItems = useRecoilValue(yakuNumberSectionSelector)
  const selectedYakuType = useRecoilValue(selectedYakuTypeSelector)
  const IsSelectedYakuman = useRecoilValue(IsSelectedYakumanSelector)

  const [modalOpen, SetIsOpen] = useState({
    IsOpen: false,
    yakuNumber: '',
  })

  useEffect(() => {
    useUpdateYakuDisabledState(
      setYakuListState,
      disabledKeys,
      selectedValues,
      IsSelectedYakuman,
      selectedYakuType,
    )
  }, [
    getNakiStatus.status,
    getOyaStatus.status,
    getRonTsumoStatus.status,
    IsSelectedYakuman,
    // selectedYakuType.IsShuntsuSelected,
    // selectedYakuType.IsToitsuSelected,
    // selectedYakuType.IsKotsuSelected,
    // selectedYakuType.IsKantsuSelected,
    // selectedYakuType.IsJihaiSelected,
  ])

  return (
    <>
      <main
        className={`${modalOpen.IsOpen && `fixed`} bg-gray-100 text-gray-900`}
      >
        <Modal modalOpen={modalOpen} SetIsOpen={SetIsOpen} />
        <KeyVisual />
        <Card>
          <CardTitle title={QuestionList.oya.title} />
          <AgariStatusList
            items={getOyaStatus}
            setAgariState={setOyaState}
            setYakuListState={setYakuListState}
          />
          <CardTitle title={QuestionList.ronTsumo.title} className={`mt-5`} />
          <AgariStatusList
            items={getRonTsumoStatus}
            setAgariState={setRonTsumoStatus}
            setYakuListState={setYakuListState}
          />
          <CardTitle title={QuestionList.naki.title} className={`mt-5`} />
          <AgariStatusList
            items={getNakiStatus}
            setAgariState={setNakiState}
            setYakuListState={setYakuListState}
          />
        </Card>

        {yakuNumberSections.map((yakuNumberSection, index) => {
          return (
            <Card key={`yakuNumberSection-${yakuNumberSection.yakuNumber}`}>
              <CardTitleButton
                title={`${yakuNumberSection.alias}を選択してください`}
                SetIsOpen={SetIsOpen}
                yakuNumber={yakuNumberSection.yakuNumber}
              />
              <YakuContainer
                yakuItems={filteredItems[index]}
                setYakuListState={setYakuListState}
                nakiStatus={getNakiStatus}
              />
            </Card>
          )
        })}
        <Result title='点数' />
      </main>
    </>
  )
})

export default Home
