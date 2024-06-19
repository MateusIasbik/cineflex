import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";  
import { useNavigate } from "react-router-dom";

export default function Top() {

    const navigate = useNavigate();

    function goToHomePage() {
        navigate('/');
    }

    return (
        <TopStyled>
            <img src={logo} alt="logo" onClick={ goToHomePage } />
            <h1 onClick={ goToHomePage }>Cineflex</h1>
        </TopStyled>
    )
}

const TopStyled = styled.div`
    width: 100%;
    height: 67px;
    background-color: #EE897F;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 40px;
    }

    h1 {
        font-family: "Raleway", sans-serif;
        color: #FADBC5;
        font-size: 34px;
        font-weight: 600;
        margin-left: 10px;
    }
`