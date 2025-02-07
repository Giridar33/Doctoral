import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
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
    if (
        formData.email === 'sample@gmail.com' &&
        formData.password === '123456'
      ) {
        // Redirect to '/profile' if they match
        navigate('/profile');
      } else {
        alert('Invalid email or password.');
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
          .signin-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .signin-form {
            background-color: #fff;
            width: 350px;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          }
          .signin-form h2 {
            margin-bottom: 1.5rem;
            text-align: center;
            color: #333;
            font-weight: 600;
          }
          .signin-form label {
            display: block;
            margin-bottom: 0.4rem;
            font-weight: 500;
            color: #555;
          }
          .signin-form input {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1.25rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s ease;
          }
          .signin-form input:focus {
            border-color: #5563DE;
          }
          .signin-form button {
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
          .signin-form button:hover {
            background-color: #3940A7;
          }
          .signup-link {
            text-align: center;
            margin-top: 1rem;
          }
          .signup-link a {
            color: #5563DE;
            text-decoration: none;
          }
          .signup-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

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

          <button type="submit">Sign In</button>

          <p className="signup-link">
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
