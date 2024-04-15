import './styles.css'
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../Modules/User/userSlice";
import { Button } from '../Button';

export const Header = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <header className='home__header'>
            <div>
                <h4>Dashboard</h4>
                <p>21 March</p>
            </div>
            <div>
                {
                    isLoggedIn ? (<Button className='home__header-btn'>+  Add Student</Button>) :
                    (<NavLink to='login' className='home__header-btn'>Log In</NavLink>)
                }
            </div>
        </header>
    )
}