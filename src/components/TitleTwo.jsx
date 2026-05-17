import React from 'react'

const TitleTwo = ({ software, mark, products }) => {
  return (
    <div>
      
        <h3>Secondary Title</h3>
        <p>Software: {software}</p>
        <p>Mark: {mark}</p>
        <ol>{ products.map((product, index) => <li key={index}>{product}</li>) }</ol>

    </div>
  )
}

export default TitleTwo