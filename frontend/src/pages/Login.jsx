import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }

      // Store token in localStorage
      localStorage.setItem('token', data.token);

      // Redirect to Profile page
      navigate('/home');
    } catch (error) {
      setError(error.message);
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
          .error-message {
            color: red;
            text-align: center;
            margin-bottom: 1rem;
          }
        `}
      </style>

      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          {error && <p className="error-message">{error}</p>}

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

export default Login;
