import LogoName from "./LogoName"
import Nav from './Nav';
import styled  from 'styled-components';

const HeaderItem = styled.header`
display:flex;
justify-content:space-between;
align-itemns:center;
`;

export const Header = () => {
    return (
        <HeaderItem>
            <LogoName/>
            <Nav/>
        </HeaderItem>
    )
}