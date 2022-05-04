import { Header } from "../components/Header/Header"
import styled from 'styled-components'

const Container = styled.div`
width:1000px;
max-width:100%;
margin:0 auto;
`

export const Main = ({children}) =>{
    return (
        <Container>
            <Header/>
            {children}
        </Container>
    )
}