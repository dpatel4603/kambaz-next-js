"use client";

import Link from "next/link";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "dev patel",
    password: "newpass123",
    verifyPassword: "newpass123"
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.password !== formData.verifyPassword) {
      newErrors.verifyPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Signup attempt:", formData);
      // Here you would typically create the account and redirect
    }
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <FormControl 
          id="wd-username"
          name="username"
          placeholder="username" 
          className="mb-2"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <div style={{color: 'red', fontSize: '12px'}}>{errors.username}</div>}
        
        <FormControl 
          id="wd-password"
          name="password"
          placeholder="password" 
          type="password" 
          className="mb-2"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div style={{color: 'red', fontSize: '12px'}}>{errors.password}</div>}
        
        <FormControl 
          id="wd-verify-password"
          name="verifyPassword"
          placeholder="verify password"
          type="password" 
          className="mb-2"
          value={formData.verifyPassword}
          onChange={handleInputChange}
        />
        {errors.verifyPassword && <div style={{color: 'red', fontSize: '12px'}}>{errors.verifyPassword}</div>}
        
        <Button type="submit" variant="primary" className="w-100 mb-2">Sign up</Button>
      </form>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}