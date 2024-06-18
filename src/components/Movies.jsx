import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";

export default function Movies({ movies, setMovies }) {
    return (
        <UlStyled>
            <span>Em Cartaz</span>
            <MoviesStyled>
                {movies.map((movie, index) => {
                    return (
                        <Movie movies={movies} setMovies={setMovies} movie={movie} key={index}/>
                    )
                })}
            </MoviesStyled>
        </UlStyled>
    )
}

const UlStyled = styled.ul`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 0;

    span {
    font-family: "Sarala", sans-serif;
    font-size: 24px;
    color: #FFF;
    }
`

const MoviesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    justify-content: center;
    list-style-type: none
`
