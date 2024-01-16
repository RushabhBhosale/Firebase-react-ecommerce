import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import '../styles/Login.css'
import toast from 'react-hot-toast';
import { auth, db } from '../firebase';

const SignUp = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);

      const userDocRef = doc(db, 'users', credentials.user.uid);

      await setDoc(userDocRef, {
        Fullname: fullname,
        Email: email,
        Password: password
      });

      toast.success('Account created');
      setEmail('');
      setErrorMsg('');
      setFullname('');
      setSuccessMsg('Account created. You will be automatically redirected to the Login page.');

      setFullname(fullname)

      navigate('/home', { state: {fullname}});

    } catch (error) {
      setErrorMsg(error.message);
      toast.error(errorMsg);
    }
  };

  return (
    <div className='container sign-up w-25'>
      <br />
      <br />
      <h1>Sign Up</h1>
      <hr />
      {successMsg && <>
        <div className="success-msg">{successMsg}</div>
        <br />
      </>}
      <form autoComplete='off' className='form-group' onSubmit={handleSignup}>
        <label>Full Name</label>
        <input onChange={(e) => setFullname(e.target.value)} placeholder='Enter Your Fullname' value={fullname} type="text" className='form-control' required />
        <br />
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' value={email} type="email" className='form-control' required />
        <br />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' value={password} type="password" className='form-control' required />
        <br />
        <div className="btn-box">
          <span>Already have an account Login <Link className='link' to="/">Here</Link></span>
          <button className='btn mt-4 login-btn w-100 btn-light btn-md'>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
