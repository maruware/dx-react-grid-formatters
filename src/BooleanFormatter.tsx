import React from 'react'
import Chip from '@material-ui/core/Chip'
import { DataTypeProvider } from '@devexpress/dx-react-grid'

export const BooleanFormatter: React.FC<DataTypeProvider.ValueFormatterProps> = ({
  value
}) => {
  const label = value ? 'Yes' : 'No'
  const color = value ? 'primary' : 'default'
  return <Chip label={label} color={color}/>
}
