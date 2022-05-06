import styled from 'styled-components'
import { Link } from "react-router-dom";

const List = styled.ul`
display: flex;
justify-content: space-between;
list-style:none;
`;

const ListItem = styled.li`
a{
   font-size: 24px;
    color:#000;
    font-weight: 700; 
}
&:hover a{ 
    color:#9F0013;
}
a{
    text-decoration:none;
}
& + &{
    margin-left:10px;
}
`;

const Nav = () => {
    return ( 
            <List>
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/blog">Blog</Link>
                </ListItem>
                <ListItem>
                    <Link to="/character">Characters</Link>
                </ListItem>
                <ListItem>
                    <Link to="/diary">Comics</Link>
                </ListItem>
            </List>
    );
}
 
export default Nav