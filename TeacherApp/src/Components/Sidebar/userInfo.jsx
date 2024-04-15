import teacherPhoto from '../../Assets/user2.jpg';

export const UserInfo = ({ username }) => {
    return (
        <div className='user-info'>
            <div className='user-img-wrapper'>
                <img src={teacherPhoto} alt='user' className='user-img' />
            </div>
            <p>{username}</p>
            <hr />
        </div>
    )
}