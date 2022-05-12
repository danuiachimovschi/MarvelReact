import Randomleft from './RandomLeft';
import { FlexBox } from './../../assets/helper';
import RandomRight from './RandomRight';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomInner = () => {
    const [update, setUpdate] = useState(false);
    const [randomChar, setRandomChar] = useState([]);
    const [pathImg, setPathImg] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);               

    function getRandom(){
        const randomNbr = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        setError(true);
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${randomNbr}?apikey=35b64f4deec0e359531e5d77cb231508`)
                        .then(res => {
                            setRandomChar(res.data.data.results[0]);
                            setPathImg(res.data.data.results[0].thumbnail.path + '.' + res.data.data.results[0].thumbnail.extension);
                            setLoading(false);
                        }).catch((err) => {
                            setError(!error);
                        });
    }
    
    useEffect(() => {
        getRandom();
    },[]);

    const tryRandomChar = (e) => {
        setLoading(true);
        getRandom();
    }

    
    return ( 
        <FlexBox>
            <Randomleft update={update} randomChar={randomChar} pathImg={pathImg} error={error} loading={loading} />
            <RandomRight tryRandomChar={tryRandomChar}/>
        </FlexBox>
     );
}
 
export default RandomInner;   