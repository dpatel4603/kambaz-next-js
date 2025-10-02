"use client";

import Link from "next/link";
import { useState } from "react";
import { FormControl, Button, FormSelect } from "react-bootstrap";

export default function Profile() {
  const [formData] = useState({
    username: "dev patel",
    password: "password",
    firstName: "Dev",
    lastName: "Patel",
    dateOfBirth: "2000-01-01",
    email: "patel.dev7@northeastern.edu",
    role: "FACULTY"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

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
      <h1>Profile</h1>
      
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
        <FormControl 
          name="username"
          defaultValue={formData.username} 
          placeholder="username" 
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormControl 
          name="password"
          defaultValue={formData.password}   
          placeholder="password"
          type="password"
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormControl 
          name="firstName"
          defaultValue={formData.firstName} 
          placeholder="First Name" 
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormControl 
          name="lastName"
          defaultValue={formData.lastName} 
          placeholder="Last Name" 
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormControl 
          name="dateOfBirth"
          defaultValue={formData.dateOfBirth} 
          type="date" 
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormControl 
          name="email"
          defaultValue={formData.email} 
          type="email" 
          className="mb-2"
          readOnly={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        />
        
        <FormSelect 
          name="role"
          defaultValue={formData.role} 
          className="mb-2"
          disabled={!isEditing}
          style={{backgroundColor: isEditing ? 'white' : '#f5f5f5'}}
        >
          <option value="USER">User</option>       
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option> 
          <option value="STUDENT">Student</option>
        </FormSelect>
        
        {!isEditing ? (
          <Button 
            type="button" 
            variant="primary"
            onClick={() => setIsEditing(true)}
            className="me-2"
          >
            Edit Profile
          </Button>
        ) : (
          <>
            <Button 
              type="submit"
              variant="success"
              className="me-2"
            >
              Save Changes
            </Button>
            <Button 
              type="button"
              variant="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </>
        )}
      </form>
      
      <br />
      <Link href="/Account/Signin">Sign out</Link>
    </div>
  );
}