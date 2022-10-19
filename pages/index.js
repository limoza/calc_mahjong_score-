import React, { useState } from 'react'

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
import { QuestionList, yakuNumberSections } from '../constants/constants'

import { yakuNumberSectionSelector } from './../states/selector/stateSelector'

export default function Home() {
  const getNakiStatus = useRecoilValue(nakiStatus)
  const getOyaStatus = useRecoilValue(oyaStatus)
  const getRonTsumoStatus = useRecoilValue(ronTsumoStatus)

  const getStatuses = {
    nakiStatus: useRecoilValue(nakiStatus),
    oyaStatus: useRecoilValue(oyaStatus),
    ronTsumoStatus: useRecoilValue(ronTsumoStatus),
  }
  const disabledKeys = {
    oya: QuestionList.oya.disabledKey,
    ronTsumo: QuestionList.ronTsumo.disabledKey,
    naki: QuestionList.naki.disabledKey,
  }

  const [, setYakuListState] = useRecoilState(yakuList)
  const [, setNakiState] = useRecoilState(nakiStatus)
  const [, setOyaState] = useRecoilState(oyaStatus)
  const [, setRonTsumoStatus] = useRecoilState(ronTsumoStatus)

  const filteredItems = useRecoilValue(yakuNumberSectionSelector)

  const [modalOpen, SetIsOpen] = useState({
    IsOpen: false,
    yakuNumber: '',
  })

  return (
    <Body modalOpen={modalOpen}>
      <Modal modalOpen={modalOpen} SetIsOpen={SetIsOpen} />
      <KeyVisual />
      <Card>
        <CardTitle title={QuestionList.oya.title} />
        <CardDescription description={QuestionList.oya.description} />
        <AgariStatusList
          items={getOyaStatus}
          setAgariState={setOyaState}
          disabledKeys={disabledKeys}
          getStatuses={getStatuses}
          setYakuListState={setYakuListState}
        />
      </Card>

      <Card>
        <CardTitle title={QuestionList.ronTsumo.title} />
        <CardDescription description={QuestionList.ronTsumo.description} />
        <AgariStatusList
          items={getRonTsumoStatus}
          setAgariState={setRonTsumoStatus}
          disabledKeys={disabledKeys}
          getStatuses={getStatuses}
          setYakuListState={setYakuListState}
        />
      </Card>

      <Card>
        <CardTitle title={QuestionList.naki.title} />
        <CardDescription description={QuestionList.naki.description} />
        <AgariStatusList
          items={getNakiStatus}
          setAgariState={setNakiState}
          disabledKeys={disabledKeys}
          getStatuses={getStatuses}
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
    </Body>
  )
}
