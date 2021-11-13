import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navigation() {
    const history = useHistory()
    return (
        <div>
            <button onClick={()=>history.push("/")}>
                Home
            </button>
            <button onClick={()=>history.push("/chords")}>
                Chords
            </button>
            <button onClick={()=>history.push("/scales")}>
                Scales
            </button>
            <button onClick={()=>history.push("/tuner")}>
                Tuner
            </button>
            <button onClick={()=>history.push("/about")}>
                About
            </button>
        </div>
    )
}
