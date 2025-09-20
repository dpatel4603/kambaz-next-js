"use client";

import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    username: "dev patel",
    password: "password",
    firstName: "Dev",
    lastName: "Patel",
    dateOfBirth: "2000-01-01",
    email: "dev.patel@northeastern.edu",
    role: "FACULTY"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email address");
      return;
    }
    
    // Validate date of birth
    const dob = new Date(formData.dateOfBirth);
    const today = new Date();
    if (dob >= today) {
      setMessage("Date of birth must be in the past");
      return;
    }
    
    console.log("Profile updated:", formData);
    setMessage("Profile updated successfully!");
    setIsEditing(false);
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setMessage("");
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      
      {message && (
        <div style={{
          padding: '10px',
          margin: '10px 0',
          backgroundColor: message.includes('successfully') ? '#d4edda' : '#f8d7da',
          color: message.includes('successfully') ? '#155724' : '#721c24',
          border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px'
        }}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSave}>
        <input 
          name="username"
          defaultValue={formData.username} 
          placeholder="username" 
          className="wd-username"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <input 
          name="password"
          defaultValue={formData.password}   
          placeholder="password"
          className="wd-password"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <input 
          name="firstName"
          defaultValue={formData.firstName} 
          placeholder="First Name" 
          id="wd-firstname"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <input 
          name="lastName"
          defaultValue={formData.lastName} 
          placeholder="Last Name" 
          id="wd-lastname"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <input 
          name="dateOfBirth"
          defaultValue={formData.dateOfBirth} 
          type="date" 
          id="wd-dob"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <input 
          name="email"
          defaultValue={formData.email} 
          type="email" 
          id="wd-email"
          readOnly={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        /><br/>
        
        <select 
          name="role"
          defaultValue={formData.role} 
          id="wd-role"
          disabled={!isEditing}
          onChange={handleInputChange}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        >
          <option value="USER">User</option>       
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option> 
          <option value="STUDENT">Student</option>
        </select><br/>
        
        {!isEditing ? (
          <button 
            type="button" 
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: '#1abc9c',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '4px',
              cursor: 'pointer',
              margin: '10px 5px 10px 0'
            }}
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button 
              type="submit"
              style={{
                backgroundColor: '#1abc9c',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '10px 5px 10px 0'
              }}
            >
              Save Changes
            </button>
            <button 
              type="button"
              onClick={handleCancel}
              style={{
                backgroundColor: '#95a5a6',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '10px 0'
              }}
            >
              Cancel
            </button>
          </>
        )}
      </form>
      
      <br />
      <Link href="/Account/Signin" > Sign out </Link>
    </div>
  );
}