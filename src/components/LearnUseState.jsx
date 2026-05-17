import React from 'react'
import { useState } from 'react';

const LearnUseState = () => {

    // let name = "Praveen";
    // function changeName(){
    //     name = "Kumar";
    //     console.log(name);
    // }

    // syntax of useState
    // const [state, setState] = useState(initialValue);
    const [name, setName] = useState("Dharnish Kumar");
    // function demo(){
    //     setName("Sanjay !!!");
    // }

    // function a(user_name){
    //     setName(user_name);
    // }
    
    

  return (
    <div>
            Learn the UseState
        <h2>{name}</h2>
        {/* <button onClick={changeName}>Click me</button> */}
        {/* <button onClick={() => setName("Sabari")}>Click me</button> */}
        {/* <button onClick={demo}>Click me</button> */}
        <button onClick={() => a("Praveen")}>Click me</button>
    </div>
  )
}

export default LearnUseState