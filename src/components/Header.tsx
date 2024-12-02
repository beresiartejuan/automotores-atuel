import style from "../styles/components/Header.module.scss";
import styled from "styled-components";

const Container = styled.header`
    background: url('/banner.png');
    background-position: center;
    background-size: cover;
    min-height: 75vh;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 15vw;
    gap: 1rem;

    @media screen and (max-width: 750px) {
        padding: 0 5vw;
    }
`;

const Text = styled.span`
    font-family: "Kanit", sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    color: #e4e4e4;
    text-shadow: 2px 2px 2px #ffffff8d;

    @media screen and (max-width: 750px) {
        font-size: 2rem;
    }
`;

const Button = styled.button`
    font-family: "Kanit", sans-serif;
    font-size: 1.2rem;
    padding: .8rem 2rem;
    color: #fff;
    background-color: rgba(0,0,0,.2);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    border: 1px #fff solid;
    border-radius: 12px;

    @media screen and (max-width: 750px) {
        font-size: 1rem;
    }

    &:hover {
        background-color: rgba(255,255,255,.2);
    }

    &:focus {
        outline: none;  // Elimina el borde de enfoque
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);  // Añade un borde suave al enfocar
    }

    &:active {
        transform: scale(0.98);  // Simula una pequeña presión al hacer clic
    }
`;



export default function Header() {
    return (
        <Container>
            <Text>Grandes oportunidades, cerca de casa.</Text>
            <Button>Visitanos</Button>
        </Container>

    )
}