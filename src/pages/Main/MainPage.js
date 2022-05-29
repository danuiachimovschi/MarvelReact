import CharacterInner from '../../components/MainCharacter/CharacterInner';
import RandomInner from './../../components/Random/RandomInner';
import axios from 'axios';
import { useState, useEffect } from 'react';
import  styled from 'styled-components';


const ButtonMore = styled.button`
padding: 10px;
margin-bottom:10px;
display:block;
background-color:${props => props.btnStatus === true ? "red" : "white"};
`;

export const MainPage = () => {
    const [chars, setChars] = useState([]);
    const [btnStatus,setBtnStatus] = useState(false);

    function getCharsItems(itemChars = 9){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=${itemChars}&offset=9&apikey=35b64f4deec0e359531e5d77cb231508`)
        .then(res => {
            setChars(res.data.data.results);
            setBtnStatus(false);
        });
    }

    useEffect(() => {
        getCharsItems();
    },[])

    function getMoreChars(e, itemChars){
        setBtnStatus(true);
        getCharsItems(itemChars + 9);
    }

    return (
        <>
            <RandomInner/>
            <CharacterInner items={chars} getMoreChars={getMoreChars}/>
            {btnStatus ? 
            <ButtonMore btnStatus onClick={(e) => getMoreChars(e, chars.length)} type='button'>Get More</ButtonMore> : 
            <ButtonMore  onClick={(e) => getMoreChars(e, chars.length)} type='button'>Get More</ButtonMore>
            }
        </>
    )
}
