import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { SideBar } from "../Sidebar"
import './styles.css'

export const Layout = () => {
    return (
    <div className="page-container">
        <SideBar />
        <main>
            <Header />
            <Outlet />
        </main>
    </div>
    )
}