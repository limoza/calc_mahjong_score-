import React from 'react'
import { KeyVisual } from '@/components/KeyVisual'
import { YakuExplanationList } from '@/components/YakuExplanationList'
import { yakuNumberSections } from '@/constants/constants'
import { Card } from '@/components/Card'

const YakuExplanation = React.memo(() => {
  return (
    <>
      <main className={`bg-gray-100 text-gray-900`}>
        <KeyVisual />
        {yakuNumberSections.map((yakuNumberSection) => {
          return (
            <Card key={`YakuExplanationList-${yakuNumberSection.yakuNumber}`}>
              <YakuExplanationList
                yakuNumber={yakuNumberSection.yakuNumber}
                yakuAlias={yakuNumberSection.alias}
              />
            </Card>
          )
        })}
      </main>
    </>
  )
})

export default YakuExplanation
