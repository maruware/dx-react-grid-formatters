# dx-react-grid-formatters

Formatters for [@devexpress/dx-react-grid](https://www.npmjs.com/package/@devexpress/dx-react-grid)

## Install

```
npm i -S @maruware/dx-react-grid-formatters
```

```
yarn add @maruware/dx-react-grid-formatters
```

## Example

```
cd example
yarn install
yarn start
```

Open http://localhost:3000

![screenshot](https://user-images.githubusercontent.com/1129887/88009733-23fea500-cb4e-11ea-9ab9-04a3f20e452c.png)

## Usage

### BooleanFormatter

```jsx
<DataTypeProvider
    for={['isReady']}
    formatterComponent={BooleanFormatter}
/>
```

### UrlFormatter

```jsx
<DataTypeProvider
    for={['url']}
    formatterComponent={UrlFormatter}
/>
```

### MapChipFormatter

```jsx
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
// ...

<DataTypeProvider
    for={['status']}
    formatterComponent={StatusFormatter}
/>
```

### TimeFormatter

```jsx
<DataTypeProvider
    for={['createdAt']}
    formatterComponent={TimeFormatter}
/>
```

### RelativeTimeFormatter

```jsx
<DataTypeProvider
    for={['updatedAt']}
    formatterComponent={RelativeTimeFormatter}
/>
```