import styled from 'styled-components';
import { FlexBox } from './../../assets/helper';
import Button from './../Global/Buttons/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './../spinner/Spinner';

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
export default function Randomleft({error, loading, randomChar, pathImg}){
    const result = error ?
                    loading ? <Spinner/> : <Char name={randomChar.name} img={pathImg} desc={randomChar.description}/> 
                    : <Char name={"user 404"} img={"path 404"} desc={"desc 404"}/>;
    return ( 
        <RandomLeftBlock>
            { result } 
        </RandomLeftBlock>
    );
}

const Char = ({img, name , desc}) => {
    return (
        <>
            <div>
                <ImgRandomMarvel src={img} />
            </div>
            <RandomBoxInfo>
                <RandomName>
                    {name} 
                </RandomName>
                <RandomDescription>
                    {desc}
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
        </>
    )
}