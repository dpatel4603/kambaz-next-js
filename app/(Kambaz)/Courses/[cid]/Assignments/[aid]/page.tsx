import { FormControl, FormSelect, FormCheck, Row, Col, FormLabel } from "react-bootstrap";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  
  // Get course-specific assignment content
  const getAssignmentContent = (courseId: string, assignmentId: string) => {
    const assignments = {
      'CS4550': {
        'A1': { name: 'Environment Setup and HTML Basics', description: 'Set up your development environment and create a basic HTML page. Submit a link to your GitHub repository containing the HTML file. The page should include proper HTML5 structure, semantic elements, and basic styling.' },
        'A2': { name: 'CSS Styling and Bootstrap Framework', description: 'Create a responsive website using CSS and Bootstrap. Implement a multi-page layout with navigation, forms, and responsive design. Submit your GitHub repository with the styled website.' },
        'A3': { name: 'JavaScript Fundamentals and DOM Manipulation', description: 'Build an interactive web application using vanilla JavaScript. Implement DOM manipulation, event handling, and basic algorithms. Include form validation and dynamic content updates.' }
      }
    };
    
    const courseAssignments = assignments[courseId as keyof typeof assignments];
    if (courseAssignments && assignmentId in courseAssignments) {
      return courseAssignments[assignmentId as keyof typeof courseAssignments];
    }
    return { name: `${assignmentId} - Assignment`, description: 'Assignment description will be provided.' };
  };

  const assignmentContent = getAssignmentContent(cid, aid);

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Row className="mb-3">
        <Col>
          <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
          <FormControl 
            id="wd-name" 
            defaultValue={assignmentContent.name}
            className="form-control"
          />
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col>
          <FormLabel htmlFor="wd-description">Description</FormLabel>
          <FormControl 
            id="wd-description"
            as="textarea"
            rows={5}
            defaultValue={assignmentContent.description}
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col md={4}>
          <FormControl 
            id="wd-points" 
            defaultValue={100}
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
        </Col>
        <Col md={4}>
          <FormSelect id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
        </Col>
        <Col md={4}>
          <FormSelect id="wd-display-grade-as" className="form-control">
            <option value="Points">Points</option>
            <option value="Percentage">Percentage</option>
            <option value="Letter Grade">Letter Grade</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
        </Col>
        <Col md={4}>
          <FormSelect id="wd-submission-type" className="form-control">
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel>Submission Type Options</FormLabel>
        </Col>
        <Col md={4}>
          <FormCheck 
            type="checkbox" 
            id="wd-text-entry" 
            label="Text Entry"
            className="mb-2"
          />
          <FormCheck 
            type="checkbox" 
            id="wd-website-url" 
            label="Website URL"
            className="mb-2"
          />
          <FormCheck 
            type="checkbox" 
            id="wd-media-recordings" 
            label="Media Recordings"
            className="mb-2"
          />
          <FormCheck 
            type="checkbox" 
            id="wd-student-annotation" 
            label="Student Annotation"
            className="mb-2"
          />
          <FormCheck 
            type="checkbox" 
            id="wd-file-upload" 
            label="File Uploads"
            className="mb-2"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel>
        </Col>
        <Col md={4}>
          <FormSelect id="wd-assign-to" className="form-control">
            <option value="Everyone">Everyone</option>
            <option value="Everyone else">Everyone else</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-due-date">Due</FormLabel>
        </Col>
        <Col md={4}>
          <FormControl 
            type="date" 
            id="wd-due-date" 
            defaultValue="2024-12-31"
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
        </Col>
        <Col md={4}>
          <FormControl 
            type="date" 
            id="wd-available-from" 
            defaultValue="2024-01-01"
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={2} className="text-end">
          <FormLabel htmlFor="wd-available-until">Until</FormLabel>
        </Col>
        <Col md={4}>
          <FormControl 
            type="date" 
            id="wd-available-until" 
            defaultValue="2024-12-31"
            className="form-control"
          />
        </Col>
      </Row>
    </div>
  );
}
