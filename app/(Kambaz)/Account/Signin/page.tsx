"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "dev patel",
    password: "password123"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate credentials and redirect
    console.log("Signin attempt:", formData);
    // For now, we'll just log the data
  };

  return (
    <div id="wd-signin-screen">
      <h3 style={{fontWeight: 'bold', fontSize: '1.5em'}}>Sign in</h3>
      <form onSubmit={handleSubmit}>
        <input 
          name="username"
          placeholder="username" 
          className="wd-username" 
          value={formData.username}
          onChange={handleInputChange}
        /> <br />
        <input 
          name="password"
          placeholder="password" 
          type="password" 
          className="wd-password" 
          value={formData.password}
          onChange={handleInputChange}
        /> <br />
        <button type="submit" className="wd-signin-btn">Sign in</button> <br />
      </form>
      <Link href="/Account/Signup" id="wd-signup-link"> Sign up </Link>
    </div>
  );
}