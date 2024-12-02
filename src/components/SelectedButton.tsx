import { ComponentProps } from "react";
import styled, { css } from "styled-components";

const Button = styled.button<{ $isSelected?: boolean }>`
    padding: .8rem 2rem;
    background-color: #c9c5c5;
    color: #353535;
    font-size: 1.1rem;
    border-radius: 5px;
    border: transparent 0px;
    cursor: pointer;

    ${props => props.$isSelected && css`
        background-color: #353535;
        color: #e4e0e0;
    `}
`;

export default function SelectedButton(props: ComponentProps<typeof Button>) {
    return (<Button {...props}></Button>)
}