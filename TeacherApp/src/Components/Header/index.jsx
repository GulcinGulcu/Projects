import './styles.css'
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../Modules/User/userSlice";
import { Button } from '../Button';
import { formatISO } from "date-fns";
import {Switch, FormControlLabel} from '@mui/material';
import { toggleDarkMode } from '../../Modules/DarkMode/darkModeSlicer';

export const Header = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const date = formatISO(new Date(), { representation: 'date' });
    const { isDarkMode } = useSelector(state => state.darkMode);


    return (
        <header className='home__header'>
            <div className='home__date-area'>
                <h4>Dashboard</h4>
                <p>{date}</p>
            </div>
            <div className='home__header-btns'>
                <FormControlLabel label='Dark mode' control={<Switch checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} />}/>
                {
                    isLoggedIn ? (<Button className='home__header-btn'>+  Add Student</Button>) :
                    (<NavLink to='login' className='home__header-btn'>Log In</NavLink>)
                }
            </div>
        </header>
    )
}