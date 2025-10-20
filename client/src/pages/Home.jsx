import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <h1>Home Page Container</h1>
        <div className='flex flex-col gap-2'>
            <button>Btn1</button>
            <button>Btn2</button>
        </div>
    </>
  )
}

export default Home