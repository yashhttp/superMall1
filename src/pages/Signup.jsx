import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './sign.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError("Please enter valid credential");
    }
  };

  return (
    <div className="maindiv flex flex-col items-center justify-center px-4">
      <h1 className="sign font-bold text-4xl text-center ">
        Create your account
      </h1>

      <form
        onSubmit={handleSignup}
        className="form w-full max-w-[500px] bg-white shadow-xl rounded-xl px-4 py-8 flex flex-col gap-8 border"
      >
        <h1 className="require text-[#000000DE]">* indicates required field</h1>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="* Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {email && (
            <span className="clear-button" onClick={() => setEmail('')}>
              &times;
            </span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="* Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {password && (
            <span className="clear-button" onClick={() => setPassword('')}>
              &times;
            </span>
          )}
        </div>

        {error && <p className="error">Please enter valid credential</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
