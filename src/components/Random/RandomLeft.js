import styled from 'styled-components';
import { FlexBox } from './../../assets/helper';
import Button from './../Global/Buttons/Button';

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

const Randomleft = () => {
    return ( 
        <RandomLeftBlock>
            <div>
                <ImgRandomMarvel src='/img/random.jpg'/>
            </div>
            <RandomBoxInfo>
                <RandomName>
                    THOR
                </RandomName>
                <RandomDescription>
                     As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
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
 
export default Randomleft;