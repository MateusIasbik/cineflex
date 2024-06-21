import React from "react";
import styled from "styled-components";

export default function Movie({ movie }) {

    return (
                    <MoviesStyled>
                        <img
                            src={movie.posterURL}
                            alt={movie.title}
                            key={movie.id} />
                    </MoviesStyled>
    )
}

const MoviesStyled = styled.div`
    margin: 12px;
    
    img {
       width: 145px;
       height: 210px;
       border-radius: 8px;
    }
`