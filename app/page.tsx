"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="wd-hero-section">
        <h1>Welcome to Kambaz</h1>
        <h2>By Dev Patel</h2>
        <p>A comprehensive web development course management system</p>
        
        <div className="wd-github-link">
          <Link 
            href="https://github.com/dpatel4603/kambaz-next-js" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wd-github-button"
          >
            <Image 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
              width={20} 
              height={20} 
              alt="GitHub" 
            />
            View on GitHub
          </Link>
        </div>
        
        <div className="wd-navigation-links">
          <Link href="/Account/Signin" className="wd-signin-link">
            Sign In
          </Link>
          <Link href="/Account/Signup" className="wd-signup-link">
            Sign Up
          </Link>
        </div>
      </div>
      
      <div className="wd-features-section">
        <h3>Features</h3>
        <div className="wd-features-grid">
          <div className="wd-feature">
            <h4>Course Management</h4>
            <p>Organize and manage your web development courses</p>
          </div>
          <div className="wd-feature">
            <h4>Assignment Tracking</h4>
            <p>Keep track of assignments, quizzes, and projects</p>
          </div>
          <div className="wd-feature">
            <h4>Grade Management</h4>
            <p>Monitor your academic progress</p>
          </div>
          <div className="wd-feature">
            <h4>Interactive Labs</h4>
            <p>Hands-on learning with practical examples</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        #wd-home {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .wd-hero-section {
          text-align: center;
          padding: 4rem 0;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .wd-hero-section h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        
        .wd-hero-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #f0f0f0;
        }
        
        .wd-hero-section p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .wd-github-link {
          margin: 2rem 0;
        }
        
        .wd-github-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #24292e;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        
        .wd-github-button:hover {
          background: #1a1e22;
        }
        
        .wd-navigation-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }
        
        .wd-signin-link, .wd-signup-link {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .wd-signin-link {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .wd-signin-link:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .wd-signup-link {
          background: #1abc9c;
          color: white;
          border: 2px solid #1abc9c;
        }
        
        .wd-signup-link:hover {
          background: #16a085;
          border-color: #16a085;
        }
        
        .wd-features-section {
          max-width: 1200px;
          margin: 4rem auto 0;
          padding: 2rem;
        }
        
        .wd-features-section h3 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
        
        .wd-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .wd-feature {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .wd-feature h4 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1abc9c;
        }
        
        .wd-feature p {
          opacity: 0.9;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .wd-hero-section h1 {
            font-size: 2.5rem;
          }
          
          .wd-hero-section h2 {
            font-size: 1.5rem;
          }
          
          .wd-navigation-links {
            flex-direction: column;
            align-items: center;
          }
          
          .wd-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
