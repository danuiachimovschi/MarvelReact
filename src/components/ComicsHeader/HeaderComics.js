import { FlexBox } from "../../assets/helper";
import styled from 'styled-components';

const HeaderText = styled.div`
font-size: 27px;
font-weight: 700;
color:#fff;
margin-top:10px
`
const HeaderComic = styled(FlexBox)`
padding:30px 55px;
background-color:#232222;
margin-bottom:20px
`

const HeaderComics = () => {
    return ( 
        <HeaderComic>
            <HeaderText>
                 New comics every week!
                 <HeaderText>
                     Stay tuned!
                 </HeaderText>
            </HeaderText>
            <img src="img/heroes.png" />
        </HeaderComic>
    );
}
 
export default HeaderComics;