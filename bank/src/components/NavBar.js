import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <Container>
            <Logo><Link to="/">GNB</Link></Logo>
            <Navs>
                {/* <div>Home</div>
                <div>Contact Us</div>
                <div>About Us</div> */}
            </Navs>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    padding: 0.5em;

`
const Logo = styled.div`
    background-color: #FF8A00;;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    text-align: center;
    letter-spacing: 0.25em;
    padding: 0 0.3em;                                                                                                                                                                                                                                                                                     

    color: #000000;
    @media (max-width: 768px){
        font-size: 18px;
    }
`
const Navs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin-left: auto;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    
    color: #FFFFFF;
    div{
        margin: 0 0.3em;
    }

    @media (max-width: 768px){
        font-size: 17px;
    }
`

export default NavBar
