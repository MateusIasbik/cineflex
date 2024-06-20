import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Successful(reservationData) {
    console.log(reservationData);

    const navigate = useNavigate();

    function goToHomePage() {
        navigate('/');
    }

    return (
        <SuccessfulStyled>
            <h2>Pedido finalizado!</h2>
            <BoxSuccessful>
                <h3>Filme e sessão</h3>
                <span></span>
                <p>Homem-Aranha: através do aranhaverso</p>
                <p>22/03/2024 às 21:00</p>
                <h3>Ingressos</h3>
                <span></span>
                <p>Assento 15</p>
                <p>Assento 16</p>
                <h3>Comprador(a)</h3>
                <span></span>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </BoxSuccessful>
            <ButtonReturn onClick={ goToHomePage }>Voltar para tela inicial</ButtonReturn>
        </SuccessfulStyled>
    )
}

const SuccessfulStyled = styled.div`
    margin: 100px 0 40px 0;
    background-color: #212226;;
    color: #FFF;
    font-family: "Sarala", sans-serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Sarala", sans-serif;

    span {
        margin: 20px 0;
        width: 302px;
        border-bottom: 2px solid #4E5A65;
        margin: 5px 10px;
    }

    h2 {
        margin-bottom: 30px;
        color: #9DB899;
    }
`

const BoxSuccessful = styled.div`
    background-color: #2B2D36;
    width: 338px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    padding-bottom: 15px;

    h3 {
        color: #EE897F;
        margin: 20px 0 0 10px;
        font-size: 22px;
        font-weight: 700;
    }

    p {
        margin: 8px 10px;
        font-size:  20px;
        font-weight: 400;
    }
`

const ButtonReturn = styled.button`
    width: 338px;
    height: 42px;
    background-color: #EE897F;
    border-radius: 8px;
    margin-top: 22px;
    font-size: 18px;
    font-weight: 700;
    color: #2B2D36;
`