import { useOutletContext } from "react-router-dom";
import { RxBookmark } from "react-icons/rx";
import { FaBookmark } from "react-icons/fa";
import { Button } from "../../Components/Button";



export const Videos = () => {
    const { videos, setSavedVideoId, setNextPage, savedVideoId } = useOutletContext();
    return (
        <>
            {videos && <section className="lessons-video-wrapper">
                {
                    videos.map(video => {
                        return (
                            <div className="video-wrapper" key={video.id.videoId} >
                                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">
                                    <img className="video-img" src={video.snippet.thumbnails.medium.url} alt='Educational Video' />
                                    <h4>{video.snippet.title}</h4>
                                </a>
                                <Button className='lessons__save-btn' onClick={() => setSavedVideoId(prev => [...prev, video.id.videoId])}>{
                                    savedVideoId.includes(video.id.videoId) ? (<FaBookmark />) : (<RxBookmark />) 
                                }</Button>
                            </div>
                        )
                    })
                }
                <button className='videos-nav' onClick={() => setNextPage(prev => prev + 1)}>Show More</button>
            </section>}
        </>
    )
}