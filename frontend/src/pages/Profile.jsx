import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    nationality: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data:', profileData);
    navigate('/home'); 
    // Insert API call or custom submission logic here
  };

  return (
    <>
      <style>
        {`
          /* Reset/normalize some default browser styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Same background gradient as your SignUp/SignIn */
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #74ABE2, #5563DE);
            width: 100%;
            height: 100vh;
            margin: 0;
          }

          /* Container: two columns side by side */
          .profile-container {
            display: flex;
            width: 100%;
            height: 100vh; /* Fill the vertical space */
          }

          /* Left 60% for form */
          .profile-left {
            width: 60%;
            display: flex;
            align-items: center;
            /* Start from the left edge with some padding */
            padding-left: 3rem;
          }

          /* Right 40% for image */
          .profile-right {
  width: 40%;
  height: 100vh; /* Sets the height to fill the viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Ensures no background color */
}

.profile-right img {
  width: 50%; /* Image fills the width of the container */
  height: 50%; /* Image fills the height of the container */
  object-fit: cover;
  border-radius: 700px /* Ensures the image covers the container without distortion */
}


          /* The form card */
          .profile-form {
            background-color: #fff;
            width: 70%; /* Fixed width for the form card */
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          }

          .profile-form h2 {
            margin-bottom: 1.5rem;
            text-align: center;
            color: #333;
            font-weight: 600;
          }

          .profile-form label {
            display: block;
            margin-bottom: 0.4rem;
            font-weight: 500;
            color: #555;
          }

          .profile-form input,
          .profile-form select {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1.25rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s ease;
          }

          .profile-form input:focus,
          .profile-form select:focus {
            border-color: #5563DE;
          }

          .profile-form button {
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

          .profile-form button:hover {
            background-color: #3940A7;
          }

          /* SVG or image styling in the right column */
          .profile-svg {
            max-width: 70%;
            height: auto;
          }
        `}
      </style>

      <div className="profile-container">
        {/* Left 60% with form */}
        <div className="profile-left">
          <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Profile Details</h2>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={profileData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other / Prefer not to say</option>
            </select>

            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={profileData.age}
              onChange={handleChange}
              required
            />

            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={profileData.height}
              onChange={handleChange}
              required
            />

            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={profileData.weight}
              onChange={handleChange}
              required
            />

            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={profileData.nationality}
              onChange={handleChange}
              required
            />

            <button type="submit">Save Profile</button>
          </form>
        </div>

        {/* Right 40% with your SVG or image */}
        <div className="profile-right">
          {/* Replace with your actual local or remote image path */}
          <img src="/assets/image.jpg" alt="Profile" />

        </div>
      </div>
    </>
  );
};

export default Profile;
