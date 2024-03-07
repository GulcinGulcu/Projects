import { Link } from 'react-router-dom';
import { GiHotMeal } from "react-icons/gi";
import './styles.css';

export const ConfirmMessage = ({ title }) => {
    return (
        <div className='confirm-message-container'>
            <GiHotMeal className='form-logo' />
            <h2>{title}</h2>
            <Link className='return-home-btn' to='/'>Home Page</Link>
        </div>
    )
}