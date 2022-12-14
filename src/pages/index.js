import React, { useState, useEffect } from 'react'

import { Header } from '@/components/Header'
import { YakuList } from '@/components/YakuList'
import { AgariStatusList } from '@/components/AgariStatusList'
import { Card } from '@/components/Card'
import { Title } from '@/components/Title'
import { TitleButton } from '@/components/TitleButton'
import { Result } from '@/components/Result'
import { Modal } from '@/components/Modal'
import { Footer } from '@/components/Footer'

import { useRecoilValue, useRecoilState } from 'recoil'
import {
  yakuList,
  nakiStatus,
  oyaStatus,
  ronTsumoStatus,
} from '@/states/atoms/stateAtom'
import {
  QuestionList,
  disabledKeys,
  yakuNumberSections,
} from '@/constants/constants'

import {
  yakuNumberSectionSelector,
  selectedYakuTypeSelector,
  IsSelectedYakumanSelector,
} from '@/states/selector/stateSelector'
import { useUpdateYakuDisabledState } from '@/hooks/useUpdateYakuState'

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
    <div className='m-auto max-w-md'>
      <Modal modalOpen={modalOpen} SetIsOpen={SetIsOpen} />
      <main
        className={`${
          modalOpen.IsOpen && `fixed`
        } m-auto max-w-md bg-gray-100 text-gray-900`}
      >
        <Header />
        <Card>
          <Title title={QuestionList.oya.title} />
          <AgariStatusList
            items={getOyaStatus}
            setAgariState={setOyaState}
            setYakuListState={setYakuListState}
          />
          <Title title={QuestionList.ronTsumo.title} className={`mt-5`} />
          <AgariStatusList
            items={getRonTsumoStatus}
            setAgariState={setRonTsumoStatus}
            setYakuListState={setYakuListState}
          />
          <Title title={QuestionList.naki.title} className={`mt-5`} />
          <AgariStatusList
            items={getNakiStatus}
            setAgariState={setNakiState}
            setYakuListState={setYakuListState}
          />
        </Card>

        {yakuNumberSections.map((yakuNumberSection, index) => {
          return (
            <Card key={`yakuNumberSection-${yakuNumberSection.yakuNumber}`}>
              <TitleButton
                title={`${yakuNumberSection.alias}???????????????????????????`}
                SetIsOpen={SetIsOpen}
                yakuNumber={yakuNumberSection.yakuNumber}
                yakuAlias={yakuNumberSection.alias}
              />
              <YakuList
                yakuItems={filteredItems[index]}
                setYakuListState={setYakuListState}
                nakiStatus={getNakiStatus}
              />
            </Card>
          )
        })}
        <Result title='??????' />
      </main>
      <Footer />
    </div>
  )
})

export default Home
