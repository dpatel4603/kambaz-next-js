export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  
  // Get course-specific assignment content
  const getAssignmentContent = (courseId: string, assignmentId: string) => {
    const assignments = {
      'CS4550': {
        'A1': { name: 'Environment Setup and HTML Basics', description: 'Set up your development environment and create a basic HTML page. Submit a link to your GitHub repository containing the HTML file. The page should include proper HTML5 structure, semantic elements, and basic styling.' },
        'A2': { name: 'CSS Styling and Bootstrap Framework', description: 'Create a responsive website using CSS and Bootstrap. Implement a multi-page layout with navigation, forms, and responsive design. Submit your GitHub repository with the styled website.' },
        'A3': { name: 'JavaScript Fundamentals and DOM Manipulation', description: 'Build an interactive web application using vanilla JavaScript. Implement DOM manipulation, event handling, and basic algorithms. Include form validation and dynamic content updates.' },
        'A4': { name: 'React Components and State Management', description: 'Develop a React application with multiple components and state management. Implement props, hooks, and component lifecycle methods. Create a functional single-page application.' },
        'A5': { name: 'Node.js Backend and Express.js API', description: 'Build a RESTful API using Node.js and Express.js. Implement CRUD operations, middleware, and error handling. Include API documentation and testing.' },
        'A6': { name: 'Database Integration with MongoDB', description: 'Integrate MongoDB with your Node.js application. Implement data models, queries, and database operations. Include data validation and error handling.' }
      },
      'CS5610': {
        'A1': { name: 'RESTful API Design and Implementation', description: 'Design and implement a comprehensive RESTful API following REST principles. Include proper HTTP methods, status codes, and API versioning. Document your API endpoints.' },
        'A2': { name: 'Authentication and Authorization', description: 'Implement secure authentication and authorization using JWT tokens. Include user registration, login, password hashing, and role-based access control.' },
        'A3': { name: 'Database Design and Optimization', description: 'Design an optimized database schema for a complex application. Implement indexing, query optimization, and database performance monitoring.' },
        'A4': { name: 'Microservices Architecture', description: 'Design and implement a microservices architecture. Break down a monolithic application into multiple services with proper communication and data management.' },
        'A5': { name: 'API Testing and Documentation', description: 'Create comprehensive API tests using testing frameworks. Implement unit tests, integration tests, and API documentation with examples.' },
        'A6': { name: 'Deployment and DevOps Practices', description: 'Deploy your application using containerization and cloud services. Implement CI/CD pipelines, monitoring, and logging systems.' }
      },
      'CS5800': {
        'A1': { name: 'Sorting Algorithms Implementation', description: 'Implement and analyze various sorting algorithms including bubble sort, merge sort, quick sort, and heap sort. Compare their time and space complexity.' },
        'A2': { name: 'Graph Algorithms and Data Structures', description: 'Implement graph data structures and algorithms including BFS, DFS, shortest path algorithms, and minimum spanning trees.' },
        'A3': { name: 'Dynamic Programming Problems', description: 'Solve classic dynamic programming problems including knapsack, longest common subsequence, and edit distance. Analyze time and space complexity.' },
        'A4': { name: 'Greedy Algorithms and Optimization', description: 'Implement greedy algorithms for optimization problems including activity selection, Huffman coding, and minimum spanning trees.' },
        'A5': { name: 'Algorithm Complexity Analysis', description: 'Analyze the time and space complexity of various algorithms. Prove correctness and optimality of algorithm implementations.' },
        'A6': { name: 'Advanced Algorithm Design', description: 'Design and implement advanced algorithms for complex problems. Include approximation algorithms and randomized algorithms.' }
      },
      'CS5520': {
        'A1': { name: 'React Native Environment Setup', description: 'Set up React Native development environment and create your first mobile app. Configure development tools and test on both iOS and Android simulators.' },
        'A2': { name: 'Mobile UI Components and Navigation', description: 'Build a mobile app with custom UI components and navigation. Implement tab navigation, stack navigation, and responsive layouts.' },
        'A3': { name: 'State Management with Redux', description: 'Implement Redux for state management in your React Native app. Create actions, reducers, and connect components to the store.' },
        'A4': { name: 'API Integration and Data Fetching', description: 'Integrate REST APIs with your mobile app. Implement data fetching, caching, and error handling for network requests.' },
        'A5': { name: 'Native Features and Device APIs', description: 'Access native device features including camera, GPS, push notifications, and local storage. Implement platform-specific functionality.' },
        'A6': { name: 'App Deployment and Testing', description: 'Deploy your React Native app to app stores. Implement testing strategies and performance optimization for mobile devices.' }
      },
      'CS5200': {
        'A1': { name: 'Relational Database Design', description: 'Design a normalized relational database schema for a real-world application. Create entity-relationship diagrams and implement the database using SQL.' },
        'A2': { name: 'SQL Queries and Joins', description: 'Write complex SQL queries including various types of joins, subqueries, and aggregate functions. Optimize query performance and analyze execution plans.' },
        'A3': { name: 'Database Normalization', description: 'Apply database normalization techniques to eliminate redundancy and improve data integrity. Analyze the trade-offs between normalization levels.' },
        'A4': { name: 'Indexing and Performance Optimization', description: 'Implement database indexing strategies to improve query performance. Analyze query execution plans and optimize database performance.' },
        'A5': { name: 'Transaction Management and ACID', description: 'Implement database transactions with proper ACID properties. Handle concurrency control and deadlock prevention.' },
        'A6': { name: 'NoSQL Database Design', description: 'Design and implement a NoSQL database solution. Compare relational and non-relational approaches for different use cases.' }
      },
      'CS6140': {
        'A1': { name: 'Linear Regression and Gradient Descent', description: 'Implement linear regression from scratch using gradient descent. Analyze the impact of learning rate and feature scaling on model performance.' },
        'A2': { name: 'Classification Algorithms', description: 'Implement and compare various classification algorithms including logistic regression, decision trees, and support vector machines.' },
        'A3': { name: 'Neural Networks and Deep Learning', description: 'Build neural networks using frameworks like TensorFlow or PyTorch. Implement backpropagation and train models on real datasets.' },
        'A4': { name: 'Model Evaluation and Validation', description: 'Implement cross-validation, hyperparameter tuning, and model evaluation metrics. Analyze model performance and overfitting.' },
        'A5': { name: 'Feature Engineering and Selection', description: 'Perform feature engineering and selection to improve model performance. Implement dimensionality reduction techniques.' },
        'A6': { name: 'Machine Learning Pipeline', description: 'Build a complete machine learning pipeline from data preprocessing to model deployment. Implement MLOps practices.' }
      },
      'CS6620': {
        'A1': { name: 'Image Processing Fundamentals', description: 'Implement basic image processing operations including filtering, edge detection, and morphological operations using OpenCV.' },
        'A2': { name: 'Edge Detection and Feature Extraction', description: 'Implement edge detection algorithms and feature extraction techniques. Compare different edge detection methods and their performance.' },
        'A3': { name: 'Object Detection and Recognition', description: 'Implement object detection and recognition systems using traditional computer vision techniques and deep learning approaches.' },
        'A4': { name: 'Deep Learning for Computer Vision', description: 'Build deep learning models for computer vision tasks including image classification, object detection, and semantic segmentation.' },
        'A5': { name: 'Image Segmentation and Analysis', description: 'Implement image segmentation algorithms and analyze segmented regions. Apply segmentation to real-world computer vision problems.' },
        'A6': { name: 'Real-time Video Processing', description: 'Develop real-time video processing applications. Implement video analysis, tracking, and real-time computer vision systems.' }
      },
      'CS6510': {
        'A1': { name: 'Cloud Infrastructure Setup', description: 'Set up cloud infrastructure using AWS, Azure, or Google Cloud. Configure virtual machines, networking, and security groups.' },
        'A2': { name: 'Containerization with Docker', description: 'Containerize applications using Docker. Create Dockerfiles, manage containers, and implement container orchestration.' },
        'A3': { name: 'AWS Services and Deployment', description: 'Deploy applications using AWS services including EC2, S3, RDS, and Lambda. Implement auto-scaling and load balancing.' },
        'A4': { name: 'Microservices and Load Balancing', description: 'Design and implement microservices architecture with proper load balancing and service discovery mechanisms.' },
        'A5': { name: 'Monitoring and Logging', description: 'Implement comprehensive monitoring and logging systems. Set up alerts, dashboards, and log aggregation.' },
        'A6': { name: 'CI/CD Pipeline Implementation', description: 'Build continuous integration and deployment pipelines. Implement automated testing, building, and deployment processes.' }
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
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignmentContent.name} /><br /><br />
      <textarea id="wd-description">
        {assignmentContent.description}
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Points">Points</option>
              <option value="Percentage">Percentage</option>
              <option value="Letter Grade">Letter Grade</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
          <td>
            <input type="checkbox" id="wd-website-url" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          <td>
            <input type="checkbox" id="wd-media-recordings" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
          <td>
            <input type="checkbox" id="wd-student-annotation" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
          <td>
            <input type="checkbox" id="wd-file-upload" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <select id="wd-assign-to">
              <option value="Everyone">Everyone</option>
              <option value="Everyone else">Everyone else</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" defaultValue="2024-12-31" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" defaultValue="2024-01-01" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" defaultValue="2024-12-31" />
          </td>
        </tr>
      </table>
    </div>
  );
}
