import './styles.css';

export const MyServices = () => {
    return (
        <section className="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div className="services">
                <div class="service">
                    <h3>Web Development</h3>
                    <p>With a solid background in front-end development in React, I can create responsive websites with high-quality code applying UI/UX aspects to make them functional, accessible and aesthetically engaging for users.</p>
                </div>
                <div class="service">
                    <h3>State Management</h3>
                    <p>Using Redux or Context API which provides maintaining a predictable state container for JavaScript apps, I can create centralized state management solutions throughout the project and increase the performance of the application.</p>
                </div>
                <div class="service">
                    <h3>External Libraries</h3>
                    <p>Using third party libraries like MUI, TailwindCSS or React Hook Form, I can improve code performance. I take advantage of the built-in performance optimization features of the library or framework, customizing them if necessary.</p>
                </div>
            </div>
            <a href="#work" class="btn">My Work</a>
        </section>
        
    )
}