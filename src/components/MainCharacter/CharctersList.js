import styled  from 'styled-components';
import CharacterItemList from './Character/CharacterItemList';

const ListInner = styled.div`
display: flex;
width:64%;
flex-wrap:wrap;
justify-content: space-between;
align-items:center;
`
const CharactersList = ({items}) => {
    const itemsChars = items.map(({id, name, img}) => {
        return <CharacterItemList key={id} name={name} img={img} />;
    });
    return ( 
        <ListInner>
            {itemsChars}
        </ListInner>
    );
}
 
export default CharactersList;