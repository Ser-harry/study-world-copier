export interface CourseDetail {
  img: string;
  title: string;
  shortTitle: string;
  category: "Engineering" | "Arts & Science" | "Allied Health Sciences";
  duration: string;
  seats: string;
  desc: string;
  highlights: string[];
  careerPathways?: string[];
  affiliation?: string;
}

export const engineeringCourses: CourseDetail[] = [
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    title: "B.E Computer Science and Engineering",
    shortTitle: "Computer Science",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "CSE covers programming, algorithms, databases, networking, AI, and software engineering. Students develop hands-on expertise in full-stack engineering, machine learning, cloud architecture, and cybersecurity.",
    highlights: ["AICTE Approved", "AI & ML Lab", "Cloud Computing", "Hackathon Culture"],
    careerPathways: ["Software Engineer", "Systems Architect", "Full Stack Developer", "Tech Consultant"]
  },
  {
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    title: "B.E CSE with Cyber Security",
    shortTitle: "Cyber Security",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "Focuses on protecting computer systems, cloud infrastructure, and data from advanced cyber threats. Students master ethical hacking, cryptography, threat hunting, and network defense.",
    highlights: ["AICTE Approved", "Security Operations Center", "Ethical Hacking", "Industry Tie-ups"],
    careerPathways: ["Information Security Analyst", "Ethical Hacker", "SOC Specialist", "Security Consultant"]
  },
  {
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    title: "B.E CSE with Artificial Intelligence & Machine Learning (AIML)",
    shortTitle: "AI & ML",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "Specialized programme in building cognitive systems that learn and reason. Covers deep neural networks, computer vision, natural language processing, and autonomous agents.",
    highlights: ["AICTE Approved", "Deep Learning Labs", "AI Projects", "IBM Knowledge Partner"],
    careerPathways: ["AI/ML Engineer", "Data Scientist", "NLP Specialist", "Robotics AI Researcher"]
  },
  {
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    title: "B.E Electronics and Communication Engineering",
    shortTitle: "Electronics & Comm",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "ECE focuses on microelectronic devices, VLSI systems, wireless communication, and signal processing. Practical exposure across embedded IoT sensors, robotics, and microwave engineering.",
    highlights: ["AICTE Approved", "VLSI Design Lab", "IoT & Embedded Systems", "Signal Processing"],
    careerPathways: ["VLSI Engineer", "Embedded Systems Dev", "Telecom Specialist", "Robotics Engineer"]
  },
  {
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",
    title: "B.E Electrical and Electronics Engineering",
    shortTitle: "Electrical & Electronics",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "EEE covers electrical machinery, modern smart grids, power electronics, and renewable energy systems. Students gain expertise in automation, EV technologies, and power management.",
    highlights: ["AICTE Approved", "Power Systems Lab", "Renewable Energy Lab", "EV Technology"],
    careerPathways: ["Power Systems Engineer", "EV Drive Specialist", "Control Systems Lead", "Automation Engineer"]
  },
  {
    img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop",
    title: "B.E Mechanical Engineering",
    shortTitle: "Mechanical Engg",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "Mechanical Engineering covers thermo-fluid dynamics, CAD/CAM drafting, automated manufacturing, and robotics. Modern workshops equipped with CNC machines and mechatronics units.",
    highlights: ["AICTE Approved", "CAD/CAM Center", "Mechatronics Lab", "Automotive Tie-ups"],
    careerPathways: ["Design Engineer", "Automotive Specialist", "Manufacturing Lead", "Thermal Consultant"]
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    title: "B.Tech Artificial Intelligence & Data Science (AIDS)",
    shortTitle: "AI & Data Science",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "Interdisciplinary programme uniting advanced mathematical modeling, predictive big data pipelines, and machine intelligence to engineer business-grade AI solutions.",
    highlights: ["AICTE Approved", "Big Data Analytics", "Data Visualization", "IBM Partnered"],
    careerPathways: ["Data Scientist", "Big Data Architect", "Machine Learning Specialist", "BI Strategist"]
  },
  {
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    title: "B.Tech Information Technology",
    shortTitle: "Information Technology",
    category: "Engineering",
    duration: "4 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "IT focuses on cloud architecture, enterprise networking, software lifecycle management, and scalable web solutions supporting digital-first industries.",
    highlights: ["AICTE Approved", "Enterprise Systems", "Cloud DevOps", "Industry Internships"],
    careerPathways: ["Cloud Engineer", "IT Infrastructure Lead", "DevOps Engineer", "Software Consultant"]
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    title: "Master of Business Administration (MBA)",
    shortTitle: "MBA",
    category: "Engineering",
    duration: "2 Years",
    seats: "60",
    affiliation: "Anna University | AICTE",
    desc: "Postgraduate programme honing strategic leadership, financial acumen, marketing intelligence, and human resource management to prepare top-echelon executives.",
    highlights: ["AICTE Approved", "Case Study Driven", "Corporate Mentorship", "Executive Networking"],
    careerPathways: ["Corporate Manager", "Business Analyst", "Marketing Strategist", "Investment Consultant"]
  }
];

