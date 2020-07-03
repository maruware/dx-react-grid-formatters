import React from 'react'

import { DataTypeProvider } from '@devexpress/dx-react-grid'

export const GetMapFormatter = (m: { [name: string]: string }) => {
  const e: React.FC<DataTypeProvider.ValueFormatterProps> = ({ value }) => {
    const label = m[value]

    return <span>{label}</span>
  }
  return e
}