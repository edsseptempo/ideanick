import React from "react"
export const App = () => {
  // return <h1 className="my-class">
  //   Hello <br /> Rim!
  // </h1>

  return React.createElement(
    'h1',
    {className: 'my-class' },
    'Hello',
    React.createElement('br'),
    'Rim!'
  )
}