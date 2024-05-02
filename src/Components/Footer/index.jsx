import { FaCodepen } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './styles.css';



export const Footer = () => {
    return (
        <footer id="footer">
            <a href="mailto:gulcin_375@hotmail.com" class="footer__link">gulcin_375@hotmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="https://codepen.io/GulcinGulcu"className="social-list__link"><FaCodepen /></a>
                </li>
                <li className="social-list__item">
                    <a href="https://www.linkedin.com/in/gulcin-gulcu-07a668178/"className="social-list__link"><FaLinkedin /></a>
                </li>
                <li className="social-list__item">
                    <a href="https://github.com/GulcinGulcu"className="social-list__link"><FaGithub /></a>
                </li>
                <li className="social-list__item">
                    <a href="https://www.instagram.com/gulcnayd/"className="social-list__link"><FaInstagram /></a>
                </li>
            </ul>
        </footer>
    )
}