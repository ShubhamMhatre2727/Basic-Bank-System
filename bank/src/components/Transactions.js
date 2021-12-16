import axios from '../axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Transactions = () => {
    const [Transactions, setTransactions] = useState([]);
    
    const fetchData = async()=>{
        const req = await axios.get('/transactions')
        setTransactions(req.data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container id='transactions'>
            <h1>Tranasctions</h1>
            <div>
            <TransactionsTable>
                <table>
                <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>From (with Sirname)</th>
                    <th>To (with Sirname)</th>
                    <th>Amount</th>
                    <th>DateTime</th>
                </tr>
                </thead>
                <tbody>
                
                {
                    Transactions.map((transaction, index)=>{
                        return(
                            <tr key={transaction._id}>
                                <td>{index+1}</td>
                                <td>{transaction.from}</td>
                                <td>{transaction.to}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.dateTime}</td>
                            </tr>
                        )
                    })
                }
                </tbody>

                </table>
                </TransactionsTable>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    div{
        display: inherit;
        @media (max-width: 768px){
        overflow-x: scroll;
    }
    }
`
const TransactionsTable = styled.div`
    max-height: 300px;
    overflow-y: scroll;


    margin: 20px auto;
    th{
        font-size: 18px;
        color: #ffffff;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.6);
    }
    tr{
        background-color: rgba(0, 0, 0, 0.21);
    }
    td{
        text-align: center;
        font-size: 14px;
        padding: 10px;
        font-weight: 900;
        color: #000000;
    }
    table, td, th, tr{
        /* border:1px solid black; */
    }

    @media (max-width: 425px){
        td, th{
            font-size: 14px;
            padding: 5px;
        }
    }
`

export default Transactions
