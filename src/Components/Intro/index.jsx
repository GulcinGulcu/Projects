import myImg from '../../Assests/20170619_194152.jpg';
import './styles.css';

export const Intro = () => {
    return (
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Gulcin Gulcu</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={myImg} alt="user" className='section__img--intro' />
        </section>
    )
}