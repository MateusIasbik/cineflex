import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Movies from "./components/Movies";
// import Movie from "./components/Movie";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Successful from "./components/Successful";
import Top from "./components/Top";

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Top />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/sessoes/:idFilme" element={<Sessions />} />
          {/* <Route path="/sessoes/:idFilme" element={<Movie />} /> */}
          <Route path="assentos" element={<Seats />} />
          <Route path="sucesso" element={<Successful />} />
        </Routes>
      </Container>
    </BrowserRouter>
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
`;