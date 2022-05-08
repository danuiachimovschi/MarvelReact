import CharacterInner from '../../components/MainCharacter/CharacterInner';
import RandomInner from './../../components/Random/RandomInner';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const MainPage = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=35b64f4deec0e359531e5d77cb231508')
        .then(res => setChars(res.data.data.results));
    },[])

    return (
        <>
            <RandomInner/>
            <CharacterInner items={chars} />
        </>
    )
}
