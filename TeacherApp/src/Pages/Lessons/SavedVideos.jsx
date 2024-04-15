import { useOutletContext } from "react-router-dom";

export const SavedVideos = () => {
    const { videos, savedVideoId } = useOutletContext();
    const savedVideos = videos.filter(video => savedVideoId.includes(video.id.videoId));

    return (
        <>
            {savedVideos && <section className="lessons-video-wrapper">
                {
                    savedVideos.map(video => {
                        return (
                            <div className="video-wrapper" key={video.id.videoId}>
                                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">
                                    <img className="video-img" src={video.snippet.thumbnails.medium.url} alt='Educational Video' />
                                    <h4>{video.snippet.title}</h4>
                                    <button></button>
                                </a>
                            </div>
                        )
                    })
                }
            </section>}
        </>
    )
}