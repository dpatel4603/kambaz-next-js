import Link from "next/link";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  // Course-specific assignment categories with weights and points
  const getCourseAssignments = (courseId: string) => {
    const baseAssignments = {
      assignments: [
        { id: 'A1', title: 'Environment Setup and HTML Basics', points: 100, dueDate: '2024-01-15' },
        { id: 'A2', title: 'CSS Styling and Bootstrap Framework', points: 100, dueDate: '2024-01-22' },
        { id: 'A3', title: 'JavaScript Fundamentals and DOM Manipulation', points: 100, dueDate: '2024-01-29' },
        { id: 'A4', title: 'React Components and State Management', points: 100, dueDate: '2024-02-05' },
        { id: 'A5', title: 'Node.js Backend and Express.js API', points: 100, dueDate: '2024-02-12' },
        { id: 'A6', title: 'Database Integration with MongoDB', points: 100, dueDate: '2024-02-19' }
      ],
      quizzes: [
        { id: 'Q1', title: 'HTML and CSS Fundamentals', points: 25, dueDate: '2024-01-18' },
        { id: 'Q2', title: 'JavaScript Basics', points: 25, dueDate: '2024-01-25' },
        { id: 'Q3', title: 'React Concepts', points: 25, dueDate: '2024-02-01' },
        { id: 'Q4', title: 'Backend Development', points: 25, dueDate: '2024-02-08' }
      ],
      exams: [
        { id: 'E1', title: 'Midterm Exam', points: 200, dueDate: '2024-02-15' },
        { id: 'E2', title: 'Final Exam', points: 200, dueDate: '2024-03-01' }
      ],
      project: [
        { id: 'P1', title: 'Full Stack Web Application', points: 300, dueDate: '2024-03-08' }
      ]
    };

    // Customize assignments based on course
    switch (courseId) {
      case 'CS4550':
        return {
          ...baseAssignments,
          assignments: [
            { id: 'A1', title: 'Environment Setup and HTML Basics', points: 100, dueDate: '2024-01-15' },
            { id: 'A2', title: 'CSS Styling and Bootstrap Framework', points: 100, dueDate: '2024-01-22' },
            { id: 'A3', title: 'JavaScript Fundamentals and DOM Manipulation', points: 100, dueDate: '2024-01-29' },
            { id: 'A4', title: 'React Components and State Management', points: 100, dueDate: '2024-02-05' },
            { id: 'A5', title: 'Node.js Backend and Express.js API', points: 100, dueDate: '2024-02-12' },
            { id: 'A6', title: 'Database Integration with MongoDB', points: 100, dueDate: '2024-02-19' }
          ]
        };
      case 'CS5610':
        return {
          ...baseAssignments,
          assignments: [
            { id: 'A1', title: 'RESTful API Design and Implementation', points: 100, dueDate: '2024-01-15' },
            { id: 'A2', title: 'Authentication and Authorization', points: 100, dueDate: '2024-01-22' },
            { id: 'A3', title: 'Database Design and Optimization', points: 100, dueDate: '2024-01-29' },
            { id: 'A4', title: 'Microservices Architecture', points: 100, dueDate: '2024-02-05' },
            { id: 'A5', title: 'API Testing and Documentation', points: 100, dueDate: '2024-02-12' },
            { id: 'A6', title: 'Deployment and DevOps Practices', points: 100, dueDate: '2024-02-19' }
          ]
        };
      case 'CS5800':
        return {
          ...baseAssignments,
          assignments: [
            { id: 'A1', title: 'Sorting Algorithms Implementation', points: 100, dueDate: '2024-01-15' },
            { id: 'A2', title: 'Graph Algorithms and Data Structures', points: 100, dueDate: '2024-01-22' },
            { id: 'A3', title: 'Dynamic Programming Problems', points: 100, dueDate: '2024-01-29' },
            { id: 'A4', title: 'Greedy Algorithms and Optimization', points: 100, dueDate: '2024-02-05' },
            { id: 'A5', title: 'Algorithm Complexity Analysis', points: 100, dueDate: '2024-02-12' },
            { id: 'A6', title: 'Advanced Algorithm Design', points: 100, dueDate: '2024-02-19' }
          ]
        };
      default:
        return baseAssignments;
    }
  };

  const assignmentCategories = getCourseAssignments(cid);

  interface Assignment {
    id: string;
    title: string;
    points: number;
    dueDate: string;
  }

  const AssignmentGroup = ({ title, weight, assignments }: { 
    title: string; 
    weight: string; 
    assignments: Assignment[]; 
  }) => {
    
    return (
      <div className="wd-assignment-group">
        <div className="wd-assignment-group-header">
          <h3 className="wd-assignment-group-title">
            {title} {weight} of Total
            <button className="wd-assignment-group-add">+</button>
          </h3>
        </div>
        <ul className="wd-assignment-list">
          {assignments.map((assignment) => (
            <li key={assignment.id} className="wd-assignment-list-item">
              <Link href={`/Courses/${cid}/Assignments/${assignment.id}`} className="wd-assignment-link">
                <div className="wd-assignment-content">
                  <div className="wd-assignment-title">
                    {assignment.id} - {assignment.title}
                  </div>
                  <div className="wd-assignment-details">
                    <span className="wd-assignment-points">{assignment.points} pts</span>
                    <span className="wd-assignment-due">Due {assignment.dueDate}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header">
        <input 
          placeholder="Search for Assignments"
          className="wd-search-assignment" 
        />
        <button className="wd-add-assignment-group">+ Group</button>
        <button className="wd-add-assignment">+ Assignment</button>
      </div>
      
      <div className="wd-assignments-content">
        <AssignmentGroup 
          title="ASSIGNMENTS" 
          weight="40%" 
          assignments={assignmentCategories.assignments}
        />
        
        <AssignmentGroup 
          title="QUIZZES" 
          weight="10%" 
          assignments={assignmentCategories.quizzes}
        />
        
        <AssignmentGroup 
          title="EXAMS" 
          weight="30%" 
          assignments={assignmentCategories.exams}
        />
        
        <AssignmentGroup 
          title="PROJECT" 
          weight="20%" 
          assignments={assignmentCategories.project}
        />
      </div>
    </div>
  );
}
