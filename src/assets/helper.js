import styled from 'styled-components';

const FlexBox = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
`;

const ItemCharName = styled.div`
font-size: 22px;
font-weight: ${props => props.weight ?? 700};
margin-bottom: ${props => props.marginBottom ?? 0}px;
color: ${props => props.black ? "#000" : "#fff" } ;
padding:${props => props.black ? "0" : "10px 5px 30px 5px" };
`;

export  { FlexBox, ItemCharName };