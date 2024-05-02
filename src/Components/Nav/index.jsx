import './styles.css';

export const Nav = ({openNav, setOpenNav}) => {
    return (
        <nav class={openNav ? 'nav active' : 'nav'}>
        <ul class="nav__list">
            <li class="nav__item" onClick={() => setOpenNav(false)}><a href="#home" class="nav__link">Home</a></li>
            <li class="nav__item" onClick={() => setOpenNav(false)}><a href="#services" class="nav__link">My Services</a></li>
            <li class="nav__item" onClick={() => setOpenNav(false)}><a href="#about" class="nav__link">About me</a></li>
            <li class="nav__item" onClick={() => setOpenNav(false)}><a href="#work" class="nav__link">My Work</a></li>
            <li class="nav__item" onClick={() => setOpenNav(false)}><a href="#footer" class="nav__link">Contact</a></li>
        </ul>
    </nav>
    )
}