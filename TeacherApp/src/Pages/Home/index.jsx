import { Link } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';
import { textData } from '../../textData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import TeacherImage from '../../Assets/teacherphoto.png';
import { Report } from './Report';
import { RecentActivities } from './RecentActivities';





export const Home = () => {
    const [index, setIndex] = useState(0);
    const user = useSelector((state) => state.user)


    const handleNextText = () => {
        if (index < 2) {
            setIndex(prev => prev + 1);
        } else {
            setIndex(0);
        }
    }

    const handlePrevText = () => {
        if (index <= 2 && index > 0) {
            setIndex(prev => prev - 1);
        } else {
            setIndex(2);
        }
    }

    return (
        <div className={user.isLoggedIn ? 'home-page-wrapper login' : 'home-page-wrapper logout'}>
            {
                !user.isLoggedIn ?
                    (<div className='home-page-wrapper--inside'>
                        <button className='home-page__btns' onClick={handlePrevText}><IoIosArrowBack /></button>
                        <div className='home-page__text-container'>
                            <div className='home-page__enroll-btn'><Link to='login'>Enroll Now</Link></div>
                            {
                                textData[index].map(sentence => (
                                    <>
                                        <p className='main-text'>{sentence.mainText}</p>
                                        <p className='text'>{sentence.text}</p>
                                    </>))
                            }
                        </div>
                        <button className='home-page__btns' onClick={handleNextText}><IoIosArrowForward /></button>
                    </div>)
                    : (
                        <>
                            <section className='welcome-board'>
                                <img src={TeacherImage}></img>
                                <div>
                                    <h2><span>Welcome, </span> {user.username}! </h2>
                                    <p>Have a nice day at work!</p>
                                </div>
                            </section>
                            <Report />
                            <RecentActivities />
                        
                        </>
                    )
            }

        </div>
    )
}