import { useForm } from 'react-hook-form';
import { v4 as createId } from 'uuid';
import { List } from './List';
import { getMonthAndDay } from '../../Utils';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addItem, deleteItem } from '../../Modules/List/listSlicer';
import { addActivity, deleteActivity } from '../../Modules/RecentActivities/recentActivitiesSlicer';
import './styles.css';


export const Classroom = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();
    const { username } = useSelector((state) => state.user);

    const onSubmit = (data) => {
        const id = nanoid();
        dispatch(addItem({ ...data, id: id, date: getMonthAndDay() }))
        dispatch(addActivity({
            id: id,
            title: data.type === 'Announcement' ? 'An announcement is shared with your students.' : 'An assignment is given to your students.',
            date: new Date().toISOString(),
            to: 'myclassroom',
        }))
        reset();
        
    };


    const handleDelete = (id) => {
       dispatch(deleteItem(id));
       dispatch(deleteActivity(id));

    }

    return (
        <div className='content-wrapper'>
            <h1>Welcome {username}!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="content"></label>
                {errors.content && <p>{errors.content.message}</p>}
                <textarea id="content" {...register('content', {
                    required:
                        'Please, fill the message area'
                })} rows="4" cols="50" placeholder="Share  with your class...">
                </textarea>
                <div className='select-and-btn-area'>
                    {errors.type && <p>{errors.type.message}</p>}
                    <select id="type" {...register('type', { required: 'Please, select an option.' })}>
                        <option value="">Choose one</option>
                        <option value="Assignment">Assignment</option>
                        <option value="Announcement">Announcement</option>
                    </select>
                    <button type="submit">Share</button>
                </div>
            </form>
            {list && <List list={list} handleDelete={handleDelete} />}
        </div>
    )
}