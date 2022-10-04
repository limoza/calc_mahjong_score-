import { Body } from '../src/components/Body'
import { KeyVisual } from '../src/components/KeyVisual'
import { YakuContainer } from '../src/components/YakuList'
import { AgariStatusList } from '../src/components/AgariStatusList'
import { Result } from '../src/components/Result'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { yakuList, nakiStatus, oyaStatus } from '../states/atoms/stateAtom'
import { QuestionList } from '../constants/constants'

export default function Home() {
  const gettedYakuList = useRecoilValue(yakuList)
  const getNakiStatus = useRecoilValue(nakiStatus)
  const setNakiStatus = useSetRecoilState(nakiStatus)
  const getOyaStatus = useRecoilValue(oyaStatus)
  const setOyaStatus = useSetRecoilState(oyaStatus)

  const filterItems = (conditionValue) => {
    const filteredItems = gettedYakuList.filter(
      (filteredItem) => filteredItem.yakuNumber === conditionValue,
    )
    return filteredItems
  }

  return (
    <Body>
      <KeyVisual />
      <AgariStatusList
        items={getOyaStatus}
        questionType={QuestionList.oya}
        setStatus={setOyaStatus}
        disable={'oyaOnly'}
      />
      <AgariStatusList
        items={getNakiStatus}
        questionType={QuestionList.naki}
        setStatus={setNakiStatus}
        disable={'menzenOnly'}
      />
      <YakuContainer
        yakuItems={filterItems('1')}
        title='1翻役'
        description='1翻役を選んでください'
      />
      <YakuContainer
        yakuItems={filterItems('2')}
        title='2翻役'
        description='2翻役を選んでください'
      />
      <YakuContainer
        yakuItems={filterItems('3')}
        title='3翻役'
        description='3翻役を選んでください'
      />
      <YakuContainer
        yakuItems={filterItems('6')}
        title='6翻役'
        description='6翻役を選んでください'
      />
      <YakuContainer
        yakuItems={filterItems('13')}
        title='役満'
        description='役満を選んでください'
      />
      <Result title='結果' description='結果です' />
    </Body>
  )
}
