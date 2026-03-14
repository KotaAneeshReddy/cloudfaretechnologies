-- Create Database
CREATE DATABASE IF NOT EXISTS cloudfare;
USE cloudfare;

-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS internships;
DROP TABLE IF EXISTS testimonials;

-- Create Courses Table
CREATE TABLE courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    instructor VARCHAR(100),
    image VARCHAR(512),
    syllabus TEXT
);

-- Create Jobs Table
CREATE TABLE jobs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    location VARCHAR(255),
    type VARCHAR(50),
    description TEXT
);

-- Create Internships Table
CREATE TABLE internships (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(50),
    location VARCHAR(255),
    description TEXT
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

-- Insert Training Programs (Courses)
INSERT INTO courses (title, description, duration, image, syllabus) VALUES 
('Java Full Stack Development', 'Master Java, Spring Boot, React, and MySQL to build enterprise-level applications.', '6 Months', 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Module 1: Java Fundamentals", "topics": ["JDK and JVM Architecture", "Core Syntax and Data Types", "OOP Concepts", "Exception Handling", "Collections Framework"]}, {"title": "Module 2: Advanced Java & Backend", "topics": ["Multithreading", "JDBC and Hibernate", "Spring Framework & Spring Boot", "RESTful API Design", "Microservices Architecture"]}, {"title": "Module 3: Frontend Mastery", "topics": ["HTML5 & CSS3 Essentials", "JavaScript (ES6+)", "React Hooks and State Management", "Tailwind CSS Design System", "Axios Integration"]}]}'),
('Python Generative AI', 'Learn Python, LLMs, LangChain, and Prompt Engineering to build modern AI solutions.', '4 Months', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Module 1: Python for AI", "topics": ["Advanced Python Syntax", "NumPy and Pandas for Data Manipulation", "PyTorch Fundamentals", "Data Preprocessing Techniques"]}, {"title": "Module 2: Large Language Models", "topics": ["Transformer Architecture", "Hugging Face Ecosystem", "Fine-tuning Foundations", "Prompt Engineering Mastery"]}, {"title": "Module 3: AI Application Engineering", "topics": ["LangChain Framework", "Vector Databases (Pinecone/Chroma)", "RAG (Retrieval Augmented Generation)", "Deploying AI Models with FastAPI"]}]}'),
('DevOps & Cloud Engineering', 'Deep dive into Docker, Kubernetes, AWS, and CI/CD pipelines for modern infrastructure.', '5 Months', 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Module 1: Infrastructure & Containers", "topics": ["Linux Administration", "Containerization with Docker", "Container Orchestration with Kubernetes", "Helm Charts"]}, {"title": "Module 2: Cloud Mastery (AWS)", "topics": ["EC2, S3, and VPC Architecture", "Serverless with AWS Lambda", "IAM Security Best Practices", "CloudWatch Monitoring"]}, {"title": "Module 3: CI/CD & Automation", "topics": ["Jenkins and GitHub Actions", "Infrastructure as Code (Terraform)", "Configuration Management (Ansible)", "DevSecOps Fundamentals"]}]}'),
('SAP ERP Solutions', 'Comprehensive training on SAP modules, business processes, and enterprise resource planning.', '6 Months', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', '{"modules": [{"title": "Module 1: SAP Ecosystem", "topics": ["Introduction to ERP", "SAP Architecture (ECC vs S/4HANA)", "Navigation and User Interface", "Organizational Structures"]}, {"title": "Module 2: Functional Modules", "topics": ["Financial Accounting (FI)", "Sales and Distribution (SD)", "Materials Management (MM)", "Human Capital Management (HCM)"]}, {"title": "Module 3: ABAP & Customization", "topics": ["ABAP Programming Basics", "Data Dictionary", "Reports and Interfaces", "SAP Fiori Modern UX"]}]}');

-- Insert Initial Job Openings
INSERT INTO jobs (title, company, location, type, description) VALUES 
('Senior Java Developer', 'Cloudfare Technologies', 'Hyderabad, India', 'Full-time', 'Seeking an experienced Java developer with expertise in Spring Boot and Microservices.'),
('AI Engineer', 'Cloudfare Technologies', 'Remote', 'Full-time', 'Build and deploy generative AI models using Python and modern frameworks.');

-- Insert Initial Internship Programs
INSERT INTO internships (title, duration, location, description) VALUES 
('Full Stack Web Internship', '3 Months', 'Hyderabad / Remote', 'Work on live client projects using React and Node.js.'),
('Python for Data Science Internship', '4 Months', 'Bangalore', 'Learn data analysis and visualization with real-world datasets.');

-- Insert Testimonials
INSERT INTO testimonials (name, role, company, content, avatar_url) VALUES 
('Siddharth V.', 'SDE II', 'Microsoft', 'The transition from a student to a Professional Developer was seamless thanks to Cloudfare''s intensive training and dedicated placement cell.', NULL),
('Ananya R.', 'Product Manager', 'Google', 'Cloudfare''s curriculum is light years ahead. I gained practical skills that helped me ace my interviews at top-tier tech firms.', NULL),
('Karthik M.', 'Full Stack Lead', 'Amazon', 'The mentorship here is unparalleled. Working on real production systems during my internship gave me the confidence to lead teams today.', NULL),
('Priya S.', 'DevOps Engineer', 'Netflix', 'I started with zero knowledge of cloud architecture. Today, I manage global-scale deployments. Cloudfare changed my career trajectory.', NULL),
('Rahul K.', 'AI Research Engineer', 'Meta', 'The Generative AI program at Cloudfare is exceptional. It''s the perfect mix of theory and cutting-edge industry practice.', NULL);
