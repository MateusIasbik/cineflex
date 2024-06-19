import React, { useState } from "react"
import styled from "styled-components"
import InputMask from "react-input-mask";

export default function Seats() {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");


    return (
        <SeatsStyled>
            <h2>Selecione o(s) assento(s)</h2>
            <Chairs>
                <p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p>
                <p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p>
                <p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p>
                <p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p>
                <p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p><p>50</p>
            </Chairs>
            <span></span>

            <form>
                <FormStyled>
                    <div>
                        <h3 htmlFor="name">Nome do comprador(a)</h3>
                        <input
                            id="name"
                            required
                            type="text"
                            placeholder="Digite seu nome..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 htmlFor="number">CPF do comprador(a)</h3>
                        <InputMask
                            mask="999.999.999-99"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        >

                            {inputProps => {
                                return (
                                    <input
                                        {...inputProps}
                                        required
                                        type="text"
                                        placeholder="Digite seu CPF..."
                                    />
                                )
                            }}
                        </InputMask>
                    </div>
                    <button type="submit">Reservar assento(s)</button>
                </FormStyled>
            </form>


        </SeatsStyled>
    )
}

const SeatsStyled = styled.div`
    margin: 100px 0 0 0;
    background-color: #212226;;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-family: "Sarala", sans-serif;
    font-size: 24px;
    width: 338px;
    margin-bottom: 100px;

    h2 {
        margin-bottom: 30px;
    }

    span {
        padding-bottom: 30px;
        width: 302px;
        border-bottom: 2px solid #4E5A65;
    }
`

const Chairs = styled.label`
    color: #2B2D36;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
        width: 26px;
        height: 26px;
        font-family: "Roboto", sans-serif;
        font-size: 11px;
        border-radius: 50%;
        background-color: #9DB899;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3.5px;
    }
`

const FormStyled = styled.label`
    font-size: 16px;
    color: #FFF;
    font-family: "Sarala", sans-serif;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 240px;

    h3{
        margin-bottom: 5px;
    }

    input {
        width: 302px;
        height: 40px;
        border-radius: 8px;
        color: #AFAFAF;
        font-size: 16px;
        font-style: italic;
        border: none;
    }

    button {
        margin-top: 20px;
        background-color: #EE897F;
        width: 302px;
        height: 42px;
        border-radius: 8px;
        color: #2B2D36;
        font-family: "Sarala", sans-serif;
        font-size: 18px;
        font-weight: 700;
        border: #EE897F;
    }
`