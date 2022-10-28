import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

function Definition() {
    const [word, setWord] = useState();
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);

        });
    }, []);
  return (
    <>
        <h1>Here is a Definition of: {word} </h1>
        {word
            ? word.map((meaning) => {
                return (
                    <p key={uuidv4}>
                        {meaning.partOfSpeect + ' '};
                        {meaning.definitions[0].definition}
                    </p>
                );
        })
        : <p>Unable to find your search word.</p>}
    </>
  );
}

export default Definition;