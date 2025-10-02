import Link from "next/link";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  // Course-specific assignment categories with weights and points
  const getCourseAssignments = () => {
    const baseAssignments = {
      assignments: [
        { id: 'A1', title: 'Environment Setup and HTML Basics', points: 100, dueDate: '2024-01-15', startDate: '2024-01-01', untilDate: '2024-01-20' },
        { id: 'A2', title: 'CSS Styling and Bootstrap Framework', points: 100, dueDate: '2024-01-22', startDate: '2024-01-08', untilDate: '2024-01-27' },
        { id: 'A3', title: 'JavaScript Fundamentals and DOM Manipulation', points: 100, dueDate: '2024-01-29', startDate: '2024-01-15', untilDate: '2024-02-03' }
      ],
      quizzes: [
        { id: 'Q1', title: 'HTML and CSS Fundamentals', points: 25, dueDate: '2024-01-18', startDate: '2024-01-10', untilDate: '2024-01-23' },
        { id: 'Q2', title: 'JavaScript Basics', points: 25, dueDate: '2024-01-25', startDate: '2024-01-17', untilDate: '2024-01-30' }
      ],
      exams: [
        { id: 'E1', title: 'Midterm Exam', points: 200, dueDate: '2024-02-15', startDate: '2024-02-10', untilDate: '2024-02-20' }
      ],
      project: [
        { id: 'P1', title: 'Full Stack Web Application', points: 300, dueDate: '2024-03-08', startDate: '2024-02-20', untilDate: '2024-03-15' }
      ]
    };

    return baseAssignments;
  };

  const assignmentCategories = getCourseAssignments();

  const AssignmentGroup = ({ title, weight, assignments }: { 
    title: string; 
    weight: string; 
    assignments: Array<{ id: string; title: string; points: number; dueDate: string; startDate: string; untilDate: string; }>; 
  }) => {
    
    return (
      <div className="wd-assignment-group mb-4">
        <div className="wd-assignment-group-header d-flex justify-content-between align-items-center mb-3">
          <h3 className="wd-assignment-group-title mb-0">
            {title} {weight} of Total
          </h3>
          <Button variant="secondary" size="sm" className="wd-assignment-group-add">
            <FaPlus className="me-1" />
          </Button>
        </div>
        <ListGroup className="wd-assignment-list">
          {assignments.map((assignment) => (
            <ListGroupItem key={assignment.id} className="wd-assignment-list-item p-0 border-0">
              <Link href={`/Courses/${cid}/Assignments/${assignment.id}`} className="wd-assignment-link text-decoration-none text-dark">
                <div className="wd-assignment-content p-3 border-start border-success border-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <div className="wd-assignment-title fw-bold mb-1">
                        {assignment.id} - {assignment.title}
                      </div>
                      <div className="wd-assignment-details text-muted small">
                        <div>Multiple Modules | Not available until {assignment.startDate} at 12:00am</div>
                        <div>Due {assignment.dueDate} at 11:59pm | {assignment.points} pts</div>
                      </div>
                    </div>
                    <div className="ms-3">
                      <IoEllipsisVertical className="fs-4 text-muted" />
                    </div>
                  </div>
                </div>
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  };

  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header d-flex justify-content-between align-items-center mb-4">
        <div className="flex-grow-1 me-3">
          <FormControl 
            placeholder="Search for Assignments"
            className="wd-search-assignment"
            style={{ maxWidth: '300px' }}
          />
        </div>
        <div className="d-flex gap-2">
          <Button variant="secondary" className="wd-add-assignment-group">
            <FaPlus className="me-1" />
            Group
          </Button>
          <Button variant="danger" className="wd-add-assignment">
            <FaPlus className="me-1" />
            Assignment
          </Button>
        </div>
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
