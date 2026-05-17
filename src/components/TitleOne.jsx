import React from 'react'

const TitleOne = (props) => {
  
  return (
    <div>
        <h1>Main Title</h1>
        <h2>Welcome, {props.name}!</h2>
        <h3>Your job title is: {props.job}</h3>
        <h4>Your salary is: ${props.salary}</h4>
        <h3>{props.children}</h3>
        <button onClick={() => console.log(props.add(5, 10))}>Click me</button>
    </div>
  )
}

export default TitleOne