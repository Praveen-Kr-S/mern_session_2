import React from 'react'
import { useState,useEffect } from 'react';

const UseEffect_Learn = () => {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    
// useEffect with no dependency array
    useEffect(() => {
        console.log("UseEffect One is called");
    })

// useEffect with dependency array with values
    useEffect(
        () => {
            console.log("UseEffect Two is called");
        },[b,c]
    )

// useEffect with empty dependency array
    useEffect(
        () => {
            console.log("UseEffect Thrird is called");
        },[]
    )

  return (
    <div>
        <h1>UseEffect_Learn</h1>
        <h2>A: {a}</h2>
        <button type="button" onClick={() => setA(a + 1)}>+</button>
        <button type="button" onClick={() => setA(a - 1)}>-</button>
        <h2>B: {b}</h2>
        <button type="button" onClick={() => setB(b + 10)}>+</button>
        <button type="button" onClick={() => setB(b - 10    )}>-</button>
        <h2>C: {c}</h2>
        <button type="button" onClick={() => setC(c + 100)}>+</button>
        <button type="button" onClick={() => setC(c - 100)}>-</button>
    </div>
  )
}

export default UseEffect_Learn