import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (
      name.trim() !== '' &&
      email === 'sample@gmail.com' &&
      password === '123456'
    ) {
      // On successful match, redirect to '/profile'
      navigate('/profile');
    } else {
      alert('Invalid credentials, Try Again !');
    }
  };

  return (
    <>
      <style>
        {`
          /* Reset/normalize */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #74ABE2, #5563DE);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .signup-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .signup-form {
            background-color: #fff;
            width: 350px;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          }
          .signup-form h2 {
            margin-bottom: 1.5rem;
            text-align: center;
            color: #333;
            font-weight: 600;
          }
          .signup-form label {
            display: block;
            margin-bottom: 0.4rem;
            font-weight: 500;
            color: #555;
          }
          .signup-form input {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1.25rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s ease;
          }
          .signup-form input:focus {
            border-color: #5563DE;
          }
          .signup-form button {
            width: 100%;
            padding: 0.75rem;
            background-color: #5563DE;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            font-weight: 600;
            font-size: 1rem;
            transition: background-color 0.3s ease;
          }
          .signup-form button:hover {
            background-color: #3940A7;
          }
          .login-link {
            text-align: center;
            margin-top: 1rem;
          }
          .login-link a {
            color: #5563DE;
            text-decoration: none;
          }
          .login-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Sign Up</button>

          <p className="login-link">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
