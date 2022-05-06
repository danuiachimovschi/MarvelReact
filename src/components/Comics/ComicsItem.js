import styled from 'styled-components';
import { ItemCharName } from '../../assets/helper';
import ComicText from './ComicText';

const ComicItem = styled.div`
width:225px;
img{
    height:100%;
}
`;


const ComicsItem = ({id, img, name, price}) => {
    const srcImg = '/img/' + img;
    return ( 
        <ComicItem>
            <img src={srcImg} alt={name} />
            <ComicText size={20} weight={700}>
                {name}
            </ComicText>
            <ComicText size={13} weight={700}>
                {price} $
            </ComicText>
        </ComicItem>
    );
}
 
export default ComicsItem;