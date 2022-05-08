import styled from 'styled-components';
import { FlexBox } from './../../assets/helper';
import Button from './../Global/Buttons/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomLeftBlock = styled(FlexBox)`
padding: 40px;
width:47%;
height:200px;
border-radius:20px;
background:rgba(0, 0, 0, 0.1);
`

const ImgRandomMarvel = styled.img`
width:180px;
height:180px;
`

const RandomName = styled.div`
font-size: 22px;
font-weight: 700;
margin-bottom:20px;
color:#000;
`

const RandomBoxInfo = styled.div`
margin-left:20px;
`

const RandomDescription = styled.div`
font-size: 14px;
font-weight: 400;
`

const RandomButtons = styled(FlexBox)`
justify-content: start;
margin-top:20px;
`

export default function Randomleft(){
    const [randomChar, setRandomChar] = useState([]);
    const [pathImg, setPathImg] = useState('');

    useEffect(() => {
        const randomNbr = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${randomNbr}?apikey=35b64f4deec0e359531e5d77cb231508`)
                        .then(res => {
                            setRandomChar(res.data.data.results[0]);
                            setPathImg(res.data.data.results[0].thumbnail.path + '.' + res.data.data.results[0].thumbnail.extension);
                        });
    },[]);

    return ( 
        <RandomLeftBlock>
            <div>
                <ImgRandomMarvel src={pathImg} />
            </div>
            <RandomBoxInfo>
                <RandomName>
                    {randomChar.name} 
                </RandomName>
                <RandomDescription>
                    {randomChar.description}
                </RandomDescription>
                <RandomButtons>
                    <Button color="#9F0013">
                        HOMEPAGE
                    </Button>
                    <Button color="#5C5C5C">
                        WIKI
                    </Button>
                </RandomButtons>
            </RandomBoxInfo>
        </RandomLeftBlock>
    );
}