import React from 'react'

const EventPractice = () => {
    function submit(){
        alert("Button Clicked");
    }


    function show(a,b){
        document.querySelector(".std").innerHTML = "Welcome to Livewire";
        let add = a + b;
        document.querySelector(".add").innerHTML = add;
    }
    
  return (
    <div>
        <h2>Event Practice</h2>
        <button onClick={submit} >Click</button>
        <h4 className='std'></h4>
        <h4 className='add'></h4>
        <button onClick={() => show(90, 40)}>Submit</button>
    </div>
  )
}

export default EventPractice