import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import Schedules from "./Schedules";

export default function Sessions() {

    const [sessions, setSessions] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(response => {
                setSessions(response.data)
            })
            .catch(() => {
                alert("Desculpe, houve um erro!");
            });

    }, []);

    if (sessions === null) {
        return (
            <Loading />
        )
    }

    return (
        <SessionsStyled>

            <span>Selecione o horário</span>
            <ul>
                {sessions.days.map(data => {
                    return (
                        <Schedules 
                            data={data} 
                            key={data.id}/>
                    )
                })}
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

