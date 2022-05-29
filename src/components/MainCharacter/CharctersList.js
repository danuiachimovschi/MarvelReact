import styled  from 'styled-components';
import Button from '../Global/Buttons/Button';
import CharacterItemList from './Character/CharacterItemList';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListInner = styled.div`
display: flex;
width:64%;
flex-wrap:wrap;
justify-content: space-between;
align-items:center;
`
const CharactersList = ({items, getClcikChar, getMoreChars }) => {

    const itemsChars = items.map(({id, name, thumbnail}) => {
        return <CharacterItemList getClcikChar={getClcikChar} key={id} id={id} name={name} img={thumbnail} />;
    });

    return ( 
        <ListInner>
            {itemsChars}
        </ListInner>
    );
}
CharactersList.propTypes = {
    items: PropTypes.number,
};
export default CharactersList;