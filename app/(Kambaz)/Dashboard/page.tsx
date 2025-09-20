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
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
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
    </div>
  );
}
