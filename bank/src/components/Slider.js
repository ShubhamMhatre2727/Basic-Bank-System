import React from 'react'
import styled from 'styled-components'

const Slider = () => {
    return (
        <Container>
            <Wrap>
                <div><h1 id='green'>G</h1><h2>oliath</h2></div>
                <div><h1 id='cyan'>N</h1><h2>ational</h2></div>
                <div><h1 id='orange'>B</h1><h2>ank</h2></div>
                <p>the world leader in credit and banking</p>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px ;
`
const Wrap = styled.div`
    width: 90vw;
    height: 65vh;
    padding: 10px 0;
    padding-left: 50px;

    color: #ffffff;
    font-family: 'Playball';
    font-size: 48px;
    font-weight: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    p{
        font-size: 24px;
    }
    div{
        display: flex;
        align-items: baseline;
    }
    h1::first-letter{
        font-size: 96px;
    }

    #green::first-letter{color: rgba(0, 255, 56, 0.73)}
    #cyan::first-letter{color: rgba(0, 240, 255, 0.73)}
    #orange::first-letter{color: rgba(255, 199, 0, 0.73)}

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-image: url('/images/image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.50);
    border-radius: 25px;

    @media (max-width: 768px){
        padding-left: 10px;
        height: 75vh;
        font-size: 36px;
        h1::first-letter{
        font-size: 72px;
    }
    }
`

export default Slider
