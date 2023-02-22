import React from 'react'
import ComplimentGenerator from './compliment'
import InsultGenerator from './insult'

function Home() {
    return (
        <>
            <InsultGenerator />
            <ComplimentGenerator />
        </>
    )
}

export default Home