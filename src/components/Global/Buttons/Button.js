
import styled from 'styled-components';

const ButtonItem = styled.button`
padding:10px;
background-color:${props => props.color ?? '#5C5C5C'};
margin-right:5px;
border:none;
color:#fff;
`

const Button = ({color, children}) => {
    return <ButtonItem color={color} type='button'>{children}</ButtonItem>;
}
 
export default Button;