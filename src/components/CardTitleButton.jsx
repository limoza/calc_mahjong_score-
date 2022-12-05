import React from 'react'
import { CardTitle } from '@/components/CardTitle'
import { Button } from '@/components/common/Button'
import { useToggleModal } from '@/hooks/useToggleModal'

export const CardTitleButton = React.memo(
  ({ title, SetIsOpen, yakuNumber, yakuAlias }) => {
    return (
      <div className='flex items-center justify-between'>
        <CardTitle title={title} />
        <Button
          clickHandler={useToggleModal}
          SetIsOpen={SetIsOpen}
          yakuNumber={yakuNumber}
          yakuAlias={yakuAlias}
        >
          役解説
        </Button>
      </div>
    )
  },
)
