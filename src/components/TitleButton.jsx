import React from 'react'
import { Title } from '@/components/Title'
import { TextButton } from '@/components/common/Button'
import { useToggleModal } from '@/hooks/useToggleModal'

export const TitleButton = React.memo(
  ({ title, SetIsOpen, yakuNumber, yakuAlias }) => {
    return (
      <div className='flex items-center justify-between'>
        <Title title={title} />
        <TextButton
          clickHandler={useToggleModal}
          SetIsOpen={SetIsOpen}
          yakuNumber={yakuNumber}
          yakuAlias={yakuAlias}
        >
          役解説
        </TextButton>
      </div>
    )
  },
)
