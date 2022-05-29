import { FlexBox, ItemCharName } from "../../assets/helper";
import styled from 'styled-components';

const HeroInfo = styled.div`
width: 80%;
`;



const CharInner = ({dataChar}) => {
    const {img, name, desc} = dataChar;
    const imgSrc = "img/items/" + img;
    return ( 
        <FlexBox>
            <img src={imgSrc} />
            <HeroInfo>
                <ItemCharName className="mb-10" black>
                    {name}
                </ItemCharName>
                <ItemCharName black>
                    {desc}
                </ItemCharName>
            </HeroInfo>
        </FlexBox>
    );
}
 
export default CharInner;