# SuperSpark
Convey your data with small areas.

## Install
```
npm i superspark
```
Or use `yarn`.

## Use
Pass SuperSpark an array of objects with the property `y` set to a number.

```js
import React from 'react'
import SuperSpark from 'superspark'

export default () => {
  const data = [{y:1}, {y:4}, {y:9}, {y:7}]
  return (
    <div>
      <h1>Magnificent Spark</h1>
      <SuperSpark data={data} />
    </div>
  )
}
```
**Try it!** You can replace everything in App.js of a freash create-react-app with this code. Remember to also run `npm i superspark`.

## Props

* `data` - Array of points containing a `y` property defining a number. (*Example* `[{y:1}, {y:4}, {y:9}, {y:7}]`)
* `plot` - Visualization type, one of `'bars'`, `'area'`, `'line'` and `'dots'` (*default: `'bars'`*)
* `color` - A fill color string. (*default: `'#2ebd59'`*)
* `width` - In pixels. (*default: `160`*)
* `height` - In pixels. (*default: `90`*)

## Develop
This project is using Storybook to develop the component.
In Storybook we develop the component for the different use
cases by passing different props and see how it looks.
Together with Storyshots we can test these stories with
Jest snapshots. Very nice!

### Prettier
Use [Prettier](https://github.com/prettier/prettier), note the file `.vscode/settings.json`. If you use another editor than VS Code, check the prettier docs for you editor. 

### Start
Start Storybook on localhost:9009.
```
npm start
```
Start test runner(Jest) in watch mode.
```
npm test
```

## Build
Build the distributed component file and github pages docs, which is the storybook.
```
npm run build
```
