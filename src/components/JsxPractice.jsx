import React from 'react'

const JsxPractice = () => {
    const name = "Sanjay";
    let age = 26;
    let pic = <img src="https://image6.slideserve.com/11543526/jsx-javascript-xml-l.jpg" alt="jsx_pic" width="200" height="200" />

  return (
    <div>
        {pic}
        <h1>Hello, {name}!</h1>
        <p>You are {age} years old.</p>

    </div>
  )
}

export default JsxPractice