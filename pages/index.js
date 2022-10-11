import React, { useCallback } from 'react'

import { Body } from '../src/components/Body'
import { KeyVisual } from '../src/components/KeyVisual'
import { YakuContainer } from '../src/components/YakuList'
import { AgariStatusList } from '../src/components/AgariStatusList'
import { Card } from '../src/components/Card'
import { CardTitle } from '../src/components/CardTitle'
import { CardDescription } from '../src/components/CardDescription'
import { Result } from '../src/components/Result'

import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../states/atoms/stateAtom'
import { QuestionList, yakuNumberSections } from '../constants/constants'

import { yakuNumberSectionSelector } from './../states/selector/stateSelector'

export default function Home() {
  const getNakiStatus = useRecoilValue(nakiStatus)
  const getOyaStatus = useRecoilValue(oyaStatus)

  const [, setYakuListState] = useRecoilState(yakuList)
  const [, setNakiState] = useRecoilState(nakiStatus)
  const [, setOyaState] = useRecoilState(oyaStatus)

  const filteredItems = useRecoilValue(yakuNumberSectionSelector)

  return (
    <Body>
      <KeyVisual />
      <Card>
        <CardTitle title={QuestionList.oya.title} />
        <CardDescription description={QuestionList.oya.description} />
        <AgariStatusList
          items={getOyaStatus}
          questionType={QuestionList.oya}
          setAgariState={setOyaState}
          disableTarget={'oyaOnly'}
          setYakuListState={setYakuListState}
        />
      </Card>
      <Card>
        <CardTitle title={QuestionList.naki.title} />
        <CardDescription description={QuestionList.naki.description} />
        <AgariStatusList
          items={getNakiStatus}
          questionType={QuestionList.naki}
          setAgariState={setNakiState}
          disableTarget={'menzenOnly'}
          setYakuListState={setYakuListState}
        />
      </Card>

      {yakuNumberSections.map((yakuNumberSection, index) => {
        return (
          <Card key={`yakuNumberSection-${yakuNumberSection.yakuNumber}`}>
            <CardTitle title={`${yakuNumberSection.alias}`} />
            <CardDescription
              description={`${yakuNumberSection.alias}を選んでください`}
            />
            <YakuContainer
              yakuItems={filteredItems[index]}
              setYakuListState={setYakuListState}
            />
          </Card>
        )
      })}
      <Result title='結果' />
    </Body>
  )
}
