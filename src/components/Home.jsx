import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h2 className='demo'>Welcome to livewire....😊</h2>
        <button onClick={() => navigate('/title/')}>Go to Title</button>
    </div>
  )
}

export default Home