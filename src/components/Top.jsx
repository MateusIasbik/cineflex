import React from "react";
import styled from "styled-components";

export default function Top() {
    return (
        <TopStyled>
            <img src="./src/assets/logo.png" alt="" />
            <h1>Cineflex</h1>
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