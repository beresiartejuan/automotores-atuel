import Header from "../components/Header";
import Navbar from "../islands/Navbar";
import Location from "../islands/Location";
import Products from "../islands/Products";

export default function Index() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Products id="autos"></Products>
            <Location id="location"></Location>

        </>
    )
}