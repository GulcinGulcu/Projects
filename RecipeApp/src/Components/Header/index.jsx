import { SearchBar } from "../../modules/recipes/SearchBar";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { HamburgerMenu } from "../Navbar/HamburgerMenu";
import { useState } from "react";
import './styles.css';

export const Header = ({ setRecipes, setSearchError }) => {
    const [open, setOpen] = useState(false);
  
    return (
        <header>
            <div className="nav-container">
                <HamburgerMenu setOpen={setOpen} open={open} />
                <Navbar open={open} />
                <SearchBar setSearchError={setSearchError}  setRecipes={setRecipes} />
            </div>
            <Logo className='logo' />
        </header>
    )
}