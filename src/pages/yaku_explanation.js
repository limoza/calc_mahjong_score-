import React from 'react'
import { Header } from '@/components/Header'
import { YakuExplanationList } from '@/components/YakuExplanationList'
import { yakuNumberSections } from '@/constants/constants'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'

const YakuExplanation = React.memo(() => {
  return (
    <>
      <main className={`m-auto max-w-md bg-gray-100 text-gray-900`}>
        <Header />
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
      <Footer />
    </>
  )
})

export default YakuExplanation
