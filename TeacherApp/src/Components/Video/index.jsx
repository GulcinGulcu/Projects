export const Video = () => {
    return (
        <div className={isDarkMode ? 'video-wrapper dark' : 'video-wrapper'} key={video.id.videoId} >
                                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">
                                    <img className="video-img" src={video.snippet.thumbnails.medium.url} alt='Educational Video' />
                                    <h4 className="video-title">{video.snippet.title}</h4>
                                </a>
                                <Button className={isDarkMode ? 'lessons__save-btn dark' : 'lessons__save-btn'} onClick={() => setSavedVideoId(prev => [...prev, video.id.videoId])}>{
                                    savedVideoId.includes(video.id.videoId) ? (<FaBookmark />) : (<RxBookmark />) 
                                }</Button>
                            </div>
    )
}