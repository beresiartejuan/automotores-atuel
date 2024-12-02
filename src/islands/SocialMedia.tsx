import { ComponentProps } from "react";
import styled from "styled-components";
import InstaIcon from "../assets/InstaIcon";
import WhatsappIcon from "../assets/WhatsappIcon";

const Content = styled.section`
ul {
    max-width: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 60vw;
    width: fit-content;
    margin: 0 auto;
    gap: 3rem;
    justify-content: center;
}

ul li {
    text-decoration: none;
    list-style: none;
    max-width: fit-content;
}

ul li a {
    text-decoration: none;
    color: #1b1b1b;
    display: flex;
    flex-direction: row;
    gap: .5rem;
    text-align: center;
    align-items: center;
}

ul li a span {
    font-size: 1.5rem;
}

ul li a svg {
    width: 2rem;
    height: 2rem;
}

@media screen and (max-width: 700px) {
    ul li a span {
        font-size: 1.2rem;
    }
}
`;

export default function SocialMedia(props: ComponentProps<typeof Content>) {
    return (
        <Content {...props}>
            <ul>
                <li>
                    <a href="https://instagram.com/automoviles_atuel">
                        <InstaIcon></InstaIcon>
                        <span>@automoviles_atuel</span>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/2625448697">
                        <WhatsappIcon></WhatsappIcon>
                        <span>Whatsapp: +54 2625 448697</span>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/2625449910">
                        <WhatsappIcon></WhatsappIcon>
                        <span>Whatsapp: +54 2625 449910</span>
                    </a>
                </li>
            </ul>
        </Content>
    )
}