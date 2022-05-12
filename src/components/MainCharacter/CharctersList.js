import styled  from 'styled-components';
import CharacterItemList from './Character/CharacterItemList';

const ListInner = styled.div`
display: flex;
width:64%;
flex-wrap:wrap;
justify-content: space-between;
align-items:center;
`
const CharactersList = ({items,getClcikChar}) => {
    const itemsChars = items.map(({id, name, thumbnail}) => {
        return <CharacterItemList getClcikChar={getClcikChar} key={id} id={id} name={name} img={thumbnail} />;
    });
    return ( 
        <ListInner>
            {itemsChars}
        </ListInner>
    );
}
 
export default CharactersList;