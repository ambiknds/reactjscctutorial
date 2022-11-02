import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import NotFound from '../components/NotFound';

function Definition() {
    const [word, setWord] = useState();
    // console.log(useParams())
    const [notFound, setNotFound] = useState();
    let {search} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
              if(response.status === 404) {
                setNotFound(true);
                // navigate('/404')
                // console.log(response.status)
              }
              return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);

        });
    }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound/>
        <Link to='/dictionary'>Search another</Link>
      </>
    );
  }
  return (
    <>
        <h1>Here is a Definition:</h1>
        {word 
            ?<>
              {word.map((meaning) => {
                return (
                <p key={uuidv4}>
                  {meaning.partOfSpeech + ': '}
                  {meaning.definitions[0].definition}
                  {/* {console.log(meaning.definitions[0].definition)} */}
                </p>
              )
              })}
              </>
        : <p>Loading...</p>
        }
        
    </>
  );
}

export default Definition;