import courseMech from "@/assets/course-mechanical.jpg";
import courseECE from "@/assets/course-ece.jpg";
import courseEEE from "@/assets/course-eee.jpg";
import courseCSE from "@/assets/course-cse.jpg";

export interface CourseDetail {
  img: string;
  title: string;
  shortTitle: string;
  duration: string;
  seats: string;
  desc: string;
  highlights: string[];
}

const defaultImg = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

export const engineeringCourses: CourseDetail[] = [
  {
    img: courseCSE,
    title: "B.E Computer Science and Engineering",
    shortTitle: "Computer Science",
    duration: "4 Years",
    seats: "60",
    desc: "CSE covers programming, algorithms, databases, networking, AI, and software engineering. Students develop skills in full-stack development, machine learning, cloud computing, and cybersecurity.",
    highlights: ["AICTE Approved", "AI & ML Lab", "Cloud Computing", "Hackathon Culture"],
  },
  {
    img: courseECE,
    title: "B.E CSE with Cyber Security",
    shortTitle: "Cyber Security",
    duration: "4 Years",
    seats: "60",
    desc: "Focuses on protecting computer systems, networks, and data from attacks, unauthorized access, and damage. Students learn ethical hacking, cryptography, and network security.",
    highlights: ["AICTE Approved", "Security Operations Center", "Ethical Hacking", "Industry Tie-ups"],
  },
  {
    img: courseEEE,
    title: "B.E CSE with Artificial Intelligence & Machine Learning (AIML)",
    shortTitle: "AI & ML",
    duration: "4 Years",
    seats: "60",
    desc: "Specialized program in building intelligent systems that can learn and reason. Covers neural networks, deep learning, natural language processing, and computer vision.",
    highlights: ["AICTE Approved", "Deep Learning Labs", "AI Projects", "Research Focus"],
  },
  {
    img: courseECE,
    title: "B.E Electronics and Communication Engineering",
    shortTitle: "Electronics & Communication",
    duration: "4 Years",
    seats: "60",
    desc: "ECE focuses on electronic devices, circuits, communication systems, and signal processing. Students gain hands-on experience with VLSI design, embedded systems, and wireless tech.",
    highlights: ["AICTE Approved", "Advanced Signal Processing Lab", "IoT & Embedded Systems", "Research Opportunities"],
  },
  {
    img: courseEEE,
    title: "B.E Electrical and Electronics Engineering",
    shortTitle: "Electrical & Electronics",
    duration: "4 Years",
    seats: "60",
    desc: "EEE encompasses power systems, electrical machines, control systems, and renewable energy. Students are trained in power generation, distribution, automation, and smart grid tech.",
    highlights: ["AICTE Approved", "Power Systems Lab", "Renewable Energy Focus", "Industrial Training"],
  },
  {
    img: courseMech,
    title: "B.E Mechanical Engineering",
    shortTitle: "Mechanical Engineering",
    duration: "4 Years",
    seats: "60",
    desc: "Mechanical Engineering covers the design, analysis, manufacturing, and maintenance of mechanical systems. Students learn thermodynamics, fluid mechanics, and material science.",
    highlights: ["AICTE Approved", "Ana University Affiliated", "Modern Labs & Workshops", "Industry Partnerships"],
  },
  {
    img: defaultImg,
    title: "B.Tech Artificial Intelligence & Data Science (AIDS)",
    shortTitle: "AI & Data Science",
    duration: "4 Years",
    seats: "60",
    desc: "Combines data analysis and artificial intelligence to extract insights from large datasets. Topics include data mining, big data analytics, and predictive modeling.",
    highlights: ["AICTE Approved", "Big Data Labs", "Data Viz", "Industry Projects"],
  },
  {
    img: defaultImg,
    title: "B.Tech Information Technology",
    shortTitle: "Information Technology",
    duration: "4 Years",
    seats: "60",
    desc: "IT focuses on computing technology applied to business processes. Students learn database administration, network architecture, and enterprise software development.",
    highlights: ["AICTE Approved", "IT Infrastructure Labs", "Enterprise Coding", "Internships"],
  },
  {
    img: defaultImg,
    title: "Master of Business Administration (MBA)",
    shortTitle: "MBA",
    duration: "2 Years",
    seats: "60",
    desc: "Postgraduate degree focusing on leadership, business management, marketing, finance, and human resources. Prepares students for corporate leadership roles.",
    highlights: ["AICTE Approved", "Case Studies", "Corporate Tie-ups", "Management Forums"],
  }
];

