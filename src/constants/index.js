import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  ibm,
  ep,
  kevit,
  zero,
  am
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "iOS App Development",
    icon: fullstack,
  },
  {
    title: "SwiftUI & UIKit",
    icon: backend,
  },
  {
    title: "SDK & Framework Development",
    icon: mobile,
  },
  {
    title: "API Integration",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Information Technology",
    company_name: "Gujarat Technological University",
    icon: otu,
    iconBg: "#fff",
    date: "June 2020 - June 2024",
    points: [
      "CGPA: 9.02 / 10",
    ],
  },
  {
    title: "Higher Secondary (Science)",
    company_name: "Gujarat University",
    icon: rhhs,
    iconBg: "#fff",
    date: "June 2018 - June 2020",
    points: [
      "Score: 74.92%",
    ],
  },
];

const technologies = [
  {
    name: "Swift",
    icon: mobile,
  },
  {
    name: "SwiftUI",
    icon: reactjs,
  },
  {
    name: "UIKit",
    icon: web,
  },
  {
    name: "AVFoundation",
    icon: backend,
  },
  {
    name: "WidgetKit",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "GraphQL",
    icon: aws,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Firebase",
    icon: google,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "iOS Developer",
    company_name: "Enpoint | Mumbai",
    icon: ep,
    iconBg: "#fff",
    date: "Sep 2024 - Present",
    points: [
      "Working on a live global cinema iOS application (Cinépolis GO) available on the App Store.",
      "Contributing to feature development, enhancements, and maintenance using SwiftUI and UIKit.",
      "Integrating GraphQL APIs and collaborating with cross-functional teams in an Agile environment.",
    ],
  },
  {
    title: "iOS Developer",
    company_name: "Zerones | Mumbai",
    icon: zero,
    iconBg: "#fff",
    date: "Jan 2024 - Sep 2024",
    points: [
      "Conducted code modifications to improve application execution and performance.",
      "Analyzed client requirements and collaborated with the team to deliver solutions.",
      "Explored alternate development options under the guidance of senior developers.",
    ],
  },
  {
    title: "Backend Intern",
    company_name: "Kevit Technologies | Rajkot, Gujarat",
    icon: kevit,
    iconBg: "#fff",
    date: "Jul 2023 - Dec 2023",
    points: [
      "Created APIs in TypeScript with MongoDB.",
      "Learned and worked with JavaScript, Node.js, and Nest.js.",
    ],
  },
];


const extracurricular = [
  {
    title: "Azadi Ka Amrit Mahotsav Hackathon 2022",
    type: "Finalist & Team Lead",
    icon: am,
    iconBg: "#052FAD",
    date: "2022",
    points: [
      "Led a team in a national-level hackathon and reached finalist stage.",
    ],
    certificate_link: "https://drive.google.com/file/d/12thH3t5GdIXNhPXq7y2IrkwYREEmtSDu/view?usp=drive_link",
  },
  {
    title: "Google Cloud Platform Bootcamp",
    type: "Certification",
    icon: google,
    iconBg: "#000000",
    date: "Completed",
    points: [
      "Hands-on cloud fundamentals and deployment concepts.",
    ],
    certificate_link: "https://drive.google.com/file/d/1FRpRbwKpg6Vr5UzU3Zk1rmK5Ji1zuGsV/view?usp=drive_link",
  },
  {
    title: "Python Mega Course",
    type: "Certification",
    icon: python,
    iconBg: "#000000",
    date: "Completed",
    points: ["Python programming fundamentals and practical problem-solving."],
    certificate_link: "https://drive.google.com/file/d/1eL4AnCaiqu9G-tDNTBGhY0ege6EzDQrY/view?usp=drive_link",
  },
  {
    title: "Android Programming with Java",
    type: "Certification",
    icon: java,
    iconBg: "#748C7B",
    date: "Completed",
    points: ["Core Android application development with Java."],
    certificate_link: "https://drive.google.com/file/d/1RKXGEmSCfz--WoOudQU5rl0o4SRnV5GR/view?usp=drive_link",
  },
];

const projects = [
  {
    name: "InfyU SDK Frameworks",
    description:
      "Developed two reusable iOS frameworks for Unity-based applications, including Swift SDKs with C# bridging files for smooth Unity integration.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Unity Bridge",
        color: "green-text-gradient",
      },
      {
        name: "SDK Development",
        color: "pink-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "https://github.com/Infyu-Labs/infyu_track_unity_ios_framework",
    live_project_link: "https://github.com/Infyu-Labs/infyu_track_unity_ios_framework",
  },
  {
    name: "Custom Video & Engagement Frameworks",
    description:
      "Built a custom video player framework supporting HLS, MP4, and MOV using AVFoundation and SwiftUI, along with a user engagement & tracking framework with push notifications and in-app messaging (Swift 6).",
    tags: [
      {
        name: "AVFoundation",
        color: "blue-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "green-text-gradient",
      },
      {
        name: "Swift 6",
        color: "pink-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://github.com/Infyu-Labs/video_player_sdk_framework",
    live_project_link: "https://github.com/Infyu-Labs/video_player_sdk_framework",
  },
  {
    name: "Widget Pixel Pet",
    description:
      "Developed Widget Pixel Pet at Appcake using WidgetKit and SwiftUI, focused on interactive and polished iOS home-screen experiences.",
    tags: [
      {
        name: "WidgetKit",
        color: "blue-text-gradient",
      },
      {
        name: "SwiftUI",
        color: "green-text-gradient",
      },
      {
        name: "iOS",
        color: "pink-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "https://github.com/brindadavda/Widget-Pixel-Pet-Swift-UI-",
    live_project_link: "https://github.com/brindadavda/Widget-Pixel-Pet-Swift-UI-",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
