import React from 'react'
import { CardTitle } from './CardTitle'
import { Button } from './common/Button'
import { useToggleModal } from '../hooks/useToggleModal'

export const CardTitleButton = React.memo(
  ({ title, SetIsOpen, yakuNumber }) => {
    return (
      <div className='flex justify-between'>
        <CardTitle title={title} />
        <Button
          clickHandler={useToggleModal}
          SetIsOpen={SetIsOpen}
          yakuNumber={yakuNumber}
        >
          役解説
        </Button>
      </div>
    )
  },
)
