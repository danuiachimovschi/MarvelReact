import styled from 'styled-components';
import { ItemCharName } from '../../../assets/helper';

const ItemCharBox = styled.div`
background:#232222;
width:200px;
margin-bottom:10px;
border:3px solid white;
transition:border .7s ease;
&:hover{
    border:3px solid red;
}
`;



const CharacterItemList = ({name, img}) => {
    const srcImg = "/img/items/" + img;
    return ( 
        <ItemCharBox>
            <img src={srcImg} alt='img' />
            <ItemCharName>
                {name}
            </ItemCharName>
        </ItemCharBox>
    );
}
 
export default CharacterItemList;