export const artsCourses: CourseDetail[] = [
  {
    img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2000&auto=format&fit=crop",
    title: "B.Com (Computer Applications)",
    shortTitle: "B.Com (CA)",
    duration: "3 Years",
    seats: "60",
    desc: "Integrates commerce and computer applications. Students learn accounting, finance, taxation, along with software tech and business applications.",
    highlights: ["Bharathiar University", "Modern Labs", "Tally Training", "Industry Ready"],
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    title: "Bachelor of Business Administration (BBA)",
    shortTitle: "BBA",
    duration: "3 Years",
    seats: "60",
    desc: "Provides foundational training in business principles, management strategies, and entrepreneurship. Prepares students for various roles in business administration.",
    highlights: ["Bharathiar University", "Business Projects", "Leadership Skills", "Soft Skills"],
  },
  {
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
    title: "BBA with Aviation",
    shortTitle: "BBA Aviation",
    duration: "3 Years",
    seats: "60",
    desc: "Specialized business program covering airport management, airline operations, and passenger forecasting. Ideal for students aspiring for the aviation sector.",
    highlights: ["Bharathiar University", "Aviation Management", "Industry Visits", "Specialized Training"],
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?q=80&w=2000&auto=format&fit=crop",
    title: "BBA Logistics & Supply Chain Management",
    shortTitle: "BBA Logistics",
    duration: "3 Years",
    seats: "60",
    desc: "Focuses on the efficient flow of goods, services, and information. Topics include procurement, warehousing, global logistics, and transportation.",
    highlights: ["Bharathiar University", "Supply Chain Focus", "Practical Training", "High Demand Field"],
  },
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    title: "Bachelor of Computer Applications (BCA)",
    shortTitle: "BCA",
    duration: "3 Years",
    seats: "60",
    desc: "Comprehensive program covering software development, web design, databases, and programming languages to train students for IT roles.",
    highlights: ["Bharathiar University", "Coding Labs", "Project Based", "IT Sector Ready"],
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    title: "BCA with IBM",
    shortTitle: "BCA with IBM",
    duration: "3 Years",
    seats: "60",
    desc: "An industry-integrated BCA program in collaboration with IBM, providing access to advanced technologies, platforms, and IBM industry experts.",
    highlights: ["IBM Knowledge Partner", "Industry Curriculum", "Expert Sessions", "Advanced Tech"],
  },
  {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop",
    title: "BSc AI & DS",
    shortTitle: "BSc AI & DS",
    duration: "3 Years",
    seats: "60",
    desc: "Undergraduate degree focusing on artificial intelligence and data science theory, algorithms, and applications. Trains students for data-driven industries.",
    highlights: ["Bharathiar University", "Data Mining Labs", "AI Projects", "Growing Field"],
  },
  {
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Computer Science",
    shortTitle: "BSc CS",
    duration: "3 Years",
    seats: "60",
    desc: "Foundational computer science degree focusing on computational theory, programming, systems architecture, and mathematical foundations.",
    highlights: ["Bharathiar University", "Strong Fundamentals", "System Logic", "Core Computing"],
  },
  {
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Information Technology",
    shortTitle: "BSc IT",
    duration: "3 Years",
    seats: "60",
    desc: "Technology program emphasizing practical applications, software deployment, and infrastructure management for organizations.",
    highlights: ["Bharathiar University", "Practical Focus", "Software Tools", "Networking"],
  },
  {
    img: "https://images.unsplash.com/photo-1551847677-dc82d7624c96?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Clinical Psychology",
    shortTitle: "BSc Psychology",
    duration: "3 Years",
    seats: "60",
    desc: "Study of psychological principles, behavioral patterns, and therapeutic strategies. Prepares students for roles in mental health and counseling.",
    highlights: ["Bharathiar University", "Behavioral Lab", "Case Studies", "Counseling Training"],
  }
];

export const alliedHealthCourses: CourseDetail[] = [
  {
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Cardiac Technology",
    shortTitle: "Cardiac Technology",
    duration: "4 Years",
    seats: "50",
    desc: "Trains students in cardiovascular diagnosis and therapeutic procedures. Includes handling ECGs, echocardiography, and assisting in cath labs.",
    highlights: ["TNMGRMU Affiliated", "Clinical Rotations", "Advanced Equipment", "Hospital Training"],
  },
  {
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Medical Laboratory Technology",
    shortTitle: "Medical Lab Tech",
    duration: "4 Years",
    seats: "50",
    desc: "Focuses on the diagnosis, treatment, and prevention of disease through the use of clinical laboratory tests. Covers pathlogy, microbiology, and biochemistry.",
    highlights: ["TNMGRMU Affiliated", "Practical Labs", "Diagnostic Training", "High Demand"],
  },
  {
    img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Operation Theatre and Anaesthesia Technology",
    shortTitle: "OT & Anaesthesia",
    duration: "4 Years",
    seats: "50",
    desc: "Prepares students to manage the operation theatre environment, handle surgical instruments, and assist anesthetists during surgical procedures.",
    highlights: ["TNMGRMU Affiliated", "OT Simulation", "Surgical Assistance", "Safety Protocols"],
  },
  {
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop",
    title: "BSc Radiography and Imaging Technology",
    shortTitle: "Radiography",
    duration: "4 Years",
    seats: "50",
    desc: "Trains professionals to use X-rays, MRI, CT scans, and other imaging equipment to help diagnose illnesses and injuries accurately.",
    highlights: ["TNMGRMU Affiliated", "Imaging Tech", "Radiation Safety", "Diagnostic Analysis"],
  }
];
