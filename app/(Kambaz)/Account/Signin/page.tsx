"use client";

import Link from "next/link";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

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
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <FormControl 
          id="wd-username"
          name="username"
          placeholder="username" 
          className="mb-2"
          value={formData.username}
          onChange={handleInputChange}
        /><br />
        <FormControl 
          id="wd-password"
          name="password"
          placeholder="password" 
          type="password" 
          className="mb-2"
          value={formData.password}
          onChange={handleInputChange}
        /><br />
        <Link 
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Link><br />
        <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
      </form>
    </div>
  );
}