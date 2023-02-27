import React from 'react'
import ComplimentGenerator from './compliment'
import InsultGenerator from './insult'
import '../styles/home.css'

function Home() {
    return (
        <>
        <div className='big_container'>
            <InsultGenerator className="insult-generator"/>
            <ComplimentGenerator className="compliment-generator"/>
        </div>
        </>
    )
}

export default Home