import './styles.css';

export const HamburgerMenu = ({ open, setOpen }) => {
    return (
        <>
            <div className="hamburger-menu-container" onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}