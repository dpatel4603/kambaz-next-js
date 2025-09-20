export default async function Modules({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  
  // Course-specific module content
  const getCourseModules = (courseId: string) => {
    switch (courseId) {
      case 'CS4550':
        return {
          week1: {
            title: 'Week 1 - Environment Setup and HTML',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Set up development environment (VS Code, Node.js, Git)',
                  'Understand HTML5 structure and semantic elements',
                  'Create basic web pages with proper markup'
                ]
              },
              {
                title: 'READING',
                content: [
                  'HTML5 Documentation and Best Practices',
                  'Web Development Fundamentals'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to Web Development',
                  'HTML5 Elements and Attributes'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - CSS Styling and Bootstrap',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Master CSS selectors, properties, and layouts',
                  'Implement responsive design with Bootstrap',
                  'Create visually appealing web interfaces'
                ]
              },
              {
                title: 'READING',
                content: [
                  'CSS Grid and Flexbox Guide',
                  'Bootstrap Documentation'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'CSS Fundamentals and Advanced Techniques',
                  'Responsive Web Design Principles'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - JavaScript Fundamentals',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Understand JavaScript syntax and data types',
                  'Implement DOM manipulation and event handling',
                  'Build interactive web applications'
                ]
              },
              {
                title: 'READING',
                content: [
                  'JavaScript ES6+ Features',
                  'DOM API Reference'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'JavaScript Language Fundamentals',
                  'DOM Manipulation and Event Handling'
                ]
              }
            ]
          }
        };
      case 'CS5610':
        return {
          week1: {
            title: 'Week 1 - RESTful API Design',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Design RESTful API endpoints and HTTP methods',
                  'Implement proper status codes and error handling',
                  'Create API documentation and versioning'
                ]
              },
              {
                title: 'READING',
                content: [
                  'REST API Design Principles',
                  'HTTP Protocol and Status Codes'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to RESTful Architecture',
                  'API Design Best Practices'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Authentication and Security',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement JWT-based authentication',
                  'Secure API endpoints with middleware',
                  'Handle user sessions and authorization'
                ]
              },
              {
                title: 'READING',
                content: [
                  'JWT Token Implementation Guide',
                  'Web Security Best Practices'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Authentication vs Authorization',
                  'API Security and Middleware'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Database Integration',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Design optimized database schemas',
                  'Implement ORM and query optimization',
                  'Handle database transactions and migrations'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Database Design Patterns',
                  'SQL Performance Optimization'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Database Schema Design',
                  'Query Optimization Techniques'
                ]
              }
            ]
          }
        };
      case 'CS5800':
        return {
          week1: {
            title: 'Week 1 - Sorting Algorithms',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement and analyze sorting algorithms',
                  'Compare time and space complexity',
                  'Understand algorithm efficiency metrics'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Introduction to Algorithms (CLRS)',
                  'Sorting Algorithm Analysis'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Algorithm Complexity Analysis',
                  'Comparison-based Sorting Algorithms'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Graph Algorithms',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement graph data structures',
                  'Master BFS, DFS, and shortest path algorithms',
                  'Solve graph-based optimization problems'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Graph Theory Fundamentals',
                  'Network Flow Algorithms'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Graph Representation and Traversal',
                  'Shortest Path and Minimum Spanning Trees'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Dynamic Programming',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Understand dynamic programming principles',
                  'Solve classic DP problems',
                  'Optimize recursive solutions with memoization'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Dynamic Programming Patterns',
                  'Optimization Problem Solving'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Dynamic Programming Fundamentals',
                  'Classic DP Problems and Solutions'
                ]
              }
            ]
          }
        };
      case 'CS5520':
        return {
          week1: {
            title: 'Week 1 - React Native Setup',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Set up React Native development environment',
                  'Create first mobile app with basic components',
                  'Understand React Native architecture'
                ]
              },
              {
                title: 'READING',
                content: [
                  'React Native Getting Started Guide',
                  'Mobile Development Fundamentals'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to React Native',
                  'Mobile App Development Lifecycle'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Mobile UI Components',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Build custom UI components and navigation',
                  'Implement responsive layouts for mobile',
                  'Handle user interactions and gestures'
                ]
              },
              {
                title: 'READING',
                content: [
                  'React Native Component Library',
                  'Mobile UX Design Principles'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Mobile UI/UX Design Patterns',
                  'Navigation and Layout Systems'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - State Management',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement Redux for state management',
                  'Handle complex app state and data flow',
                  'Integrate with external APIs'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Redux Documentation and Patterns',
                  'Mobile App State Management'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'State Management in Mobile Apps',
                  'Redux Architecture and Implementation'
                ]
              }
            ]
          }
        };
      case 'CS5200':
        return {
          week1: {
            title: 'Week 1 - Database Design',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Design normalized relational database schemas',
                  'Create entity-relationship diagrams',
                  'Implement database using SQL DDL'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Database Design Fundamentals',
                  'Entity-Relationship Modeling'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to Database Systems',
                  'Relational Model and Normalization'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - SQL Queries',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Write complex SQL queries with joins',
                  'Use aggregate functions and subqueries',
                  'Optimize query performance'
                ]
              },
              {
                title: 'READING',
                content: [
                  'SQL Query Optimization Guide',
                  'Advanced SQL Techniques'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'SQL Joins and Relationships',
                  'Query Performance and Indexing'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Database Optimization',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement database indexing strategies',
                  'Handle transactions and concurrency',
                  'Monitor and optimize database performance'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Database Performance Tuning',
                  'ACID Properties and Transactions'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Database Indexing and Optimization',
                  'Transaction Management and Concurrency'
                ]
              }
            ]
          }
        };
      case 'CS6140':
        return {
          week1: {
            title: 'Week 1 - Linear Regression',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement linear regression from scratch',
                  'Understand gradient descent optimization',
                  'Analyze model performance and metrics'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Introduction to Statistical Learning',
                  'Linear Regression Theory and Practice'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Machine Learning Fundamentals',
                  'Linear Regression and Gradient Descent'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Classification Algorithms',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement logistic regression and decision trees',
                  'Compare different classification algorithms',
                  'Evaluate model performance with metrics'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Classification Algorithms Guide',
                  'Model Evaluation and Validation'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Classification Problem Types',
                  'Decision Trees and Ensemble Methods'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Neural Networks',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Build neural networks with TensorFlow/PyTorch',
                  'Implement backpropagation algorithm',
                  'Train models on real datasets'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Deep Learning Fundamentals',
                  'Neural Network Architecture Design'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to Neural Networks',
                  'Backpropagation and Training Algorithms'
                ]
              }
            ]
          }
        };
      case 'CS6620':
        return {
          week1: {
            title: 'Week 1 - Image Processing',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement basic image processing operations',
                  'Apply filters and edge detection algorithms',
                  'Use OpenCV for computer vision tasks'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Computer Vision Fundamentals',
                  'OpenCV Documentation and Tutorials'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to Computer Vision',
                  'Image Processing and Filtering'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Feature Extraction',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Extract features from images and videos',
                  'Implement edge detection and corner detection',
                  'Compare different feature extraction methods'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Feature Detection and Description',
                  'Image Feature Extraction Techniques'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Feature Detection Algorithms',
                  'Edge and Corner Detection Methods'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Object Detection',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Implement object detection algorithms',
                  'Use deep learning for computer vision',
                  'Build real-time detection systems'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Object Detection and Recognition',
                  'Deep Learning for Computer Vision'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Object Detection Fundamentals',
                  'Deep Learning Architectures for Vision'
                ]
              }
            ]
          }
        };
      case 'CS6510':
        return {
          week1: {
            title: 'Week 1 - Cloud Infrastructure',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Set up cloud infrastructure with AWS/Azure',
                  'Configure virtual machines and networking',
                  'Implement security groups and access control'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Cloud Computing Fundamentals',
                  'AWS/Azure Service Documentation'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Introduction to Cloud Computing',
                  'Infrastructure as a Service (IaaS)'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Containerization',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Containerize applications with Docker',
                  'Create and manage container images',
                  'Implement container orchestration'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Docker Documentation and Best Practices',
                  'Container Orchestration with Kubernetes'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Containerization Concepts',
                  'Docker and Container Management'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - DevOps and CI/CD',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Build CI/CD pipelines for automated deployment',
                  'Implement monitoring and logging systems',
                  'Manage infrastructure as code'
                ]
              },
              {
                title: 'READING',
                content: [
                  'DevOps Practices and Tools',
                  'CI/CD Pipeline Implementation'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'DevOps Culture and Practices',
                  'Continuous Integration and Deployment'
                ]
              }
            ]
          }
        };
      default:
        return {
          week1: {
            title: 'Week 1 - Course Introduction',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Understand course objectives and requirements',
                  'Set up development environment',
                  'Review prerequisite knowledge'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Course Syllabus and Materials',
                  'Prerequisite Review Materials'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Course Overview and Introduction',
                  'Learning Objectives and Expectations'
                ]
              }
            ]
          },
          week2: {
            title: 'Week 2 - Core Concepts',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Master fundamental concepts and theory',
                  'Apply concepts through practical exercises',
                  'Develop problem-solving skills'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Core Concept Documentation',
                  'Theory and Practice Materials'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Fundamental Concepts and Theory',
                  'Practical Applications and Examples'
                ]
              }
            ]
          },
          week3: {
            title: 'Week 3 - Advanced Topics',
            lessons: [
              {
                title: 'LEARNING OBJECTIVES',
                content: [
                  'Explore advanced topics and techniques',
                  'Implement complex solutions',
                  'Prepare for project development'
                ]
              },
              {
                title: 'READING',
                content: [
                  'Advanced Topic Resources',
                  'Implementation Guides and Tutorials'
                ]
              },
              {
                title: 'SLIDES',
                content: [
                  'Advanced Concepts and Techniques',
                  'Project Planning and Development'
                ]
              }
            ]
          }
        };
    }
  };

  const modules = getCourseModules(cid);

  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">{modules.week1.title}</div>
          <ul className="wd-lessons">
            {modules.week1.lessons.map((lesson, index) => (
              <li key={index} className="wd-lesson">
                <span className="wd-title">{lesson.title}</span>
                <ul className="wd-content">
                  {lesson.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="wd-content-item">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">{modules.week2.title}</div>
          <ul className="wd-lessons">
            {modules.week2.lessons.map((lesson, index) => (
              <li key={index} className="wd-lesson">
                <span className="wd-title">{lesson.title}</span>
                <ul className="wd-content">
                  {lesson.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="wd-content-item">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">{modules.week3.title}</div>
          <ul className="wd-lessons">
            {modules.week3.lessons.map((lesson, index) => (
              <li key={index} className="wd-lesson">
                <span className="wd-title">{lesson.title}</span>
                <ul className="wd-content">
                  {lesson.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="wd-content-item">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}