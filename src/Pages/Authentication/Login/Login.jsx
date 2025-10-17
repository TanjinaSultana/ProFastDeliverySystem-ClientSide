import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const { register, 
    handleSubmit ,
    formState: { errors },
} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label text-black font-medium">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <label className="label text-black font-medium">Password</label>
          <input
            type="password"
            className="input"
            {...register("password", { required: true, minLength: 6, })}
            placeholder="Password"
          />
          {
            errors.password?.type==='required' && <p className='text-red-400'> Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-400'> Password must be in 6 characters</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn bg-[#CAEB66] mt-4">
            Login
          </button>
          <p><small className='text-[#71717A] text-xs'>New here? </small><Link to="/register" className='text-[#CAEB66] '>Register</Link></p>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
