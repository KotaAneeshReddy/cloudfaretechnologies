-- Create Database
CREATE DATABASE IF NOT EXISTS cloudfare;
USE cloudfare;

-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS internships;
DROP TABLE IF EXISTS testimonials;
DROP TABLE IF EXISTS enrollments;

-- Create Courses Table
CREATE TABLE courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    instructor VARCHAR(100),
    image VARCHAR(512),
    syllabus TEXT,
    career_opportunities TEXT
);

-- Create Jobs Table
CREATE TABLE jobs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    location VARCHAR(255),
    type VARCHAR(50),
    description TEXT,
    requirements TEXT,
    responsibilities TEXT
);

-- Create Internships Table
CREATE TABLE internships (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(50),
    location VARCHAR(255),
    description TEXT,
    requirements TEXT,
    responsibilities TEXT
);

-- Create Applications Table
CREATE TABLE applications (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    job_id BIGINT,
    internship_id BIGINT,
    resume_url VARCHAR(512),
    cover_letter TEXT,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (internship_id) REFERENCES internships(id)
);

-- Create Testimonials Table
CREATE TABLE testimonials (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    company VARCHAR(100),
    content TEXT,
    avatar_url VARCHAR(512)
);

-- Create Enrollments Table
CREATE TABLE enrollments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    course_name VARCHAR(255),
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Training Programs (Courses & Internships)
INSERT INTO courses (title, description, duration, image, syllabus, career_opportunities) VALUES 
('Python and Generative AI Internship', 'Build a strong foundation in Python and master Generative AI to create intelligent applications and chatbots.', '3 Months', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Python Fundamentals", "topics": ["Data types and structures", "Conditional statements and loops", "Functions and modular programming", "Python modules and libraries", "Parallel processing"]}, {"title": "Generative AI", "topics": ["Introduction to LLMs", "Prompt engineering techniques", "AI chatbot development", "AI content generation systems", "AI API integration"]}]}', 'Python Developer, Data Analyst, AI Scientist, AI Application Developer'),

('Python and Automation with AI Testing', 'Focus on Python-based automation for industrial use cases, including data automation and AI-based testing.', '3 Months', 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Python & Data", "topics": ["Python programming fundamentals", "Data analytics fundamentals", "Database integration"]}, {"title": "Automation & AI Testing", "topics": ["Desktop UI design for automation", "Web scraping technologies", "Document intelligence processing", "AI-based testing use cases"]}]}', 'Python Developer, Automation Engineer, Data Analyst, AI Testing Engineer'),

('Python, Generative AI, and Agentic AI', 'Advanced program combining Gen AI with autonomous agents and multi-agent collaboration frameworks.', '4 Months', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Agentic AI Core", "topics": ["Large Language Models", "AI agent architecture", "Autonomous AI systems", "Multi-agent collaboration"]}, {"title": "Implementation", "topics": ["AI workflow automation", "Tool integration with AI agents", "CrewAI and LangChain Agents"]}]}', 'Python Developer, AI Engineer, Machine Learning Engineer, Prompt Engineer'),

('Python Full-Stack Development', 'Build modern web applications using Django/FastAPI for backend and React for frontend.', '6 Months', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Backend Mastery", "topics": ["Django and FastAPI frameworks", "REST API development", "Authentication and security", "Database design"]}, {"title": "Frontend Integration", "topics": ["React and Streamlit", "Git and GitHub", "API consumption"]}]}', 'Python Developer, Backend Engineer, Full Stack Developer, Web Application Developer'),

('DevOps Engineering', 'Master deployment automation, infrastructure management, and CI/CD workflows.', '5 Months', 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Infrastructure & CI/CD", "topics": ["Git and Jenkins", "GitHub Actions", "Terraform", "Monitoring with Prometheus"]}, {"title": "Containers & Cloud", "topics": ["Docker containerization", "Kubernetes orchestration", "AWS Cloud platforms"]}]}', 'DevOps Engineer, Cloud Engineer, Infrastructure Engineer, Platform Engineer'),

('Cybersecurity – Ethical Hacking Training', 'Learn cybersecurity principles and ethical hacking techniques to prevent security vulnerabilities.', '4 Months', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Security Fundamentals", "topics": ["Networking concepts", "Vulnerability assessment", "Web application security", "Security tools"]}, {"title": "Ethical Hacking", "topics": ["Penetration testing", "Kali Linux and Shell scripting", "Splunk"]}]}', 'Ethical Hacker, Cybersecurity Analyst, Security Consultant, Penetration Tester'),

('UI/UX and React Development Training', 'Focus on modern frontend development and user experience design using React and design tools.', '4 Months', 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "UI/UX Design", "topics": ["Wireframing and prototyping", "Figma and Adobe XD", "UX design fundamentals"]}, {"title": "React Development", "topics": ["JSX and components", "React hooks", "State management with Redux", "Tailwind CSS"]}]}', 'Frontend Developer, React Developer, Web Developer, UI Developer'),

('Microsoft Azure Training', 'Learn cloud computing concepts and Microsoft Azure services for application management.', '3 Months', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Azure Core", "topics": ["Cloud fundamentals", "Virtual machines", "Azure storage and networking"]}, {"title": "Azure DevOps", "topics": ["Azure security", "Monitoring and management", "Cloud automation"]}]}', 'Azure Cloud Engineer, Cloud Administrator, DevOps Engineer, Cloud Solutions Architect'),

('AWS Training Program', 'Practical knowledge of Amazon Web Services and cloud infrastructure deployment.', '3 Months', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "AWS Infrastructure", "topics": ["EC2 and S3 services", "VPC and networking", "IAM and Security"]}, {"title": "Cloud Engineering", "topics": ["Infrastructure as Code with Terraform", "CloudWatch monitoring", "Cloud Administrator"]}]}', 'AWS Cloud Engineer, Cloud Solutions Architect, DevOps Engineer, Cloud Administrator'),

('Selenium and AI-Driven Testing Training', 'Software testing automation using Selenium along with AI-driven testing tools.', '3 Months', 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Selenium Automation", "topics": ["WebDriver automation", "Test automation frameworks", "TestNG and JUnit"]}, {"title": "AI & CI/CD", "topics": ["AI-assisted testing tools", "Jenkins for CI/CD", "Playwright framework"]}]}', 'QA Automation Engineer, Software Test Engineer, Test Automation Architect'),

('Salesforce Training Program', 'Salesforce CRM administration, customization, and application development.', '4 Months', 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Salesforce Admin", "topics": ["CRM fundamentals", "Objects and fields", "Workflows and automation"]}, {"title": "Salesforce Dev", "topics": ["Apex programming", "Lightning components", "SOQL"]}]}', 'Salesforce Developer, Salesforce Administrator, CRM Consultant'),

('SAP Training Program', 'Enterprise resource planning (ERP) and business process integration using SAP systems.', '6 Months', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "SAP Core", "topics": ["ERP fundamentals", "SAP architecture", "SAP modules overview"]}, {"title": "Integration", "topics": ["Business process integration", "SAP configuration", "Reporting and analytics", "SAP HANA"]}]}', 'SAP Consultant, SAP Functional Analyst, ERP Specialist'),

('Java Full Stack Development Internship', 'Master enterprise-level application development using Java, Spring Boot, and React.', '6 Months', 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Java Backend", "topics": ["Core Java and OOP", "Spring Boot framework", "Hibernate and JPA", "REST API security"]}, {"title": "Frontend & DevOps", "topics": ["React UI framework", "Maven and Docker", "Maven and Grade", "Git and GitHub"]}]}', 'Java Developer, Backend Developer, Full Stack Developer, Enterprise Application Developer'),

('JavaScript Full Stack Development Internship', 'Modern web application development using Node.js, Express, and React.', '6 Months', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "JavaScript Mastery", "topics": ["ES6+ fundamentals", "Async programming", "React.js frontend"]}, {"title": "Backend Engineering", "topics": ["Node.js and Express", "MongoDB and SQL", "REST API development"]}]}', 'JavaScript Developer, Full Stack Developer, Frontend Developer, Backend Developer (Node.js)');

-- Insert Initial Job Openings
INSERT INTO jobs (title, company, location, type, description, requirements, responsibilities) VALUES 
('Senior Java Developer', 'Cloudfare Technologies', 'Hyderabad, India', 'Full-time', 
'We are looking for a Senior Java Developer to join our core engineering team. You will be responsible for building scalable microservices and leading the transition to a more resilient cloud architecture.', 
'Strong proficiency in Java 17 and Spring Boot. Experience with Microservices, Docker, and Kubernetes. Deep understanding of SQL/NoSQL databases. Minimum 5 years of industry experience.', 
'Develop and maintain high-quality microservices. Collaborate with cross-functional teams to design scalable architectures. Mentor junior developers and conduct code reviews.'),

('AI Engineer', 'Cloudfare Technologies', 'Remote', 'Full-time', 
'Join our AI research and development team to build next-generation Generative AI solutions. You will work on Large Language Models, prompt engineering, and autonomous agent frameworks.', 
'Proficiency in Python and AI frameworks (PyTorch, TensorFlow, or LangChain). Experience with LLMs and Vector Databases. Strong problem-solving skills.', 
'Design and implement AI-driven features. Optimize LLM performance and cost. Participate in research and implementation of new AI papers.'),

('Python Full Stack Developer', 'Propel Systems', 'Hyderabad', 'Full-time', 
'Seeking a Full Stack Developer who loves Python. You will build enterprise-grade web applications from scratch, using Django/FastAPI for the backend and React for the frontend.', 
'Expertise in Python (Django or FastAPI). Proficiency in React.js and modern CSS. Experience with RESTful API design.', 
'Build robust and scalable full-stack applications. Design and implement efficient database schemas. Collaborate with UI/UX designers to implement pixel-perfect interfaces.'),

('DevOps Engineer', 'CloudScale Solutions', 'Bangalore', 'Full-time', 
'Manage and scale our global cloud infrastructure. You will be responsible for CI/CD pipelines, security audits, and ensuring 99.9% uptime for our production systems.', 
'Deep knowledge of AWS services. Experience with Terraform and Ansible. Proficiency in Linux administration and Shell scripting.', 
'Automate infrastructure provisioning and deployment. Monitor system performance and troubleshoot issues. Implement and maintain security best practices.'),

('Cybersecurity Analyst', 'SafeGuard Network', 'Remote', 'Full-time', 
'Protect our enterprise clients from evolving cyber threats. You will focus on vulnerability assessments, penetration testing, and implementing zero-trust security models.', 
'Strong knowledge of network security and encryption. Experience with security tools like Splunk or Burp Suite. Certifications like CEH or CISSP are a plus.', 
'Perform regular security audits and vulnerability scans. Respond to security incidents and lead forensic investigations. Develop security policies and documentation.'),

('UI/UX Designer', 'VitalsIQ', 'Hyderabad', 'Full-time', 
'Design intuitive and beautiful user experiences for our global-scale web and mobile apps. You will work closely with product managers and engineers to bring our vision to life.', 
'Proficiency in Figma or Adobe XD. Strong portfolio demonstrating UX research and UI design skills. Understanding of design systems.', 
'Create wireframes, prototypes, and high-fidelity designs. Conduct user research and usability testing. Maintain and evolve the company design system.');

-- Insert Initial Internship Programs
INSERT INTO internships (title, duration, location, description, requirements, responsibilities) VALUES 
('Full Stack Web Internship', '3 Months', 'Hyderabad / Remote', 
'Gain hands-on experience by working on live client projects. You will learn the full lifecycle of a modern web application using React and Node.js.', 
'Basic knowledge of HTML, CSS, and JavaScript. Understanding of React fundamentals is a plus. Passion for building web applications.', 
'Develop and test UI components. Assist in backend API development. Participate in daily standups and sprint planning.'),

('Python for Data Science Internship', '4 Months', 'Bangalore', 
'Dive deep into data analysis and visualization. Work with real-world datasets and learn how to extract meaningful insights using Python and its powerful libraries.', 
'Proficiency in Python. Familiarity with Pandas, NumPy, and Matplotlib. Basic understanding of statistics.', 
'Clean and preprocess datasets. Perform exploratory data analysis. Create data visualizations and reports.'),

('Generative AI Internship', '3 Months', 'Remote', 
'Research and develop autonomous AI agents. This program focuses on cutting-edge LLM integrations and building the next generation of intelligent tools.', 
'Strong Python skills. Interest in AI and Machine Learning. Familiarity with OpenAI API or LangChain is helpful.', 
'Implement LLM-driven features and agents. Test and evaluate model performance. Document AI workflows and experiments.'),

('Cybersecurity Internship', '4 Months', 'Hyderabad', 
'Get real-world training in ethical hacking and network security. You will learn how to identify and remediate security vulnerabilities in a controlled environment.', 
'Knowledge of networking and OS fundamentals. Interest in cybersecurity and ethical hacking. Basic Linux skills.', 
'Monitor network traffic for suspicious activity. Participate in vulnerability assessment labs. Learn and use security auditing tools.'),

('React Frontend Internship', '3 Months', 'Remote', 
'Build modern and interactive user interfaces. You will work closely with our design team to implement pixel-perfect React components with Tailwind CSS.', 
'Solid understanding of modern JavaScript and React. Proficiency in CSS and responsive design. Eye for detail.', 
'Implement UI components based on Figma designs. Optimize frontend performance. Collaborate with backend teams for API integration.'),

('Salesforce Administrator Internship', '4 Months', 'Bangalore', 
'Master the Salesforce platform. You will learn how to manage enterprise CRM workflows, build dashboards, and configure cloud environments for global clients.', 
'Logical thinking and problem-solving skills. Interest in CRM systems. Basic understanding of business processes.', 
'Configure Salesforce objects and fields. Create reports and dashboards. Automate business processes using Salesforce Flow.');

-- Insert Testimonials
INSERT INTO testimonials (name, role, company, content, avatar_url) VALUES 
('Siddharth V.', 'SDE II', 'Microsoft', 'The transition from a student to a Professional Developer was seamless thanks to Cloudfare''s intensive training and dedicated placement cell.', NULL),
('Ananya R.', 'Product Manager', 'Google', 'Cloudfare''s curriculum is light years ahead. I gained practical skills that helped me ace my interviews at top-tier tech firms.', NULL),
('Karthik M.', 'Full Stack Lead', 'Amazon', 'The mentorship here is unparalleled. Working on real production systems during my internship gave me the confidence to lead teams today.', NULL),
('Priya S.', 'DevOps Engineer', 'Netflix', 'I started with zero knowledge of cloud architecture. Today, I manage global-scale deployments. Cloudfare changed my career trajectory.', NULL),
('Rahul K.', 'AI Research Engineer', 'Meta', 'The Generative AI program at Cloudfare is exceptional. It''s the perfect mix of theory and cutting-edge industry practice.', NULL);
