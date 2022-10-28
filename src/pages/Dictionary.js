import {useState, useEffect} from 'react';

function Dictionary() {
    
    const [word,setWord] = useState('');


    useEffect(() => {
        console.log(word)
    })

    //no depandency array, update any state change
    //pass empty depend attay, execute once
    //passing state data, only execute when variable changes
  return (
    <div>
        <input type='text' onChange={(e) =>{
            setWord(e.target.value)
            
        }} />
        
        <h1>Let's get the definition for {word}</h1>
    </div>
  )
}

export default Dictionary