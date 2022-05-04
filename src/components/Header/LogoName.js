import styled from 'styled-components'


const Info = styled.span`
font-size: 28px;
color:#000000;
margin-left: 10px;
`;

const Logo = styled.h1`
display: flex
`;
const Marvel = styled(Info)`
color:#9F0013;
`

const LogoName = () => {
    return (
        <Logo>
            <Marvel>Marvel</Marvel>
            <Info>information portal</Info>
        </Logo>
    );
}
 
export default LogoName;