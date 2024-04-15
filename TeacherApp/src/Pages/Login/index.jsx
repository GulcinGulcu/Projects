import { useLocation, useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { addActivity } from "../../Modules/RecentActivities/recentActivitiesSlicer";
import { login, updateUser } from "../../Modules/User/userSlice";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import './styles.css';
import { InputAdornment } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi";
import { Button } from "../../Components/Button";




export const Login = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path || '/';
  const message = location.state?.message;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    const username = data.username;
    dispatch(updateUser(username));
    dispatch(login());
    dispatch(addActivity({
      id: nanoid(),
      title: 'You logged in.',
      date: new Date().toISOString()
    }));
    navigate(path, { replace: true });
  }


  return (
    <form className='login-form' onSubmit={handleSubmit(onFormSubmit)}>
      {message}
      <div className='welcome-section'>
        <h3>Welcome back!</h3>
        <p>Please, enter your details.</p>
      </div>
      <TextField
        type="text"
        id="username"
        label="Username"
        variant="standard"
        InputProps={{ endAdornment: <InputAdornment position="end"><FaUser /></InputAdornment> }}
        {...register('username', { required: 'Please, enter your username' })} />
      {errors.username && (
        <span className='error-message'>{errors.username.message}</span>
      )}
      <TextField
        type="password"
        id="password"
        label="Password"
        variant="standard"
        InputProps={{ endAdornment: <InputAdornment position="end"><PiLockKeyFill /></InputAdornment> }}
        {...register('password', { required: 'Please, enter your password' })} />
      {errors.password && (
        <span className='error-message'>{errors.password.message}</span>
      )}
      <Button className='form-btn--submit'>Log In</Button>
      <p>Don't have an account? <Link>Sign up</Link></p>
    </form>
  )
}