export const artsCourses: CourseDetail[] = [
  {
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
    title: "B.Com (Computer Applications)",
    shortTitle: "B.Com (CA)",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Blends core commerce, banking, taxation, and financial auditing with practical computer applications, database management, and modern accounting software.",
    highlights: ["Bharathiar University", "Tally & ERP Training", "Financial Modeling", "Corporate Placements"],
    careerPathways: ["Financial Analyst", "Tax Consultant", "Corporate Accountant", "Banking Executive"]
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    title: "B.Com (CA) with Integrated Chartered Accountancy",
    shortTitle: "B.Com (CA) + CA",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Rigorous commerce curriculum integrated with foundation and intermediate Chartered Accountancy (CA) preparation, taught by seasoned chartered accountants and industry mentors.",
    highlights: ["Bharathiar University", "Integrated CA Coaching", "Audit Practicums", "High Pass Rate"],
    careerPathways: ["Chartered Accountant (CA)", "Statutory Auditor", "Investment Banker", "Finance Director"]
  },
  {
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
    title: "Bachelor of Business Administration (BBA)",
    shortTitle: "BBA",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Develops managerial acumen, organizational behavior understanding, brand marketing strategies, and entrepreneurial problem-solving skills for corporate leadership.",
    highlights: ["Bharathiar University", "Business Incubation", "Leadership Seminars", "Corporate MOUs"],
    careerPathways: ["Business Development Lead", "HR Specialist", "Marketing Associate", "Operations Manager"]
  },
  {
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
    title: "BBA with Aviation Management",
    shortTitle: "BBA Aviation",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Specialized undergraduate programme covering airport operations, airline administration, passenger handling, aviation safety protocols, and international air traffic economics.",
    highlights: ["Bharathiar University", "Airport Internship MOUs", "Airline Operations", "Aviation Safety"],
    careerPathways: ["Airport Operations Lead", "Airline Operations Manager", "Aviation Safety Officer", "Cargo Specialist"]
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    title: "BBA Logistics & Supply Chain Management",
    shortTitle: "BBA Logistics",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Trains students in domestic and global supply networks, warehouse management systems, freight logistics, inventory control, and multi-modal transportation.",
    highlights: ["Bharathiar University", "Port & Freight Visits", "Supply Chain Analytics", "Logistics Tie-ups"],
    careerPathways: ["Logistics Executive", "Supply Chain Analyst", "Warehouse Operations Head", "Freight Coordinator"]
  },
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    title: "Bachelor of Computer Applications (BCA)",
    shortTitle: "BCA",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Professional computer applications degree covering full-stack web development, Python, Java, database administration, and software testing for rapid IT careers.",
    highlights: ["Bharathiar University", "Advanced Coding Labs", "Full-Stack Projects", "IT Industry Ready"],
    careerPathways: ["Software Developer", "Web Application Dev", "Database Administrator", "System Analyst"]
  },
  {
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    title: "BCA with IBM Collaboration / Advanced Tech",
    shortTitle: "BCA (IBM)",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University | IBM",
    desc: "Industry-collaborative BCA integrated with IBM curriculum tracks across Artificial Intelligence, Data Science, Machine Learning, and Cloud Computing platforms.",
    highlights: ["IBM Knowledge Partner", "Industry Certifications", "Cloud Infrastructure", "Corporate Masterclasses"],
    careerPathways: ["AI/ML Specialist", "Cloud Solutions Associate", "Data Analyst", "Enterprise Software Dev"]
  },
  {
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Computer Science - AI & DS",
    shortTitle: "B.Sc CS (AI & DS)",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Cutting-edge degree combining deep computing theory with artificial intelligence and predictive data analytics, preparing graduates for high-demand analytical roles.",
    highlights: ["Bharathiar University", "Python & Data Science", "Algorithm Labs", "Applied AI Projects"],
    careerPathways: ["Data Analyst", "AI Associate", "Machine Learning Dev", "Business Intelligence Analyst"]
  },
  {
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Computer Science",
    shortTitle: "B.Sc CS",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Foundational computer science degree cultivating mathematical logic, system architectures, network protocols, operating systems, and object-oriented programming.",
    highlights: ["Bharathiar University", "Core Computing Focus", "High-Tech Lab", "M.Sc / MCA Stepping Stone"],
    careerPathways: ["Programmer", "Network Administrator", "Systems Specialist", "Software Engineer"]
  },
  {
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Information Technology",
    shortTitle: "B.Sc IT",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Hands-on technology degree centered on enterprise network administration, cyber security fundamentals, software deployment, and server infrastructure.",
    highlights: ["Bharathiar University", "Server Infrastructure", "Network Security", "Industry Training"],
    careerPathways: ["IT Support Specialist", "System Admin", "Network Consultant", "Cloud Ops Associate"]
  },
  {
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Clinical Psychology",
    shortTitle: "B.Sc Psychology",
    category: "Arts & Science",
    duration: "3 Years",
    seats: "60",
    affiliation: "Bharathiar University",
    desc: "Study of psychological assessment, human cognition, behavioral dynamics, psychopathology, and clinical counseling strategies under expert psychiatric practitioners.",
    highlights: ["Bharathiar University", "Behavioral Lab", "Psychometric Testing", "Hospital Case Work"],
    careerPathways: ["Clinical Counselor", "Mental Health Practitioner", "HR & Org Psychologist", "Rehabilitation Specialist"]
  }
];

