import styled from "styled-components"
import { getAllProducts } from "../mooks/products";
import ProductCard from "./ProductCard";
import SelectedButton from "./SelectedButton";

const Container = styled.section`
    margin: 7vh 0;
    font-family: "Kanit", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 2rem;
        font-weight: 500;
    }
`;

const Filters = styled.div`
    display: flex;
    flex-direction: row;
    gap: .5rem;

    input[type="text"]{
        padding: .9rem 1rem;
        border-radius: 5px;
        border: transparent;
        background-color: #d3d3d3 !important;
        font-weight: 300;
        min-width: 18rem;
    }

    button.search {
        background-color: transparent;
        border: transparent;
    }
`;

const Results = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2vw;
    margin-top: 5vh;
    padding: 0 7vw;
`;

export default function ProductList() {
    return (
        <Container>
            <h3>Encontra el auto perfecto para vos</h3>
            <Filters>
                <SelectedButton $isSelected={true}>0 Km</SelectedButton>
                <SelectedButton $isSelected={false}>Usados</SelectedButton>
                <input type="text" name="" id="" placeholder="Escribí marca o modelo del auto..." />
                <button className="search">
                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </Filters>
            <Results>
                {getAllProducts().map(product => <ProductCard key={product.id} info={product} />)}
            </Results>
        </Container>
    )
}