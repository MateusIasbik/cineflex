import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Movies() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(response => setMovies(response.data))
            .catch(() => (alert("Desculpe, houve um erro!")));
    }, []);

    if (movies === null) {
        return (
            <Loading />
        )
    }

    return (
        <UlStyled>
            <span>Em Cartaz</span>
            <MoviesStyled>
                {movies.map((movie) => {
                    return (
                        <MovieLink key={movie.id} to={`/sessoes/${movie.id}`}>
                            <Movie
                                movie={movie}
                            />
                        </MovieLink>
                    )
                })}
            </MoviesStyled>
        </UlStyled>
    );
}

const UlStyled = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    span {
        font-family: "Sarala", sans-serif;
        font-size: 24px;
        color: #FFF;
    }
`;

const MoviesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    justify-content: center;
`;

const MovieLink = styled(Link)`
    text-decoration: none;
    background-color: orange;
`;