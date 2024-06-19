import React from "react";
import styled from "styled-components";
import loading from "../assets/loading.webp"

export default function Loading() {
    return (
        <Container>
          <LoadingStyled>
            <LoadingImg src={loading} alt="Carregando..." />
          </LoadingStyled>
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

const LoadingImg = styled.img`
  height: 80px;
`

const LoadingStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`