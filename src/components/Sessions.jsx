import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

export default function Sessions() {

    const [sessions, setSessions] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {
        console.log(`Fetching data for movie ID: ${idFilme}`);

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(response => setSessions(response.data))
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

    </SessionsStyled>
);
}

const SessionsStyled = styled.div`
    margin-top: 100px;
    background-color: #212226;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-family: "Sarala", sans-serif;
    font-size: 24px;
`
