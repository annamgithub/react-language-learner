# react-custom-radio-buttons

It is a reactJs component which behave like a radio button ,
So ! Let's Make a Deal make a deal I Will be in charge of
state and you will be in charge of rendering ,
see the Usage Below

[![npm version](https://img.shields.io/badge/npm-v1.0.1-blue)](https://www.npmjs.com/package/react-custom-radio-buttons)

# Installation

```
npm install react-custom-radio-buttons --save

```

# Demo

![Alt Text](https://s5.gifyu.com/images/custom-buttons2.gif)

# Usage

```js
import React, { useState } from "react";
import { Radio, RadioGroup } from "react-custom-radio-buttons";
import "./App.css";

const options = ["xs", "s", "m", "l", "xl", "xxl", "xxxl"];

function App() {
  const [size, setSize] = useState(null);
  const onChange = option => {
    setSize(option);
  };
  return (
    <div className="App">
      <h1>Please Selct Your Size</h1>
      <RadioGroup containerStyle="options-container" onChange={onChange}>
        {options.map(option => (
          <Radio
            value={option}
            render={({ isSelected }) => (
              <button
                className="option"
                style={{
                  backgroundColor: ` ${isSelected ? "#39ab31" : "#f9d10a"} `
                }}
              >
                {option}
              </button>
            )}
          />
        ))}
      </RadioGroup>

      <h1>Your Size is {size}</h1>
    </div>
  );
}
```

app.css

```css
.App {
  text-align: center;
}
.option {
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
}
.options-container {
  display: flex;
  flex-direction: row;
}
```

# Props

1-RadioGroup

| Prop name      | Description                                | isRequired | type     |
| -------------- | ------------------------------------------ | ---------- | -------- |
| onChange       | Give You The Value of selected Option      | Yes        | function |
| containerStyle | Styling The container of all radio buttons | No         | String   |

2-Radio

| Prop name    | Description                  | isRequired | type     |
| ------------ | ---------------------------- | ---------- | -------- |
| render       | Render Radio Button UI       | Yes        | function |
| value        | The Value Of The Option      | Yes        | Any      |
| disableStyle | Styling The Disabled Option  | No         | Object   |
| isDisabled   | Tell That Option Is Disabled | No         | Boolean  |

## Thank you
