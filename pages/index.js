import React, { useState, useEffect, useMemo } from 'react'

import { Body } from '../src/components/Body'
import { KeyVisual } from '../src/components/KeyVisual'
import { YakuContainer } from '../src/components/YakuList'
import { AgariStatusList } from '../src/components/AgariStatusList'
import { Card } from '../src/components/Card'
import { CardTitle } from '../src/components/CardTitle'
import { CardTitleButton } from '../src/components/CardTitleButton'
import { CardDescription } from '../src/components/CardDescription'
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

import { yakuNumberSectionSelector } from './../states/selector/stateSelector'
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

  const [modalOpen, SetIsOpen] = useState({
    IsOpen: false,
    yakuNumber: '',
  })

  useEffect(() => {
    useUpdateYakuDisabledState(setYakuListState, disabledKeys, selectedValues)
  }, [getNakiStatus.status, getOyaStatus.status, getRonTsumoStatus.status])

  return (
    <div className={`${modalOpen.IsOpen && `fixed`} bg-gray-100`}>
      <Modal modalOpen={modalOpen} SetIsOpen={SetIsOpen} />
      <KeyVisual />
      <Card>
        <CardTitle title={QuestionList.oya.title} />
        <CardDescription description={QuestionList.oya.description} />
        <AgariStatusList
          items={getOyaStatus}
          setAgariState={setOyaState}
          setYakuListState={setYakuListState}
        />
      </Card>

      <Card>
        <CardTitle title={QuestionList.ronTsumo.title} />
        <CardDescription description={QuestionList.ronTsumo.description} />
        <AgariStatusList
          items={getRonTsumoStatus}
          setAgariState={setRonTsumoStatus}
          setYakuListState={setYakuListState}
        />
      </Card>

      <Card>
        <CardTitle title={QuestionList.naki.title} />
        <CardDescription description={QuestionList.naki.description} />
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
              title={`${yakuNumberSection.alias}`}
              SetIsOpen={SetIsOpen}
              yakuNumber={yakuNumberSection.yakuNumber}
            />
            <CardDescription
              description={`${yakuNumberSection.alias}を選んでください`}
            />
            <YakuContainer
              yakuItems={filteredItems[index]}
              setYakuListState={setYakuListState}
              nakiStatus={getNakiStatus}
            />
          </Card>
        )
      })}
      <Result title='結果' />
      <p className='bg-blue-300 bg-gray-100 bg-gray-300 text-gray-200'>test</p>
    </div>
  )
})

export default Home
