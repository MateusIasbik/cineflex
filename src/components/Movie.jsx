import React from "react";
import styled from "styled-components";

export default function Movie({ movies, setMovies, movie, index }) {

    return (
                    <MoviesStyled>
                        <img
                            src={movie.posterURL}
                            alt={movies.title}
                            key={index} />
                    </MoviesStyled>
    )
}

const MoviesStyled = styled.li`
    margin: 16px;
    
    img {
       width: 145px;
       height: 210px;
       border-radius: 8px;
    }
`