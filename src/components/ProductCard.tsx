import styled from "styled-components";
import { ComponentProps } from "react";

export type Product = {
    id: string;
    name: string;
    model: string;
    image: string;
};

const StyledCard = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: start;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 20rem;
    margin: 0 auto;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);

        .info button {
            background-color: #0056b3;
        }
    }

    img {
        width: 17rem;
        height: 17rem;
        object-fit: cover;
        border-bottom: 2px solid #e0e0e0;
    }

    .info {

        width: 100%;

        h4 {
            padding-left: 5%;
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.5rem;
        }

        span {
            padding-left: 5%;
            font-size: 1rem;
            color: #888;
            display: block;
            margin-bottom: 1rem;
        }

        button {
            background-color: #222425;
            color: #fff;
            width: 100%;
            border: none;
            border-radius: 5px;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
    }
`;

export default function ProductCard({ info, ...props }: ComponentProps<'div'> & { info: Product }) {
    return (
        <StyledCard {...props}>
            <img src={info.image} alt={`${info.name} modelo ${info.model}`} />
            <div className="info">
                <h4>{info.name}</h4>
                <span>{info.model}</span>
                <button>Ver detalles</button>
            </div>
        </StyledCard>
    );
};
