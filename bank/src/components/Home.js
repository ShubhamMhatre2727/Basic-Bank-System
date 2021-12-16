import React from 'react'
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import MainMenu from './MainMenu';
import NavBar from './NavBar';
import Slider from './Slider';
import ViewUsers from './ViewUsers';
import Transactions from './Transactions';
import MoneyTransfer from './MoneyTransfer';
import AppFooter from './AppFooter';

const Home = () => {
    return (
        <Container>
            <NavBar/>
            <Slider/>
            <MainMenu/>
            <Routes>
                <Route path="/ViewUsers" element={<ViewUsers/>}/>
                <Route path="/MoneyTransfer/:id" element={<MoneyTransfer/>}/>
                <Route path="/Transactions" element={<Transactions/>}/>
            </Routes>
            <AppFooter/>
        </Container>
    )
}

const Container = styled.div`
    display: flex; flex-direction: column;
    justify-content: center;
    background-image: url('/images/Background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

export default Home
