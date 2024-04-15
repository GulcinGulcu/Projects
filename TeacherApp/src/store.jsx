import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Modules/User/userSlice';
import listReducer from './Modules/List/listSlicer';
import studentReducer from './Modules/Student/studentSlicer';
import recentActivitiesReducer from './Modules/RecentActivities/recentActivitiesSlicer';


export default configureStore({
    reducer: {
        user: userReducer,
        list: listReducer,
        student: studentReducer,
        recentActivities: recentActivitiesReducer,
    }
})