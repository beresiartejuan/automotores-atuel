import styled from "styled-components";
import { ComponentProps } from "react";

const Input = styled.div`
    display: flex;
    flex-direction: row;
    gap: .5rem;

    input {
        padding: .9rem 1rem;
        border-radius: 5px;
        border: transparent;
        background-color: #d3d3d3 !important;
        font-weight: 300;
        min-width: 17rem;

        @media screen and (max-width: 850px) {
            min-width: 10rem;
        }

        @media screen and (max-width: 400px) {
            max-width: 7rem;
        }
    }

    button {
        background-color: transparent;
        border: transparent;
    }

    
`;

interface SearchInputProps extends ComponentProps<typeof Input> {
    onChangeInput: React.ChangeEventHandler<HTMLInputElement>
}

export default function SearchInput(props: SearchInputProps) {
    return (
        <Input {...props}>
            <input onChange={props.onChangeInput} type="text" name="" id="" placeholder="Escribí marca o modelo del auto..." />
            <button>
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </Input>
    )
}