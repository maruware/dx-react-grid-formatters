import React from 'react'

import LinkIcon from '@material-ui/icons/Launch'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

import { DataTypeProvider } from '@devexpress/dx-react-grid'

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center'
  },
  linkIcon: {
    marginRight: theme.spacing(1)
  }
}))

export const UrlFormatter: React.FC<DataTypeProvider.ValueFormatterProps> = ({
  value
}) => {
  const classes = useStyles()
  if (value) {
    return (
      <Link
        href={value}
        className={classes.link}
        target="_blank"
        rel="noopener"
      >
        <LinkIcon className={classes.linkIcon} />
        Open
      </Link>
    )
  } else {
    return <></>
  }
}
