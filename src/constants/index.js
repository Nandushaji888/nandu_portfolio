import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over an year of hands-on experience, I have honed my skills in front-end technologies like React,html,css and Redux etc, as well as back-end technologies like Node.js, Express, PostgreSQL,Microservice,Typescript and MongoDB etc. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over an year of hands-on experience, I have worked with a variety of technologies, including React, Node.js, Express, and MongoDB. Also my expertise extends to technologies like TypeScript, microservices, Redux, and Bootstrap etc.., ensuring I can deliver scalable backend services and user-facing features effectively. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "MERN Stack Developer (Student trainee)",
    company: "Brototype",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule`,
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "mongoDB",
      "Microservice",
      "Express",
      "Docker",
      "Clean Architecture",
    ],
  },
  {
    year: "1.5 years",
    role: "Sales Associate & Delivery Coordinator",
    company: "OLA Electric",
    description:
      "Successfully met sales targets and managed customer relationships. Coordinated deliveries across Kerala, led the delivery team, and achieved delivery targets.",
    technologies: [
      "Customer Relationship Management",
      "Leadership",
      "Work Under Pressure",
      "Target Achievement",
    ],
  },

  {
    year: "6 months",
    role: "Sales Executive",
    company: "Eureka Forbes",
    description: `Performed as a Sales Executive, consistently meeting sales targets and driving revenue growth..`,
    technologies: [
      "Target Achievement",
      "Telemarketing",
      "Work Under Pressure",
      "Customer Relationship Management",
    ],
  },
  // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  {
    year: "1 year",
    role: "Articled Assistant",
    company: "ANIYAPPAN&ASSOCIATES, CA FIRM ",
    description: `Assisting in the planning, execution, and finalization of audit assignments .`,
    technologies: [
      "MicroSoft Applications",
      "Time management",
      "Client Interaction",
      "Work under pressure",
    ],
  },
];

export const PROJECTS = [
  {
    title: "VisionVogue- E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like Product listing, Product Management, Cart Management, Category Management, Coupon Management, Banner Management, Order Management, Filtering, Sorting, Pagination, Account Management, Sales Report and Invoice generator, Graph and Chart report for admin.",
    technologies: [
      "HTML",
      "CSS",
      "EJS",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "Node mailer",
      "MVC Architecture",
    ],
    link:'https://github.com/Nandushaji888/VisionVogue'
  },
  {
    title: "CareerCrafter- Job Portal Website",
    image: project2,
    description:
      "CareerCrafter is a job finding/posting platform where recruiters can post jobs with asking optional questions and users can view and apply jobs. It follows a microservice approach with asynchronous message system that is setup using Kafka.",
    technologies: ["Clean Architecture", "Node.js", "TypeScript", "Firebase","S3 Bucket","React.js","Redux","JWT","use-place-autocomplete","Mapbox API","Socket.io","jitsi"],
    link:'https://github.com/Nandushaji888/CareerCrafter_Frontend'

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion"],
    link:'https://github.com/Nandushaji888/nandu_portfolio'

  },
  {
    title: "Mini Projects",
    image: project4,
    description:
      "I have created a number of mini projects",
    technologies: ["HTML", "CSS", "React.js", "WebRTC","Nodejs","Bootstrap"],
    link:'https://github.com/Nandushaji888'
  },
];

export const CONTACT = {
  address: "Cochin,Kerala",
  phoneNo: "7356360872",
  email: "nanduts888@gmail.com",
};
