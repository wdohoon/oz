import styled from "styled-components";
import {useState} from "react";

const FlipImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
`

const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
`

const BackImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export default function FlipCard({front, back}) {
    const [flipped, setFlipped] = useState(false)
    return (
        <div>
            <FlipImageContainer flipped={flipped ? 'flip' : ''}>
                <FrontImage src={front} />
                <BackImage src={back} />
            </FlipImageContainer>
            <button
                onClick={() => setFlipped(prev => !prev)}
            >
                뒤집기
            </button>
        </div>
    )
}