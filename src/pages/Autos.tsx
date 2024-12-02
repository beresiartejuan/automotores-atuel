import { useLocation } from "wouter"
import { getAllProducts } from "../mooks/products";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../islands/Navbar";

const original_products = getAllProducts();

const Container = styled.div`
    section[role="catalogo"] {
        display: flex;
        flex-direction: row;
        justify-items: left;
        flex-wrap: wrap;
        margin: 10vh auto;
        padding: 0 5vw;
        gap: 2rem;
    }

    div[role="filters"]{
        height: 50vh;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
        background-image: url('/banner.png');

        h3 {
            font-family: "Kanit", sans-serif;
            font-weight: 500;
            font-size: 2.4rem;
            color: #e4e4e4;
            margin: 0;
        }
    }
`;

export default function Autos() {

    const [location] = useLocation();
    const used_cars = location.includes('autos-usados');
    const [search, setSearch] = useState("");

    const products = original_products.filter(
        product => product.used === used_cars && product.name.includes(search)
    );

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <div role="filters">
                    <h3>Encontrá el auto para vos</h3>
                    <SearchInput onChangeInput={(e) => { setSearch(e.target.value) }}></SearchInput>
                </div>
                <section role="catalogo">
                    {products.map(product => <ProductCard info={product}></ProductCard>)}
                    {products.length === 0 && <p>{search.normalize()} no disponible</p>}
                </section>
            </Container>
        </>
    )
}