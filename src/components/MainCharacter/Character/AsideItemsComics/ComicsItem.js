import styled from 'styled-components';

const ComicItem = styled.div`
padding:10px 18px;
font-size: 18px;
font-weight: 700;
margin-bottom: 10px;
box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.20);
`

const ComicsItem = ({name}) => {
    return <ComicItem>{name}</ComicItem>;
}
 
export default ComicsItem;