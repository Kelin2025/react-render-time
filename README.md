# react-render-time

React hook to check how much does it take to render  
![Image](https://user-images.githubusercontent.com/4208480/48386572-7e056100-e703-11e8-84ba-4ac2f175ba6b.png)

## Demo

[![Edit rw0y7j0z9n](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rw0y7j0z9n)

## Installation

```
yarn add react-render-time
```

## Usage

```js
import React from "react"
import useRenderTime from "react-render-time"

const App = () => {
  useRenderTime("App")

  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}
```
