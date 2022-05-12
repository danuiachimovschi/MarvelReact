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

const ImgChar = styled.img`
width:200px;
height:200px;
`;


const CharacterItemList = ({id, name, img,getClcikChar}) => {
    const srcImg = img.path + "." + img.extension;
    return ( 
        <ItemCharBox onClick={(e) => getClcikChar(e, id)}>
            <ImgChar src={srcImg} alt='name' />
            <ItemCharName>
                {name}
            </ItemCharName>
        </ItemCharBox>
    );
}
 
export default CharacterItemList;