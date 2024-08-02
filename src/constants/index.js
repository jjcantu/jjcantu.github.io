import {
  aa,
  backend,
  bnlogo2,
  seedstarter,
  babble,
  roadtrip,
  css,  
  docker,
  git,
  graphql,  
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  uil,
  utrgv,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'github',
    title: "Github",
    isExternal: true,
    to: "https://github.com/jjcantu"
  },
  {
    id: 'linkedin',
    title: "LinkedIn",
    isExternal: true,
    to: "https://www.linkedin.com/in/jose-cantu-91362a1a9/"
  },
];

const services = [
  {
    title: 'Full Stack Engineer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'docker',
    icon: docker,
  },
  // {
  //   name: 'aws',
  //   icon: aws,
  // }
];

const experiences = [
  {
    title: 'Full Stack Engineer',
    company_name: 'BoomNation',
    icon: bnlogo2,
    iconBg: '#383E56',
    date: 'August 2022 - Present',
    points: [
      'Worked on a team of 3 engineers and heavily utilized React Native to get the BoomNation app to the top 40 on the App Store and Google Play Store.',
      'Developed scalable infrastructure using Amazon EC2 and implemented strict testing guidelines to ensure 100% uptime for BoomNation app with over 100,000 users',
      'Built and maintained the back-end infrastructure using technologies such as Node.js, Apollo GraphQL, and PostgreSQL, which enabled the company to handle a high volume of traffic and increase revenue by 20%.',
      'Utilized agile development methodologies to consistently deliver over 1000+ lines of well-structured and maintainable code per week.',
    ],
  },
  {
    title: 'Software Engineer Student',
    company_name: 'App Academy',
    icon: aa,
    iconBg: '#383E56',
    date: 'July 2021 - Jan 2022',
    points: [
      'Acquired proficiency in industry-leading technologies such as React, Node.js, and PostgreSQL, leveraging them to develop robust full-stack web applications.',
      'Demonstrated a strong grasp of data structures and algorithms, employing them effectively to tackle intricate problems with efficiency and precision.',
      'Collaborated within agile development teams of four, contributing to the creation of multiple full-stack applications. Embracing agile methodologies, I gained valuable experience in working within a professional environment.',
      'Engaged in daily pair programming sessions, fostering improved communication skills and a collaborative mindset. This experience enhanced my ability to work effectively within teams and strengthened my capacity as a valuable team player',
    ],
  },
  {
    title: 'Technical Coordinator',
    company_name: 'University Interscholastic League',
    icon: uil,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Managed the OMEGA timing system to capture and analyze the performance data of hundreds of swimmers during swim meets, ensuring accurate and timely results.',
      'Developed and maintained a system to manage and store the data securely, using SQL and Excel spreadsheets to track athlete times and statistics',
      'Collaborated with the technical team to troubleshoot system issues and ensure optimal performance during high-pressure events',
    ],
  },
  {
    title: 'Computer Science Major',
    company_name: 'The University of Texas Rio Grande Valley - DNF',
    icon: utrgv,
    iconBg: '#E6DEDD',
    date: 'Aug 2020 - May 2021',
    points: [
      'I attended The University of Texas Rio Grande Valley, where I pursued a degree in Computer Science and successfully maintained a flawless 4.0 GPA throughout my studies.',
    ],
  },
];

const projects = [
  {
    name: 'Seed Starter',
    description:
        'A community-focused Kickstarter clone empowering local projects with support and funding. Join us in transforming neighborhoods through creativity, collaboration, and positive change.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'pink-text-gradient',
      },
    ],
    image: seedstarter,
    source_code_link: 'https://github.com/a-sugawara/seedStart',
  },
  {
    name: 'Babble',
    description:
        'Web application that enables users communicate with one another. Users can create channels, send messages, and upload files.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'pink-text-gradient',
      },
    ],
    image: babble,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Road Trip',
    description:
        'A comprehensive travel booking platform that allows users to rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'pink-text-gradient',
      },
    ],
    image: roadtrip,
    source_code_link: 'https://github.com/',
  },
];

export {
  experiences, projects,
  services, technologies,
};
