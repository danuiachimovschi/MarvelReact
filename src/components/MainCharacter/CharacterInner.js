import CharactersList from './CharctersList';
import AsideCharacter from './AsideCharacter';
import { FlexBox } from '../../assets/helper';
import  styled from 'styled-components';

const CharsIner = styled(FlexBox)`
margin-top:20px;
`;

const CharacterInner = ({items}) => {
    return ( 
        <CharsIner>
            <CharactersList items={items} />    
            <AsideCharacter/>
        </CharsIner>
    );
}
 
export default CharacterInner;