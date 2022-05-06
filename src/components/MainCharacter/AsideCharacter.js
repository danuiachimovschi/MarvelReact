import styled from 'styled-components';
import AsideCharBox from './Character/AsideCharBox';
import CharacterComics from './Character/CharacterComics';

const AsideInner = styled.div`
width:35%;
align-self: stretch;
margin-left: 20px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
padding:20px
`
const dataChar = {
    id:1,
    img:"item.jpg",
    description:"descriere",
    name:"ABYSS",
    comics:[
        {
            id:1,
            name:"first name"
        },
        {
            id:2,
            name:"first name"
        },
        {
            id:3,
            name:"first name"
        },
    ]
}

const AsideCharacter = () => {
    return ( 
        <AsideInner>
            <AsideCharBox dataChar={dataChar} />
        </AsideInner>    
    );
}
 
export default AsideCharacter;