import styled from 'styled-components';
import Button from '../Global/Buttons/Button';

const RnadomRightInner = styled.div`
width:48%;
margin-left:20px;
padding:30px;
height:200px;
background-color:#232222;
color:#fff;
`

const TextItem = styled.div`
font-size: 24px;
font-weight: 700;
margin-bottom:${props => props.space };
`

const RandomRight = ({tryRandomChar}) => {
    const textData = [
        {
            text:"Random character for today!",
            space:"10px"
        },
        {
            text:"Do you want to get to know him better?",
            space:"50px"
        },
        {
            text:"Or choose another one",
            space:"25px"
        },
    ]
    const textItems = textData.map(({text, space}, index) => {
        return <TextItem key={index} space={space}>{text}</TextItem>
    });

    return ( 
        <RnadomRightInner>
            {textItems}
            <Button color={"#9F0013"} tryRandomChar={tryRandomChar}>
                TRY IT!
            </Button>
        </RnadomRightInner>
    );
}
 
export default RandomRight;