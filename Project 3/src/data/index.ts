import { NavItem, Skill, Project, Experience, Education, Service, Testimonial, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { id: 1, name: 'HTML5', icon: 'html', level: 95 },
  { id: 2, name: 'CSS3', icon: 'css', level: 90 },
  { id: 3, name: 'JavaScript', icon: 'javascript', level: 85 },
  { id: 4, name: 'TypeScript', icon: 'typescript', level: 80 },
  { id: 5, name: 'React', icon: 'react', level: 90 },
  { id: 6, name: 'Node.js', icon: 'nodejs', level: 75 },
  { id: 7, name: 'MongoDB', icon: 'mongodb', level: 70 },
  { id: 8, name: 'Git', icon: 'git', level: 85 },
  { id: 9, name: 'Tailwind CSS', icon: 'tailwind', level: 90 },
  { id: 10, name: 'Next.js', icon: 'nextjs', level: 80 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://innomatics-tasks-in1255138.netlify.app/25daystraining/assignment/innomaticsinternshiptask4/',
    codeLink: 'https://github.com/Shiva0909122/Innomatics_Tasks_IN1255138/tree/main/25DaysTraining/ASSIGNMENT/innomaticsInternshipTask4',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    demoLink: 'https://todo-app-r7d9.onrender.com/',
    codeLink: 'https://github.com/Shiva0909122/Innomatics_Tasks_IN1255138/tree/main/25DaysTraining/PROJECT/ToDoApp',
  },
  {
    id: 3,
    title: 'AI CHATBOT',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and more.',
    image: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    tags: ['Vite', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://shivaichatbot.netlify.app/',
    codeLink: 'https://github.com/Shiva0909122/AI-ChatBot',
  },
  {
    id: 4,
    title: 'Spotify Clone App',
    description: 'Spotifys content is vast and diverse, encompassing nearly all genres of music and a growing library of podcasts.',
    image: 'https://images.pexels.com/photos/5053985/pexels-photo-5053985.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React Native', 'Firebase'],
    demoLink: 'https://spotify-clone-mu-navy.vercel.app/',
    codeLink: 'https://github.com/Shiva0909122/spotify-clone',
  },
  {
    id: 5,
    title: 'Expense Tracker App',
    description: 'The term "Expense Tracker" refers to a tool or system used to record and monitor personal or business expenses.  There are many ways to implement an expense tracker, ranging from simple spreadsheets to sophisticated software applications.  .',
    image: 'https://github.com/Shiva0909122/expense-tracker/blob/main/et.png?raw=true',
    tags: ['React.js', 'Bootstrap', 'JavaScript','MongoDB (Atlas)' ],
    demoLink: 'https://expensetracker-elite.netlify.app/',
    codeLink: 'https://github.com/Shiva0909122/expense-tracker',
  },
  {
    id: 6,
    title: 'Jobhub',
    description: 'This is the core content.  Needs to be well-organized, searchable, and filterable by location, industry, keyword, salary range, job type (full-time, part-time, contract, etc.), and other relevant criteria.',
    image: 'https://private-user-images.githubusercontent.com/130677924/404739271-dee3c7c4-f9ea-4f01-82d6-62ad6e007461.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEwNjA2NjIsIm5iZiI6MTc0MTA2MDM2MiwicGF0aCI6Ii8xMzA2Nzc5MjQvNDA0NzM5MjcxLWRlZTNjN2M0LWY5ZWEtNGYwMS04MmQ2LTYyYWQ2ZTAwNzQ2MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwNFQwMzUyNDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNGYwNjk1YThhN2ZhMWRkYjNlOGIzODhmMWYyNjJiNzk5ODliYTQzZDNjYTk5OWUzYmY1ZTlhYWZhOTRiYzM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.4Cxfxp3OUiGwqTvEfeMYwCMEL0mcBsMuN4h807C0K7Q',
    tags: ['React Native','Node.js', 'Firebase'],
    demoLink: 'https://jobzhub.netlify.app/',
    codeLink: 'https://github.com/Shiva0909122/Jobhub',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Intern Frontend Developer',
    company: 'CFF IT.',
    duration: 'SEP 2023 - DEC 2023',
    description: [
      'Led a team of 5 developers in building a complex SaaS platform',
      'Implemented modern React architecture with TypeScript and Redux',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    id: 2,
    role: 'AF | MERN INTERN',
    company: 'Edureka Learning center',
    duration: 'Feb 2024 - Feb 2025',
    description: [
      'Developed responsive web applications using React and Next.js',
      'Collaborated with designers to implement pixel-perfect UI components',
      'Integrated RESTful APIs and implemented state management',
      'Participated in agile development processes and sprint planning',
    ],
  },
  {
    id: 3,
    role: 'Web Developer Intern',
    company: 'Innomatics Research Lab',
    duration: 'Jan 2025 - Present',
    description: [
      'Assisted in developing and maintaining company websites',
      'Learned modern JavaScript frameworks and best practices',
      'Participated in UI/UX design discussions',
      'Gained experience with version control and collaborative development',
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'MBA',
    institution: 'SRM University',
    duration: '2024 - 2026',
    description: 'Specialized in Web Technologies and Software Engineering with a focus on modern application development.',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Science',
    institution: 'Telangana University',
    duration: '2020 - 2023',
    description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies and best practices.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android devices.',
    icon: 'smartphone',
  },
  {
    id: 4,
    title: 'Technical Consultation',
    description: 'Providing expert advice on technology stack selection, architecture design, and development best practices.',
    icon: 'lightbulb',
  },
];



export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: 'GitHub',
    url: 'https://github.com/Shiva0909122',
    icon: 'github',
  },
  {
    id: 2,
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shivarth-dronachary/',
    icon: 'linkedin',
  },
  {
    id: 3,
    platform: 'Hackerrank',
    url: 'https://www.hackerrank.com/profile/shivarth_drona',
    icon: 'twitter',
  },
  {
    id: 4,
    platform: 'Instagram',
    url: 'https://www.instagram.com/shivarth_0_1_9_/',
    icon: 'instagram',
  },
];