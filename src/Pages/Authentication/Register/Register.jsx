import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
  const {createUser} = useAuth()
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {

    console.log(data);
    createUser(data.email , data.password)
    .then(res=>{
      console.log(res.user);
    })
    .catch(e =>{
      console.error(e);
    })
  }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
        <fieldset className="fieldset">
            <h1 className='text-4xl font-extrabold'>Create An Account</h1>
            <h3 className='text-sm'>Register with TrackFast</h3>
          <label className="label text-black font-medium">Name</label>
          <input type="name" className="input" placeholder="Name" {...register("name", { required: true })} />
          <label className="label text-black font-medium">Email</label>
          <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
          <label className="label text-black font-medium">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password", { required: true })} />
           {
            errors.password?.type==='required' && <p className='text-red-400'> Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-400'> Password must be in 6 characters</p>
          }
          <button className="btn bg-[#CAEB66] mt-4">Register</button>
        </fieldset>
      <p><small className='text-[#71717A]'>Already have an account? </small><Link to="/login" className='text-[#CAEB66] '>Login</Link></p>
      </div>
      <SocialLogin></SocialLogin>
            
        </form>
    );
};

export default Register;