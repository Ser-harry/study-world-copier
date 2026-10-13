export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  institution: "Engineering" | "Arts & Science" | "Allied Health Sciences";
  company: string;
  avatar?: string;
  initials: string;
  content: string;
  rating: number;
  year?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Aditya Varma",
    role: "Software Development Engineer",
    course: "B.E Computer Science & Engineering",
    institution: "Engineering",
    company: "Tata Consultancy Services (TCS)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    initials: "AV",
    content: "The dedicated placement training and state-of-the-art coding labs at Study World gave me the hands-on edge required to crack top tier technical interviews. The faculty mentorship here is unparalleled.",
    rating: 5,
    year: "Batch of 2024"
  },
  {
    id: "2",
    name: "Kavita Reddy",
    role: "Design Engineer",
    course: "B.E Mechanical Engineering",
    institution: "Engineering",
    company: "Mahindra & Mahindra",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    initials: "KR",
    content: "Our CAD/CAM and mechatronics laboratories provided us with real-world exposure from day one. Working on live industrial projects made transitioning into core mechanical engineering effortless.",
    rating: 5,
    year: "Batch of 2023"
  },
  {
    id: "3",
    name: "Sandeep Nair",
    role: "Cloud Solutions Associate",
    course: "BCA with IBM Collaboration",
    institution: "Arts & Science",
    company: "Infosys Technologies",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    initials: "SN",
    content: "The IBM knowledge partnership and cloud computing curriculum gave us enterprise credentials right while studying. Study World opens international doors for ambitious learners.",
    rating: 5,
    year: "Batch of 2024"
  },
  {
    id: "4",
    name: "Pooja Krishnan",
    role: "Logistics Operations Lead",
    course: "BBA Logistics & Supply Chain",
    institution: "Arts & Science",
    company: "DHL Global Forwarding",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    initials: "PK",
    content: "The specialized curriculum in supply chain and aviation management, combined with industry port visits and MOUs with logistics firms, prepared me for high-stakes supply chain roles.",
    rating: 5,
    year: "Batch of 2023"
  },
  {
    id: "5",
    name: "Dr. Rahul Menon",
    role: "Cardiac Technologist",
    course: "B.Sc Cardiac Technology",
    institution: "Allied Health Sciences",
    company: "Apollo Hospitals",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    initials: "RM",
    content: "Extensive clinical rotations and catheterization lab simulations under Tamil Nadu Dr. M.G.R. Medical University guidelines helped me gain confidence in critical cardiac diagnostics.",
    rating: 5,
    year: "Batch of 2024"
  },
  {
    id: "6",
    name: "Ananya Sundaram",
    role: "Clinical Psychologist & Counselor",
    course: "B.Sc Clinical Psychology",
    institution: "Arts & Science",
    company: "MindCare Wellness Center",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    initials: "AS",
    content: "The behavioral psychology lab and therapeutic case study sessions helped me develop true empathy and clinical diagnostics skills. The academic rigor here is world-class.",
    rating: 5,
    year: "Batch of 2023"
  }
];

export const topRecruiters = [
  "Zoho", "IBM", "Wipro", "LTI", "Texas Instruments", "HP", "Oracle",
  "Vedanta", "Virtusa", "Airtel", "Arm", "MakeMyTrip", "NVIDIA", "ELGi",
  "Mahindra", "Infoedge", "Cisco", "HCL", "Alliance Airlines"
];
