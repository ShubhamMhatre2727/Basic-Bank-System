import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom"

const MoneyTransfer = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [from, setfrom] = useState('')
    const [Users, setUsers] = useState([]);

    const fetchData = async()=>{
        const req = await axios.get('/users')
        setUsers(req.data)
    }

    const getUser = async()=>{
        const req = await axios.get(`/user/${id}`)
        // console.log(req.data)
        setfrom(`${req.data.first} ${req.data.last}`)
    }

    const postData = async(e)=>{
        e.preventDefault()
        const To = JSON.parse(document.getElementById('options').value);
        const amount = document.getElementById('amount')
        if(window.confirm(`Are you sure you want to transfer ₹${amount.value} from ${from} to ${To.name} ?`)) {
            // console.log(`user/${id}/${To.id}/${amount.value}`)
            const req = await axios.patch(`user/${id}/${To.id}/${amount.value}`)
            // console.log(req.data)
            navigate("/Transactions")
        }else console.log("Canceled.")
    }

    useEffect(() => {
        fetchData()
        // console.log(id)
        if(id===':id') setfrom('')
        else if(id==="undefined") setfrom('')
        else getUser();
    }, [])
    return (
        <Container id='moneyTransfer'>
            <Banner>
                <h2>A better way to </h2>
                <h1>Send Money</h1>
                <h3>Fast and easy you want to be more secure send and recives money sort time</h3>
            </Banner>
            <Wrap>
                <h2>Transfer Money</h2>
                <div>
                    <h3>From: {from}</h3>
                </div>
                <form onSubmit={(e)=>postData(e)}>
                <InnerWrap>
                    <h2>To</h2>
                    {/* <input type="text" placeholder='Recepient'/> */}
                    <select id="options" required>
                    <option value="">--Please choose an recipient--</option>
                                        {
                        Users.map((user)=>{
                            return(
                                (user._id !== id)?
                                <option key={user._id} value={`{"id": "${user._id}", "name":"${user.first} ${user.last}"}`}>{user.first} {user.last}</option>
                                :<div key={user._id}></div>
                            )
                        })
                    }
                    </select>
                </InnerWrap>
                <div id='div'>- -o- -</div>
                <InnerWrap>
                    <h2>₹</h2>
                    <input type="number" id='amount' required min='0' placeholder='Amount'/>
                </InnerWrap>
                <Button type='submit'>Transfer</Button>
                </form>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto 0;
`
const Banner = styled.div`
    color: #ffffff;
    margin: auto;
    h2{
        font-size: 64px;
    }
    h1{
        font-size: 96px;
    }
    h3{
        font-size: 24px;
    }

    @media (max-width:768px){
        display: none;
        visibility: collapse;
    }

    @media (max-width: 1024px){
        h1{
            font-size: 52px;
        }
        h2{
            font-size: 33px;
        }
        h3{
            font-size: 18px;
        }
    }

`
const Wrap = styled.div`
margin: 15px auto;
    height: 300px;
    background-color: #ffffff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    div{
        margin: auto;
        width: 100%;
    }
`

const InnerWrap = styled.div`
    display: flex;
    text-align: center;
    h2{
        color: rgba(124, 112, 112, 1);
        width: 50px;
        background-color: rgba(104, 79, 79, 0.2);
        padding: 10px;
        border: 1px solid black;
    }
    input, select{
        font-size: inherit;
        font-weight: bold;
        padding: 0 5px;
        width: 300px;
    }
    @media (max-width: 425px){
        input, select{
            width: 200px;
        }
    }
`
const Button = styled.button`
    margin: 10px auto;
    width: 340px;
    background-color: rgba(29, 53, 138, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 0px;
    border-radius: 25px;

    color: #ffffff;
    font-size: 36px;
    font-weight: 500;

    :active{
        opacity: 0;
        transition: opacity 300ms;
    }

    @media (max-width: 425px){
        width: 200px;
    }
`

export default MoneyTransfer
