import React, { useState } from 'react';

import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
  setDefaultLocale,
  UrlFormatter,
  BooleanFormatter,
  RelativeTimeFormatter,
  GetMapChipFormatter,
  TimeFormatter,
} from '@maruware/dx-react-grid-formatters'
import { pink, amber, blueGrey } from '@material-ui/core/colors'

setDefaultLocale('en')

const StatusFormatter = GetMapChipFormatter({
  normal: {
    label: 'Normal',
    color: blueGrey[500]
  },
  warning: {
    label: 'Warning',
    color: amber[500]
  },
  error: {
    label: 'Error',
    color: pink[500]
  }
})

function App() {
  const [columns] = useState([
    { name: 'id', title: 'ID' },
    { name: 'product', title: 'Product' },
    { name: 'url', title: 'URL' },
    { name: 'status', title: 'Status' },
    { name: 'isReady', title: 'Ready?' },
    { name: 'updatedAt', title: 'Updated at' },
    { name: 'createdAt', title: 'Created at' },
  ]);
  const [rows] = useState([
    {
      id: 1,
      product: 'DevExtreme',
      url: 'https://google.com',
      createdAt: '1985-10-26T01:20:00Z',
      updatedAt: '1985-10-26T01:20:00Z',
      isReady: true,
      status: 'normal',
    },
    {
      id: 2,
      product: 'DevExtreme Reactive',
      url: 'https://google.com',
      createdAt: '1985-10-26T01:35:00Z',
      updatedAt: '1985-10-26T01:40:00Z',
      isReady: false,
      status: 'warning',
    },
  ]);

  return (
    <div className="App">
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />

        <DataTypeProvider
          for={['url']}
          formatterComponent={UrlFormatter}
        />

        <DataTypeProvider
          for={['isReady']}
          formatterComponent={BooleanFormatter}
        />

        <DataTypeProvider
          for={['status']}
          formatterComponent={StatusFormatter}
        />

        <DataTypeProvider
          for={['createdAt']}
          formatterComponent={TimeFormatter}
        />

        <DataTypeProvider
          for={['updatedAt']}
          formatterComponent={RelativeTimeFormatter}
        />
      </Grid>
    </div>
  );
}

export default App;
