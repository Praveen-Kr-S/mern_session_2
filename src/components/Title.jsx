import React from 'react'
import TitleOne from './TitleOne.jsx'
import TitleTwo from './TitleTwo.jsx'
import { useNavigate } from 'react-router-dom'

function Title(){
    let navigate = useNavigate();

    function add(a, b){
        let sum = a + b;
        alert("Sum is: " + sum);
    }

    function previous(){
        navigate("/");
    }

    function next(url){
        navigate(url);
    }

    return (
        <div>
            <TitleOne name="Sanjay" job="Software Engineer" salary={5000} add = {add}>Hello dharnish</TitleOne>
            <TitleTwo software="React" mark={98} products={["Samsung", "Apple", "Realme", "Mi", "OPPO"]} />


            <br /><br />
            <button onClick={previous} >Home Page </button>
            <button onClick={() => next("/practice/")} >Next Page </button>
        </div>
    )
}

export default Title