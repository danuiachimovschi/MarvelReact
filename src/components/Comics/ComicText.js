import styled from 'styled-components';

const ComicTextItem = styled.div`
color:#000;
font-weight: ${props => props.weight ?? 400};
font-size: ${props => props.size ?? 14} px;
margin-bottom: 10px;
`

const ComicText = ({children, size, weight}) => {

    return ( 
        <ComicTextItem size={size} weight={weight}>
            {children}
        </ComicTextItem>
    );
}
 
export default ComicText;