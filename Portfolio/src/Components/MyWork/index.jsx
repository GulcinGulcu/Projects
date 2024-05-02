import movieApp from '../../Assests/movie_finder.jpg';
import memoryGame from '../../Assests/memory_game.jpg';
import tailwind from '../../Assests/tailwind_css.jpg';
import recipeApp from '../../Assests/recipe_app.jpg';
import teacherApp from '../../Assests/teacher_app.jpg';
import ticTacToe from '../../Assests/Tic_tac_toe.jpg';
import quizApp from '../../Assests/Quiz_app.jpg';
import weatherApp from '../../Assests/weather_app.jpg';
import './styles.css';

export const MyWork = () => {
    return (
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            <div className="portfolio">
                <a href="#" class="portfolio__item">
                    <img src={recipeApp} alt="tailwind css" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={ticTacToe} alt="weather app" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={teacherApp} alt="teacher app" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={memoryGame} alt="memory game" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={movieApp} alt="tic-tac-toe game" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={tailwind} alt="recipe app" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={quizApp} alt="quiz app" class="portfolio__img" />
                </a>
                <a href="#" class="portfolio__item">
                    <img src={weatherApp} alt="movie app" class="portfolio__img" />
                </a>
            </div>
        </section>
    )
}