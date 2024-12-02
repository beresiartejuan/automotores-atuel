import styled from "styled-components"
import SocialMedia from "./SocialMedia";
import { ComponentProps } from "react";

const Container = styled.section`
    padding: 0;
    font-family: "Kanit", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 10vh;

    h3 {
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
        text-decoration: underline;
    }

    iframe {
        width: 70vw;
        height: 50vh;
        border: none;
        box-shadow: #000 0px 0px 5px;
    }
`;

export default function Location(props: ComponentProps<typeof Container>) {
    return (
        <Container {...props}>
            <h3>Nos puedes encontrar aquí</h3>
            <SocialMedia></SocialMedia>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.276580700204!2d-67.69149781832606!3d-34.974736276931196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967817502d8c05c3%3A0x8416ae967c34918f!2sAutomotores%20Atuel!5e0!3m2!1ses-419!2sar!4v1728688282094!5m2!1ses-419!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    )
}