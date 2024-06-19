import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

export default function Sessions() {

    const [sessions, setSessions] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(response => {
                console.log(response.data.days);
                setSessions(response.data)
            })
            .catch(() => {
                alert("Desculpe, houve um erro!");
            });

    }, [idFilme]);

    if (sessions === null) {
        return (
            <Loading />
        )
    }

    return (
        <SessionsStyled>

            <span>Selecione o horário</span>
            <ul>
                <BoxSchedules>
                    <h2>Quinta-feira, 21/03/2024</h2>
                    <span></span>
                    <TimeBox>
                        <p>10:00</p>
                        <p>19:00</p>
                        <p>22:00</p>
                    </TimeBox>
                </BoxSchedules>

                <BoxSchedules>
                    <h2>Quinta-feira, 21/03/2024</h2>
                    <span></span>
                    <TimeBox>
                        <p>10:00</p>
                        <p>19:00</p>
                        <p>22:00</p>
                    </TimeBox>
                </BoxSchedules>

                <BoxSchedules>
                    <h2>Quinta-feira, 21/03/2024</h2>
                    <span></span>
                    <TimeBox>
                        <p>10:00</p>
                        <p>19:00</p>
                        <p>22:00</p>
                    </TimeBox>
                </BoxSchedules>
            </ul>

        </SessionsStyled>
    );
}

const SessionsStyled = styled.div`
    margin: 100px 0 20px 0;
    background-color: #212226;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-family: "Sarala", sans-serif;
    font-size: 24px;

    span {
        margin-bottom: 10px;
    }
`

const BoxSchedules = styled.div`
    background-color: #2B2D36;
    border-radius: 8px;
    width: 338px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 23px 0;

    span {
        margin: 20px 0;
        width: 302px;
        border-bottom: 2px solid #4E5A65
        ;
    }
`

const TimeBox = styled.div`
    width: 302px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #EE897F;

    p {
        border: 2px solid #EE897F;
        font-size: 16px;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 4px;
    }
`
