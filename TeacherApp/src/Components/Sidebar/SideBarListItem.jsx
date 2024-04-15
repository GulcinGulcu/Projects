import { NavLink } from "react-router-dom"

export const SideBarListItem = ({ className, title, to, item, setActive, active, icon }) => {
    return (
        <li>
           <NavLink className={active === item.id ? `${className} active` : className} onClick={() => setActive(item.id)} to={to}><span>{icon}</span><span>{title}</span></NavLink>
        </li>
    )
}