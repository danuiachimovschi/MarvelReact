import styled from 'styled-components';
import AsideCharBox from './Character/AsideCharBox';
import CharacterComics from './Character/CharacterComics';
import Spinner from './../spinner/Spinner';

const AsideInner = styled.div`
width:35%;
align-self: stretch;
margin-left: 20px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
padding:20px
`
const AsideCharacter = ({charsData, error, loading}) => {
    const content = error ? 404 : ( loading ? <Spinner/>  : <AsideCharBox  dataChar={charsData} /> );
    return ( 
        <AsideInner>
          {charsData ?  content : null} 
        </AsideInner>    
    );
}
 
export default AsideCharacter;