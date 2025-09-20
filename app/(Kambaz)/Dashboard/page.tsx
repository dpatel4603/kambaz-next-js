"use client";

import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // Course data
  const courses = [
    { id: "1234", title: "CS1234 React JS", description: "Full Stack software developer", image: "/images/reactjs.png", alt: "React.js Course" },
    { id: "5678", title: "CS5678 Node.js", description: "Backend Development with Node.js", image: "/images/nodejs.jpg", alt: "Node.js Course" },
    { id: "9012", title: "CS9012 Python Programming", description: "Introduction to Python and Data Science", image: "/images/python.png", alt: "Python Programming Course" },
    { id: "3456", title: "CS3456 JavaScript Fundamentals", description: "Modern JavaScript ES6+ and Web APIs", image: "/images/javascript.png", alt: "JavaScript Fundamentals Course" },
    { id: "7890", title: "CS7890 Database Systems", description: "SQL, NoSQL, and Database Design", image: "/images/database.jpg", alt: "Database Systems Course" },
    { id: "2468", title: "CS2468 Mobile Development", description: "React Native and Flutter Development", image: "/images/mobile.jpg", alt: "Mobile Development Course" },
    { id: "1357", title: "CS1357 Artificial Intelligence", description: "Machine Learning and Neural Networks", image: "/images/ai.jpg", alt: "Artificial Intelligence Course" },
    { id: "9753", title: "CS9753 Cloud Computing", description: "AWS, Azure, and DevOps Practices", image: "/images/cloud.jpg", alt: "Cloud Computing Course" }
  ];

  return (
    <div id="wd-dashboard">
      <div className="wd-dashboard-header">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div className="wd-user-info">
          <span className="wd-user-name">Dev Patel</span>
          <Link 
            href="https://github.com/dpatel4603/kambaz-next-js" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wd-github-link"
          >
            <Image 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
              width={16} 
              height={16} 
              alt="GitHub" 
            />
            GitHub
          </Link>
        </div>
      </div>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        {courses.map((course) => (
          <div key={course.id} className="wd-dashboard-course">
            <Link href={`/Courses/${course.id}`} className="wd-dashboard-course-link">
              <Image src={course.image} width={200} height={150} alt={course.alt} />
              <div>
                <h5>{course.title}</h5>
                <p className="wd-dashboard-course-title">
                  {course.description}
                </p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .wd-dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .wd-user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .wd-user-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1abc9c;
        }
        
        .wd-github-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #24292e;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
        }
        
        .wd-github-link:hover {
          background: #1a1e22;
        }
        
        @media (max-width: 768px) {
          .wd-dashboard-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .wd-user-info {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
