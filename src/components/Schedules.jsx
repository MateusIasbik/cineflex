import React from "react"
import styled from "styled-components"

export default function Schedules( { data } ) {
    
    console.log(data.showtimes);
    
    return (
        <BoxSchedules>
                    <h2>{`${data.weekday}, ${data.date}`}</h2>
                    <span></span>
                    <TimeBox>
                        {data.showtimes.map(time => {
                            return (
                                <p key={time.id}>{time.name}</p>
                            )
                        })}
                    </TimeBox>
                </BoxSchedules>
    )
}

const BoxSchedules = styled.div`
    background-color: #2B2D36;
    border-radius: 8px;
    width: 338px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 23px 0;

    span {
        margin: 20px 0;
        width: 302px;
        border-bottom: 2px solid #4E5A65
        ;
    }
`

const TimeBox = styled.div`
    width: 302px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #EE897F;

    p {
        border: 2px solid #EE897F;
        font-size: 16px;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 4px;
    }
`
