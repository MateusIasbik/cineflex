import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import axios from "axios";
import styled from "styled-components";
import Top from "./components/Top";
import loading from "../src/assets/loading.webp"

export default function App() {

  const [movies, setMovies] = useState(null);

  useEffect(() => {

    axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then(response => setMovies(response.data))
      .catch(() => (alert("Desculpe, houve um erro!")));
  }, []);

  if (movies === null) {
    return <Container>
      <Loading src={loading} alt="Carregando..." />
    </Container>

  }

  return (
    <Container>
      <Top />
      <Movies movies={movies} setMovies={setMovies} />
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212226;

  span {
    margin-top: 50px;
  }
`

const Loading = styled.img`
  height: 80px;
`
