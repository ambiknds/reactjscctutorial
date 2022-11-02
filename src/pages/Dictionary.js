import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function Dictionary() {
    
    const [word,setWord] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
    })

    //no depandency array, update any state change
    //pass empty depend attay, execute once
    //passing state data, only execute when variable changes
  return (
    <>
        <input 
          type='text' 
          onChange={(e) =>{
            setWord(e.target.value)
            
        }} />
        <button onClick={() => {
          navigate('/definition/' + word, {replace: true})
          // console.log('click')
        }}
        
        >Search</button>
    </>
  )
}

export default Dictionary