import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from '../axios';
const ViewUsers = () => {
    const [Users, setUsers] = useState([]);
    const [User, setUser] = useState({});

    const fetchData = async ()=>{
        const req = await axios.get("/users");
        // console.log(req.data);
        setUsers(req.data);
    }


    useEffect(() => {
        fetchData();
        setUser(
            {
                _id: null,
                first: '',
                last: '',
                email: '',
                phone: '',
                amount: '',
            }
        );
    }, [])

    return (
        <Container id='viewUsers'>
            <UsersTable>
                <table>
                <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Sirname</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user, index)=>{
                            return(
                                <tr key={user._id} onClick={()=>setUser(user)}>
                                    <td>{index+1}</td>
                                    <td>{user.first}</td>
                                    <td>{user.last}</td>
                                    <td>{user.amount}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            </UsersTable>
            { (User._id !== null)?
                <Card>
                <h2>{User.first} {User.last}</h2>
                <h3>{User.email}</h3>
                <h3>{User.phone}</h3>
                <div style={{display: "flex", alignItems:"baseline"}}>
                    <h3>Balance:</h3>
                    <h1>₹{User.amount}</h1>
                </div>
                {
                    (User.amount <= 0)?
                    <p>* This user is not eligible to transfer money</p>
                    :
                    <Link to={`/MoneyTransfer/${User._id}`} >Send Money</Link>
                }
            </Card>
            : <></>    
        }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin: 40px 0px;
`
const Card = styled.div`
    width: 370px;
    color: #ffffff;
    background-image: url('images/card-texture.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 10px 10px 30px;
    margin: auto;

    box-shadow: 6px 6px 8px #000000;
    border-radius: 25px;

    a{
        background-color: rgba(19, 75, 159, 0.45);;
        border-radius: 25px;
        padding: 5px 10px;

        font-style: normal;
        font-weight: bold;
        font-size: 18px;

        color: #FFFFFF;
        :hover{
        background-color: #134B9F;
        transform: scale(1.1);
        transition: transform 300ms;
    }
    }
    a, h2, h3{
        margin: 3px 0;
    }

    p{
        font-weight: bold;
        color: red;
    }

    transition: all ease-in-out 300ms;
`
const UsersTable = styled.div`
    height: 300px;
    overflow-y: scroll;


    margin: 30px auto;
    th{
        padding: 10px;
        font-size: 18px;
        color: #ffffff;
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
        th{
            padding: 0px;
        }
        td{
            padding: 5px;
        }
    }
    
`
export default ViewUsers
