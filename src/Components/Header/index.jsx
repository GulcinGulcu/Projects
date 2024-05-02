import { Button } from "../Button";
import { Nav } from "../Nav";
import logo from "../../Assests/code_logo.png";
import { useState } from "react";
import './styles.css';

export const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    return (
        <header>
            <img src={logo} alt="logo" className="logo"/>
            <Button className={openNav ? 'nav-toggle active' : 'nav-toggle'} aria-label="toggle navigation" handleOnClick={() => setOpenNav(prev => !prev)}>
                <span class={openNav ? 'hamburger active' : 'hamburger'}></span>
            </Button>
            <Nav openNav={openNav} setOpenNav={setOpenNav} />
        </header>
    )
}