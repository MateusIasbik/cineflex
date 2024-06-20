import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import Loading from "./Loading";
import { useNavigate, useParams } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Seats() {

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [seats, setSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [numberSeats, setNumberSeats] = useState([]);
    const { idSessao } = useParams();
    const navigate = useNavigate();

    function SeatsSelect(number) {

        if (number.isAvailable) {
            setSelectedSeats(numberSelected => {
                if (numberSelected.includes(number.id)) {
                    return numberSelected.filter(seatId => seatId !== number.id);
                } else {
                    setNumberSeats(seats => [...seats, number.name]);
                    return [...numberSelected, number.id];
                }
            });
        } else {
            alert("Este assento não está disponível");
        }
    }

    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(response => setSeats(response.data))
            .catch(() => alert("Desculpe, houve um erro!"));

    }, [idSessao]);

    function SubmitForm(event) {

        event.preventDefault();

        const reservationData = {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        };

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reservationData)
            .then(() => {
                alert("Reserva realizada com sucesso!");
                setSelectedSeats([]);
                setName("");
                setCpf("");

                axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
                    .then(response => {
                        setSeats(response.data);
                        navigate("/sucesso", { state: { reservationData, seats, numberSeats } });
                    })
                    .catch(() => {
                        alert("Desculpe, houve um erro ao atualizar a lista de assentos!");
                    });
            })
            .catch(() => {
                alert("Desculpe, houve um erro ao fazer a reserva!");
            });

    }

    if (seats === null) {
        return (
            <Loading />
        )
    }

    return (
        <SeatsStyled>
            <h2>Selecione o(s) assento(s)</h2>
            <Chairs>
                {seats.seats.map(number => {
                    return (
                        <Seat
                            onClick={() => SeatsSelect(number)}
                            key={number.id}
                            $isSelected={selectedSeats.includes(number.id)}
                            $isAvailable={number.isAvailable}
                        >
                            {number.name}
                        </Seat>
                    )
                })}
            </Chairs>
            <span></span>

            <form onSubmit={SubmitForm} to={`/sucesso`}>
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
                            required
                            placeholder="Digite seu CPF..."
                        >
                            {(inputProps) => <input {...inputProps} type="text" />}
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
`

const Seat = styled.p`
    width: 26px;
    height: 26px;
    font-family: "Roboto", sans-serif;
    font-size: 11px;
    border-radius: 50%;
    background-color: ${({ $isSelected, $isAvailable }) =>
        $isSelected ? '#FADBC5' : $isAvailable ? '#9DB899' : '#2B2D36'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.5px;
    color: ${({ $isAvailable }) => ($isAvailable ? '#000' : '#2B2D36')};
    outline: ${({ $isSelected, $isAvailable }) =>
        $isSelected ? '2px solid #EE897F' : $isAvailable ? 'none' : 'inset 0 0 0 2px #2B2D36'};
`;


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
        width: 338px;
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
        width: 338px;
        height: 42px;
        border-radius: 8px;
        color: #2B2D36;
        font-family: "Sarala", sans-serif;
        font-size: 18px;
        font-weight: 700;
        border: #EE897F;
    }
`