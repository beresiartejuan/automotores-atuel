import CarIcon from "../assets/CarIcon";
import BarsIcon from "../assets/BarsIcon";
import styles from "../styles/Navbar.module.scss";
import { useLocation } from "wouter";
import { useEffect, type ComponentProps } from "react";
import { useMediaQuery, useToggle } from "@uidotdev/usehooks";

export default function Navbar(props: ComponentProps<'nav'>) {

    const [isHidden, setHidden] = useToggle(true);
    const isPhone = useMediaQuery('(max-width: 1000px)');
    const [, setLocation] = useLocation();

    useEffect(() => {
        if (!isPhone) setHidden(false);
        if (isPhone) setHidden(true);
    }, [isPhone, setHidden]);

    return (
        <nav {...props} className={`${styles.navbar} ${props.className ?? ''}`}>
            <div>
                <CarIcon onClick={() => setLocation('/')}></CarIcon>
                <button onClick={() => {
                    if (isPhone) setHidden();
                }}><BarsIcon></BarsIcon></button>
            </div>
            <div style={{
                ...(isHidden ? { display: 'none' } : {})
            }}>
                <a href="/autos-nuevos">0 km</a>
                <a href="/autos-usados">Usados</a>
                <a href="#location">¿Donde estamos?</a>
            </div>
        </nav>
    )
}