import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

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
        <Row xs={1} md={4} className="g-4">
          {courses.map((course) => (
            <Col key={course.id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course.id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg variant="top" src={course.image} width="100%" height={160}/>
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.title}</CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
