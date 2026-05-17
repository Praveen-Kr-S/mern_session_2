import React from 'react'
import { useState } from 'react';

const FormControl = () => {

    function submitForm(event){
        event.preventDefault();
        console.log("User Name: ", userName);
        console.log("Password: ", password);
    }

    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <h1>Form Control</h1>
        <form onSubmit={(event) => submitForm(event)}>

            <label htmlFor="">User Name</label>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <br />
            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

            <br />
            {/* <button type='submit' onClick={(event) => submitForm(event)}>Submit</button> */}
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default FormControl