import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs" className="container mt-4">
      <h1>Lab Exercises</h1>
      <div className="mb-4">
        <h2>Dev Patel - Section 01</h2>
        <p className="lead">Welcome to my lab exercises for CS 5610 Web Development</p>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <h3>Lab Assignments</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Link href="/Labs/Lab1" id="wd-lab1-link" className="text-decoration-none">
                Lab 1: HTML Examples
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/Labs/Lab2" id="wd-lab2-link" className="text-decoration-none">
                Lab 2: CSS Basics & Bootstrap
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="/Labs/Lab3" id="wd-lab3-link" className="text-decoration-none">
                Lab 3: JavaScript Fundamentals
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-md-6">
          <h3>Applications</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Link href="/" id="wd-kambaz-link" className="text-decoration-none">
                Kambaz Application
              </Link>
            </li>
          </ul>
          
          <h3 className="mt-4">Source Code</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="https://github.com/dpatel4603/kambaz-next-js" target="_blank" rel="noopener noreferrer" id="wd-github" className="text-decoration-none">
                GitHub Repository
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                Vercel Deployment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