export const alliedHealthCourses: CourseDetail[] = [
  {
    img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Cardiac Technology",
    shortTitle: "Cardiac Technology",
    category: "Allied Health Sciences",
    duration: "3 Years + 1 Year Internship",
    seats: "50",
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    desc: "Specialized cardiovascular healthcare programme training technologists to assist interventional cardiologists in catheterization labs, operate advanced echocardiography ultrasound, analyze ECGs, and manage cardiac monitoring units.",
    highlights: ["TNMGRMU Affiliated", "Cath Lab Rotations", "Echocardiography & ECG", "Multi-Speciality Hospital Training"],
    careerPathways: ["Cardiac Care Technologist", "Cath Lab Assistant", "Echocardiographer", "ICU Cardiac Specialist"]
  },
  {
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Medical Laboratory Technology",
    shortTitle: "Medical Lab Tech (MLT)",
    category: "Allied Health Sciences",
    duration: "3 Years + 1 Year Internship",
    seats: "50",
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    desc: "Comprehensive diagnostic medicine degree covering clinical biochemistry, hematology, medical microbiology, histopathology, and blood banking technologies to conduct vital clinical pathology tests.",
    highlights: ["TNMGRMU Affiliated", "Automated Clinical Analyzers", "Pathology & Microbiology", "Hospital Lab Rotations"],
    careerPathways: ["Medical Lab Technologist", "Clinical Biochemist", "Pathology Supervisor", "Blood Bank Specialist"]
  },
  {
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Operation Theatre and Anaesthesia Technology",
    shortTitle: "OT & Anaesthesia Tech",
    category: "Allied Health Sciences",
    duration: "3 Years + 1 Year Internship",
    seats: "50",
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    desc: "Prepares students to manage high-tech surgical operating rooms, calibrate anaesthesia workstations, ensure sterile asepsis, and directly assist chief surgeons and anaesthesiologists through critical operations.",
    highlights: ["TNMGRMU Affiliated", "Modular OT Simulation", "Anaesthesia Monitoring", "Emergency & Trauma Care"],
    careerPathways: ["OT Technologist", "Anaesthesia Associate", "Surgical Suite Coordinator", "Critical Care Assistant"]
  },
  {
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
    title: "B.Sc Radiography and Imaging Technology",
    shortTitle: "Radiography & Imaging",
    category: "Allied Health Sciences",
    duration: "3 Years + 1 Year Internship",
    seats: "50",
    affiliation: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    desc: "Trains diagnostic radiology professionals to operate modern MRI scanners, multi-slice CT units, digital X-rays, mammography, and fluoroscopy systems adhering to AERB radiation safety standards.",
    highlights: ["TNMGRMU Affiliated", "MRI & CT Scan Protocols", "Digital Radiography", "Radiation Safety (AERB)"],
    careerPathways: ["Radiologic Technologist", "MRI Specialist", "CT Scan Technologist", "Medical Imaging Consultant"]
  }
];

export const allCourses = [
  ...engineeringCourses,
  ...artsCourses,
  ...alliedHealthCourses
];
