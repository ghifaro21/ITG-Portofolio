export interface Project {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Business Intelligence' | 'Web Development';
  techStack: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  preview?: 'powerbi' | 'tableau';
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'Work' | 'Organization';
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Ilham Taufiq Ghifari",
  shortName: "ITG.",
  role: "Mahasiswa Sains Data (Data Science Student & BI Analyst)",
  institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
  location: "Kota Bandung, Jawa Barat",
  email: "ilhamtagh@gmail.com",
  phone: "+62 81323221255",
  linkedin: "https://linkedin.com/in/itghifari/",
  github: "https://github.com/ghifaro21",
  whatsapp: "https://wa.me/6281323221255",
  bio: "Transforming Complex Data into Actionable Business Insights & ML Solutions.",
  subBio: "Data Science student at ULBI specializing in Machine Learning, Business Intelligence, and Interactive Web Analytics.",
  stats: [
    { label: "Data & ML Projects", value: "5+" },
    { label: "Data Records Analyzed", value: "100k+" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Klasifikasi Risiko Perlintasan Sebidang Kereta Api Bandung",
    category: "Machine Learning",
    techStack: ["Python", "Scikit-Learn", "Random Forest", "Streamlit", "OpenStreetMap"],
    metrics: [
      { label: "Accuracy", value: "85.51%" },
      { label: "Macro ROC AUC", value: "0.9538" },
      { label: "Crossings Scored", value: "342" }
    ],
    highlights: [
      "Automatic risk scoring for 342 railway crossings using PM 94/2018 & ALCAM rules.",
      "Trained Random Forest classifier reaching 85.51% accuracy and 0.9538 Macro ROC AUC.",
      "Deployed interactive real-time risk prediction application on Streamlit integrated with GIS map visualization."
    ],
    githubUrl: "https://github.com/ghifaro21/rf-level-crossing-risk-bandung",
  },
  {
    id: "proj-2",
    title: "BI Dashboard - Olist E-Commerce Sales Performance",
    category: "Business Intelligence",
    techStack: ["Power BI", "Power Query", "DAX", "Star Schema"],
    metrics: [
      { label: "Total Revenue", value: "R$13.59M" },
      { label: "Orders Analyzed", value: "100k+" },
      { label: "DAX Measures", value: "15+" }
    ],
    preview: "powerbi",
    highlights: [
      "Processed 100k+ orders across 9 relational tables; engineered 15+ complex DAX measures.",
      "Built 3 interactive dashboard pages tracking R$13.59M Revenue, delivery logistics, and regional performance.",
      "Provided strategic retention and targeted marketing recommendations based on payment method trends and customer segmentation."
    ],
  },
  {
    id: "proj-3",
    title: "Interactive Sales Dashboard - Amazon E-Commerce Dataset",
    category: "Business Intelligence",
    techStack: ["Tableau Public", "Data Storytelling", "EDA", "Business Analytics"],
    metrics: [
      { label: "Data Records", value: "100,000" },
      { label: "Cancellation Rate", value: "3.0%" },
      { label: "High-Value Segment", value: ">$500" }
    ],
    preview: "tableau",
    highlights: [
      "Analyzed 100k sales rows to construct 3 interactive visual dashboards on Tableau Public.",
      "Identified critical business metrics including a 3% order cancellation rate and key drivers in high-value customer segments (>$500).",
      "Delivered executive insights to streamline order fulfillment and boost average order value."
    ],
  },
  {
    id: "proj-4",
    title: "4in Sight - Academic Analytics Web App",
    category: "Web Development",
    techStack: ["Flask", "Python", "MVC Architecture", "HTML/CSS/JS"],
    metrics: [
      { label: "Architecture", value: "MVC Pattern" },
      { label: "Calculation Engine", value: "Real-Time" }
    ],
    highlights: [
      "Engineered real-time GPA/IPS calculation system for university students.",
      "Designed clean MVC architecture with intuitive UI for academic progress forecasting and target tracking."
    ],
    githubUrl: "https://github.com/ghifaro21/4inSight-Web",
  },
  {
    id: "proj-5",
    title: "EA Sports FC25 Player Position Classifier",
    category: "Machine Learning",
    techStack: ["Python", "Scikit-Learn", "Decision Tree", "Feature Engineering"],
    metrics: [
      { label: "Accuracy", value: "77.76%" },
      { label: "F1-Score", value: "77.62%" }
    ],
    highlights: [
      "Built Decision Tree classification model predicting FIFA/FC25 player positions based on in-game attribute vectors.",
      "Achieved 77.76% accuracy and 77.62% F1-Score through comprehensive feature selection and data preprocessing."
    ],
    githubUrl: "https://github.com/ghifaro21/FC25-Player-Position-Classifier",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Lunara Photo Studio",
    role: "Media Editor & Content Processing",
    period: "Aug 2022 - Jul 2024",
    type: "Work",
    description: [
      "Processed photos using Adobe Photoshop, Lightroom & Canva for social media campaigns and commercial ads.",
      "Boosted customer engagement over 2 years by standardizing brand design templates and post-production workflows.",
      "Collaborated with creative teams to produce high-impact promotional materials."
    ]
  },
  {
    id: "exp-2",
    company: "Geoff Max",
    role: "Customer Service (Part-time)",
    period: "May 2022 - Jul 2022",
    type: "Work",
    description: [
      "Handled online customer queries and provided tailored product guidance across multiple e-commerce channels.",
      "Resolved order tracking, sizing, and payment inquiries with high customer satisfaction ratings.",
      "Managed communication backlogs during promotional sales surges."
    ]
  },
  {
    id: "exp-3",
    company: "HIMASTA (Data Science Student Association)",
    role: "Head of RION Division",
    period: "Nov 2024 - Present",
    type: "Organization",
    description: [
      "Led research and innovative work programs designed for long-term organizational growth and academic enrichment.",
      "Organized student data science workshops, hackathons, and technical sharing sessions.",
      "Directed team initiatives in applying analytical methods to student organization challenges."
    ]
  },
  {
    id: "exp-4",
    company: "ILBBEC",
    role: "Vice Head of MEDINFO Division",
    period: "Nov 2024 - Present",
    type: "Organization",
    description: [
      "Managed design, branding, and strategic content creation for organizational events and announcements.",
      "Supervised media publication channels to maintain consistent visual identity across digital platforms."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    iconName: "Code2",
    skills: ["Python", "SQL", "NoSQL (MongoDB)", "HTML", "CSS", "JavaScript", "Flask", "Streamlit"]
  },
  {
    title: "Data & Machine Learning",
    iconName: "BrainCircuit",
    skills: ["Scikit-Learn", "Machine Learning Modeling", "EDA (Exploratory Data Analysis)", "Data Cleaning", "Data Modeling (Star Schema)"]
  },
  {
    title: "BI & Visualization Tools",
    iconName: "BarChart3",
    skills: ["Power BI", "Tableau", "Power Query", "DAX", "Microsoft Excel", "Google Cloud Platform (GCP)"]
  },
  {
    title: "Soft Skills & Management",
    iconName: "Sparkles",
    skills: ["Analytical Thinking", "Problem Solving", "Data Storytelling", "Project Management", "Team Leadership"]
  }
];
