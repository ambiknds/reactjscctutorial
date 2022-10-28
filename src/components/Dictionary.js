import {useState, useEffect} from 'react';

function Dictionary() {
    
    const [word,setWord] = useState('');

    useEffect(() => {
        console.log(word)
    })


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