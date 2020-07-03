import React from 'react'
import { DataTypeProvider } from '@devexpress/dx-react-grid'

import Chip from '@material-ui/core/Chip'

type MapChipParam = {
  [name: string]: {
    label: string
    color?: string
  }
}

export const GetMapChipFormatter = (m: MapChipParam) => {
  const e: React.FC<DataTypeProvider.ValueFormatterProps> = ({ value }) => {
    const v = m[value]

    if (!v) {
      return <></>
    }

    return (
      <Chip
        label={v.label}
        color={v.color ? 'primary' : 'default'}
        style={{ backgroundColor: v.color }}
      />
    )
  }
  return e
}