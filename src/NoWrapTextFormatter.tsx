import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { DataTypeProvider } from '@devexpress/dx-react-grid'

const useStyles = makeStyles(() => ({
  text: {
    overflowWrap: 'break-word',
    whiteSpace: 'normal'
  }
}))

export const NoWrapTextFormatter: React.FC<DataTypeProvider.ValueFormatterProps> = ({
  value
}) => {
  const classes = useStyles()
  if (value) {
    return <span className={classes.text}>{value}</span>
  } else {
    return <></>
  }
}
