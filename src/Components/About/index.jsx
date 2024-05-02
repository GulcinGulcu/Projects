import myImg2 from '../../Assests/20170625_194840.jpg';
import './styles.css';

export const About = () => {
    return (
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Front-End Developer based in Sweden</p>
            <div class="about-me__body">
                <p>During my studies in Frontend Development program at Code2 Career, I gained hands-on experience in HTML, CSS, JavaScript, TypeScript and React which are essential skills for a frontend developer. I completed several projects that involved building responsive and user-friendly websites, showcasing my ability to translate design concepts into functional code.</p>
                <p>Transitioned from education area to web development as a former teacher, I bring exceptional problem-solving skills and a strong grasp of educational tools and collaborative project management.</p>
            </div>
            <img src={myImg2} alt="User Image" class="about-me__img" />
        </section>
    )
}