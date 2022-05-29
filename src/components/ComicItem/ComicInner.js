import styled from 'styled-components';
import { FlexBox, ItemCharName } from '../../assets/helper';

const ComicInformation = styled.div`
margin-left: 10px;
width:80%;
align-self: stretch;
`;
const ComicInner = ({dataComic}) => {
    const { img, name, desc, pages, lang, price } = dataComic;
    const srcComic = "img/" + img;
    return ( 
        <FlexBox>
            <img src={srcComic} alt={name} />
            <ComicInformation>
                <ItemCharName marginBottom={10} className='mb-10' black>
                    {name}
                </ItemCharName>
                <ItemCharName  weight={400} marginBottom={50}  className='mb-10' black>
                    {desc}
                </ItemCharName>
                <ItemCharName  weight={400} marginBottom={20} className='mb-10' black>
                    {pages} pages
                </ItemCharName>
                <ItemCharName  weight={400} marginBottom={20} className='mb-10' black>
                    Lang: {lang}
                </ItemCharName>
                <ItemCharName  className='mb-10' black>
                    Price: {price}
                </ItemCharName>
            </ComicInformation>
        </FlexBox>
    );
}
 
export default ComicInner;