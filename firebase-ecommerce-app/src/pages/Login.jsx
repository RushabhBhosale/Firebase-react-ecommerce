import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import toast from 'react-hot-toast';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login Successfull');
      setEmail('');
      setErrorMsg('');
      setPassword('');
      setSuccessMsg('You will be redirected to Home');
      setTimeout(() => {
        navigate('/home', { state: {password}} );
      }, 2000);

      const user = auth.currentUser;
      console.log(user, 'from login');

    } catch (error) {
      setErrorMsg(error.message);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className='container p-4 login w-25'>
      <br />
      <br />
      <h1>Login</h1>
      <hr />
      {successMsg && <>
        <div className="success-msg">{successMsg}</div>
        <br />
      </>}
      <form className='form-group' autoComplete='off' onSubmit={handleLogin}>
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' value={email} type="email" className='form-control' />
        <br />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' type="password" className='form-control' />
        <br />
        <div className="btn-box">
          <span>Dont have an account Sign Up <Link className='link' to="/signup">Here</Link></span>
          <button className="btn mt-4 login-btn w-100 btn-light btn-md">Login</button>
        </div>
      </form>
      {errorMsg && <>
        <div className="error-msg">{errorMsg}</div>
        <br />
      </>}
    </div>
  )
}

export default Login