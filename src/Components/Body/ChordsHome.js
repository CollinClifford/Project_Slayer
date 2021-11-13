import React from 'react'
import Chords from './Chords';
import { useState, useEffect } from 'react';


export default function ChordsHome() {
    const [chords, setChords] = useState([])
    // const [dicks, setDicks] = useState("")
    
    useEffect(() => {
        fetch(`https://api.uberchord.com/v1/chords?nameLike=${chords}`)
          .then((response) => response.json())
          .then(setChords)
      }, [chords]);
        // console.log(dicks)
    return (
        <div>
            <p>Chords Homepage</p>
            <div>
                
                <select onChange={setChords(value)}value = {chords}>
                    <option>Chord Name</option>
                    <option value="A">A</option>
                    <option>A#/Bb</option>
                    <option>B</option>
                    <option>C</option>
                    <option>C#/Db</option>
                    <option>D</option>
                    <option>D#/Eb</option>
                    <option>E</option>
                    <option>F</option>
                    <option>F#/Gb</option>
                    <option>G</option>
                    <option>G#/Ab</option>
                </select>
                
                <select>
                    <option>Chord Type</option>
                    <option>Major</option>
                    <option>minor</option>
                    <option>7th</option>
                    <option>M7</option>
                    <option>m7</option>
                    <option>5th</option>
                    <option>Diminished7</option>
                    <option>m7b5</option>
                    <option>6th</option>
                    <option>m6</option>
                </select>   
                <button type="submit">Submit</button> 
                
            </div>
            <Chords/>
        </div> 
    ) 
} 
// this app is where were going to have the useEffect to fetch chords and pass to chords.js