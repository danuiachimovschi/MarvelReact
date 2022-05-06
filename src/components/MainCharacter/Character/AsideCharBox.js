import styled from 'styled-components';
import Button from '../../Global/Buttons/Button';
import { FlexBox, ItemCharName } from './../../../assets/helper';
import CharacterComics from './CharacterComics';


const CharInfoAside = styled(FlexBox)`
margin-bottom:20px;
`;
const ImgBoxChar = styled.img`
    margin-right:10px;
    width:150px;
    height:150px;
`;

const CharDescription = styled.div`
margin:15px 0px;
`;

const AsideCharBox = ({dataChar}) => {
    const {id,  img, name,description, comics } = dataChar;
    const srcImg = "/img/items/" + img;
    return ( 
        <div key={id}>
            <CharInfoAside>
                    <ImgBoxChar src={srcImg} alt={name} />
                    <div>
                        <ItemCharName black>{name}</ItemCharName>
                        <div>
                            <Button color={"#9F0013"}>
                                HOMEPAGE
                            </Button>
                            <Button>
                                WIKI
                            </Button>
                         </div>
                    </div>
            </CharInfoAside>
            <CharDescription>
                {description}
            </CharDescription>
            <CharacterComics comics={comics} />
        </div> 
    );
}
 
export default AsideCharBox;