import { ComponentProps, useState } from "react";
import styles from "../styles/Products.module.scss";
import { getAllProducts } from "../mooks/products";
import ProductCard from "../components/ProductCard";
import SelectedButton from "../components/SelectedButton";
import SearchInput from "../components/SearchInput";
import { useToggle } from "@uidotdev/usehooks";
import { useSearch } from "wouter";

const original_products = getAllProducts();

export default function Products(props: ComponentProps<'section'>) {

    const filters = useSearch();
    const [usedCars, toogleUsedCars] = useToggle(filters.includes('usados'));
    const [nameFilter, setNameFilter] = useState("");
    const products = original_products.filter(product => usedCars == product.used && product.name.includes(nameFilter));

    return (
        <section {...props} className={styles.products_container}>
            <h3>Encontra el auto perfecto para vos</h3>
            <div role="filter">
                <div>
                    <SelectedButton $isSelected={!usedCars} onClick={() => toogleUsedCars(false)}>0 Km</SelectedButton>
                    <SelectedButton $isSelected={usedCars} onClick={() => toogleUsedCars(true)}>Usados</SelectedButton>
                </div>
                <SearchInput onChangeInput={(e) => setNameFilter(e.target.value)}></SearchInput>
            </div>
            <div>
                {products.length > 0 && products.slice(0, 6).map(product => (<ProductCard key={product.id} info={product} />))}
                {products.length === 0 && <p>No disponible</p>}
            </div>
        </section>
    )
}