import CharactersList from './CharctersList';
import AsideCharacter from './AsideCharacter';
import { FlexBox } from '../../assets/helper';
import  styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const CharsIner = styled(FlexBox)`
margin-top:20px;
`;

const CharacterInner = ({items,getMoreChars}) => {
    const [charsData, setCharsData] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(false);

    function getClcikChar(e, id) {
        setloading(true);
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=35b64f4deec0e359531e5d77cb231508`)
        .then(res => {
            setCharsData(res.data.data.results[0]);
            setloading(false);
        })
        .catch(err => setError(true));
    }
    return ( 
        <CharsIner>
            <CharactersList getClcikChar={getClcikChar} items={items} getMoreChars={getMoreChars} />    
            <AsideCharacter error={error} loading={loading} charsData={charsData}/>
        </CharsIner>
    );
}
 
export default CharacterInner;