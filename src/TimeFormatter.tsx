import React from 'react'
import { DateTime } from 'luxon'

import { makeStyles } from '@material-ui/core/styles'

import { DataTypeProvider } from '@devexpress/dx-react-grid'

const useStyles = makeStyles(() => ({
  text: {
    overflowWrap: 'break-word',
    whiteSpace: 'normal'
  }
}))

export const TimeFormatter: React.FC<DataTypeProvider.ValueFormatterProps> = ({
  value
}) => {
  const classes = useStyles()
  if (value) {
    return (
      <span className={classes.text}>
        {DateTime.fromISO(value).toFormat('y/L/d HH:mm:ss')}
      </span>
    )
  } else {
    return <></>
  }
}
