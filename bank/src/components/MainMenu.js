import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <Container>
            <Wrap to="/ViewUsers">
                <img src="/images/users.png" alt="users" />
                <h2>Users</h2>
            </Wrap >
            {/* <Wrap to="/MoneyTransfer/:id">
                <img src="/images/money-transfer.png" alt="users" />
                <h2>Money Transfer</h2>
            </Wrap> */}
            <Wrap to="/Transactions">
                <img src="/images/transactions.png" alt="users" />
                <h2>Transactions</h2>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Wrap = styled(Link)`
    display: flex; flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1.5em;

    @media (max-width: 768px){
        img{
            width: 84px;
        }
        h2{
            font-size: 16px;
        }
    }
    @media (max-width: 425px){
        img{
            width: 52px;
        }
        h2{
            font-size: 10px;
        }
    }
`
export default MainMenu
